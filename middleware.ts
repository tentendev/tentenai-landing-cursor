import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domain mapping for production
const domainMapping = {
  'en': 'tentenai.com',
  'zh': 'tentenai.tw',
  'zh-cn': 'tentenai.cn', 
  'ja': 'tentenai.jp',
  'ko': 'tentenai.kr',
  'ar': 'tentenai.ae'
}

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

// Get language from current domain
function getLanguageFromDomain(hostname: string): string {
  for (const [lang, domain] of Object.entries(domainMapping)) {
    if (hostname.includes(domain)) {
      return lang
    }
  }
  return 'en'
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  
  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // For development/staging environments (localhost, vercel.app)
  if (hostname.includes('localhost') || hostname.includes('vercel.app')) {
    const langParam = searchParams.get('lang')
    
    // If no lang parameter, detect from browser and redirect
    if (!langParam) {
      const acceptLanguage = request.headers.get('accept-language')
      const detectedLang = detectLanguageFromHeaders(acceptLanguage)
      
      // Only redirect if not already English (default)
      if (detectedLang !== 'en') {
        const url = request.nextUrl.clone()
        url.searchParams.set('lang', detectedLang)
        return NextResponse.redirect(url)
      }
    }
    
    return NextResponse.next()
  }

  // For production environments with multiple domains
  const domainLang = getLanguageFromDomain(hostname)
  const acceptLanguage = request.headers.get('accept-language')
  const detectedLang = detectLanguageFromHeaders(acceptLanguage)
  
  // If user's browser language doesn't match the domain language
  // and this is their first visit (no previous language preference)
  if (
    domainLang !== detectedLang && 
    !request.cookies.get('preferred-language') &&
    domainMapping[detectedLang as keyof typeof domainMapping]
  ) {
    // Redirect to appropriate domain
    const targetDomain = domainMapping[detectedLang as keyof typeof domainMapping]
    const protocol = request.nextUrl.protocol
    
    const redirectUrl = `${protocol}//${targetDomain}${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`
    
    const response = NextResponse.redirect(redirectUrl)
    // Set cookie to remember user preference
    response.cookies.set('preferred-language', detectedLang, { 
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      secure: true,
      sameSite: 'lax'
    })
    
    return response
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