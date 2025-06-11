# URL-Based Language System

This document explains how the simplified URL-based language system works for the Tenten AI landing page.

## 🌍 Supported Languages & URLs

The application supports 6 languages with clean URL structure:

- **English** (Default): `/` - https://yoursite.com/
- **Traditional Chinese**: `/zh` - https://yoursite.com/zh
- **Simplified Chinese**: `/zh-cn` - https://yoursite.com/zh-cn
- **Japanese**: `/ja` - https://yoursite.com/ja
- **Korean**: `/ko` - https://yoursite.com/ko
- **Arabic**: `/ar` - https://yoursite.com/ar

## 🔄 How Auto-Detection Works

### 1. Browser Language Detection
When a user visits the root URL (`/`), the system:
1. Detects their browser's preferred language from `Accept-Language` header
2. Maps browser language codes to supported languages:
   - `zh-tw`, `zh-hk` → `/zh` (Traditional Chinese)
   - `zh-cn`, `zh` → `/zh-cn` (Simplified Chinese)
   - `ja` → `/ja` (Japanese)
   - `ko` → `/ko` (Korean)
   - `ar` → `/ar` (Arabic)
   - All others → `/` (English - default)

### 2. Automatic Redirect
If the detected language is not English, users are automatically redirected to the appropriate URL:
- Browser set to Chinese (Traditional) → Redirects to `/zh`
- Browser set to Japanese → Redirects to `/ja`
- etc.

### 3. User Preference Memory
- A cookie `language-preference` is set when auto-redirect happens
- Cookie expires in 24 hours
- Prevents repeated auto-redirects for returning users

## 🔗 URL Structure Benefits

### Direct Language Access
Users can bookmark and share language-specific URLs:
```
https://tentenai.com/zh     - Traditional Chinese
https://tentenai.com/ja     - Japanese  
https://tentenai.com/ko     - Korean
```

### SEO-Friendly
- Each language has its own URL path
- Search engines can index language-specific content
- Language-specific sitemaps possible
- Clean URLs without query parameters

### Easy Sharing
- Shareable language-specific links
- No complex domain setup required
- Works on any hosting platform (Vercel, Netlify, etc.)

## 🛠 Implementation Details

### Next.js App Router Structure
```
src/app/
├── page.tsx                 # English (default) - /
├── [lang]/
│   └── page.tsx            # Dynamic language routes - /zh, /ja, etc.
├── contexts/
│   ├── LanguageContext.tsx
│   └── AdditionalTranslations.tsx
└── components/
    └── DomainInfo.tsx      # Development helper
```

### Language Context
- `LanguageContext` manages current language state
- `navigateToLanguage()` function handles URL navigation
- Auto-detects language from URL path
- Browser language detection on root path visits

### Middleware
- Handles automatic redirects for root path (`/`)
- Lightweight and focused on URL routing
- No complex domain logic

## 🎯 User Experience

### First Visit
1. User visits `https://tentenai.com/`
2. Browser language detected (e.g., Japanese)
3. Automatically redirected to `https://tentenai.com/ja`
4. Page loads in Japanese

### Language Switching
1. User clicks language toggle in header
2. Instantly navigates to appropriate URL
3. Page content updates to selected language
4. URL updates for bookmarking/sharing

### Return Visits
1. Users can directly visit bookmarked language URLs
2. No redirects needed for direct language URLs
3. Clean, predictable URL structure

## 🚀 Deployment

### Single Domain Deployment
Works with any single domain hosting:
- Vercel: `yoursite.vercel.app/zh`
- Netlify: `yoursite.netlify.app/ja`
- Custom domain: `tentenai.com/ko`

### No DNS Configuration Required
- No need for multiple subdomains
- No complex domain routing
- Works immediately on any hosting platform

### Development
```bash
npm run dev
# Test URLs:
# http://localhost:3000/     - English
# http://localhost:3000/zh   - Traditional Chinese  
# http://localhost:3000/ja   - Japanese
```

## 🔧 Development Tools

### Debug Component
In development mode, a debug panel shows:
- Current URL path
- Detected/recommended language
- Browser language setting
- Available language URLs

### Language Toggle
Header includes 6-language toggle with:
- Flag emojis for visual identification
- Active state highlighting
- Auto-detect button for testing

## 📱 Mobile & Accessibility

### Responsive Design
- Language toggle optimized for mobile
- Touch-friendly buttons
- Compact layout for small screens

### RTL Support
- Arabic language properly styled with `dir="rtl"`
- Right-to-left text flow
- Culturally appropriate layouts

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure

This URL-based system provides a clean, maintainable, and user-friendly approach to multilingual content without the complexity of multiple domains. 