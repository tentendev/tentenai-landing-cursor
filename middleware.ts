import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Detect language from browser Accept-Language header
function detectLanguageFromHeaders(acceptLanguage: string | null): string {
  if (!acceptLanguage) return 'en'
  
  const lang = acceptLanguage.toLowerCase()
  
  // Map browser language codes to our supported languages
  if (lang.includes('zh-tw') || lang.includes('zh-hk')) return 'zh'
  if (lang.includes('zh-cn') || lang.includes('zh')) return 'zh-cn'
  if (lang.includes('ja')) return 'ja'
  if (lang.includes('ko')) return 'ko'
  if (lang.includes('ar')) return 'ar'
  
  return 'en' // Default to English
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Only handle root path for auto-detection
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language')
    const detectedLang = detectLanguageFromHeaders(acceptLanguage)
    
    // If browser language is not English and user hasn't set preference, redirect to language path
    if (detectedLang !== 'en' && !request.cookies.get('language-preference')) {
      const redirectUrl = new URL(`/${detectedLang}`, request.url)
      const response = NextResponse.redirect(redirectUrl)
      
      // Set cookie to remember user preference (optional, expires in 1 day)
      response.cookies.set('language-preference', detectedLang, { 
        maxAge: 60 * 60 * 24, // 1 day
        httpOnly: false, // Allow client-side access
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      })
      
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 