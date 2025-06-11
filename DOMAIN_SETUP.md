# Multi-Domain Setup Guide for Tenten AI

This guide explains how to set up multiple domains for different languages and regions.

## 🌍 Domain Mapping

The following domains are configured for each language:

- **English**: `tentenai.com` (Primary domain)
- **Traditional Chinese**: `tentenai.tw` (Taiwan/Hong Kong)
- **Simplified Chinese**: `tentenai.cn` (Mainland China)
- **Japanese**: `tentenai.jp` (Japan)
- **Korean**: `tentenai.kr` (South Korea)
- **Arabic**: `tentenai.ae` (UAE/Middle East)

## 🚀 Vercel Deployment Setup

### 1. Primary Deployment (tentenai.com)
```bash
# Deploy to Vercel with main domain
vercel --prod
# Configure custom domain in Vercel dashboard
```

### 2. Additional Domains
In your Vercel dashboard:
1. Go to Project Settings → Domains
2. Add each additional domain:
   - `tentenai.tw`
   - `tentenai.cn`
   - `tentenai.jp`
   - `tentenai.kr`
   - `tentenai.ae`

## 📋 DNS Configuration

For each domain, set up the following DNS records:

### A Records (for apex domains)
```
Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)
TTL: 300
```

### CNAME Records (for www subdomains)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 300
```

### Specific Domain Configurations

#### tentenai.tw (Taiwan)
```dns
@     A     76.76.19.61
www   CNAME cname.vercel-dns.com
```

#### tentenai.cn (China)
```dns
@     A     76.76.19.61
www   CNAME cname.vercel-dns.com
```

#### tentenai.jp (Japan)
```dns
@     A     76.76.19.61
www   CNAME cname.vercel-dns.com
```

#### tentenai.kr (Korea)
```dns
@     A     76.76.19.61
www   CNAME cname.vercel-dns.com
```

#### tentenai.ae (UAE)
```dns
@     A     76.76.19.61
www   CNAME cname.vercel-dns.com
```

## 🔧 Environment Configuration

### Production Domains
All domains point to the same Vercel deployment but trigger different language content based on the domain.

### Development/Staging
For development and staging environments:
- Use URL parameters: `?lang=zh`, `?lang=ja`, etc.
- Automatic browser language detection
- Manual language switching

## 🌐 How It Works

### 1. Automatic Language Detection
- **Browser Language**: Detects user's browser language preference
- **Domain-Based**: Shows content based on the domain accessed
- **Cookie Preference**: Remembers user's language choice

### 2. Redirect Logic
- First-time visitors are redirected to appropriate domain based on browser language
- Returning users see content in their previously selected language
- Manual language switching updates the preference

### 3. Development Mode
When running locally or on staging:
- Uses URL parameters (`?lang=zh-cn`)
- Shows domain switching information panel
- Allows manual language testing

## 📊 SEO Configuration

### Meta Tags by Domain
Each domain serves different meta tags:
- `hreflang` attributes for proper SEO
- Region-specific Open Graph tags
- Localized meta descriptions

### URL Structure
```
tentenai.com     → English content
tentenai.tw      → Traditional Chinese content  
tentenai.cn      → Simplified Chinese content
tentenai.jp      → Japanese content
tentenai.kr      → Korean content
tentenai.ae      → Arabic content (RTL)
```

## 🔍 Testing

### Local Testing
```bash
# Test different languages locally
http://localhost:3000?lang=en
http://localhost:3000?lang=zh
http://localhost:3000?lang=zh-cn
http://localhost:3000?lang=ja
http://localhost:3000?lang=ko
http://localhost:3000?lang=ar
```

### Production Testing
```bash
# Test domain redirects
curl -H "Accept-Language: zh-TW" https://tentenai.com
curl -H "Accept-Language: ja" https://tentenai.com
curl -H "Accept-Language: ko" https://tentenai.com
```

## 💡 Implementation Details

### Middleware (`middleware.ts`)
- Handles automatic language detection
- Manages domain redirects in production
- URL parameter handling for development

### Language Context (`LanguageContext.tsx`)
- Browser language detection
- Domain switching functionality  
- Language state management

### Domain Info Component (`DomainInfo.tsx`)
- Development-only debugging info
- Shows current domain mapping
- Browser language detection status

## 🚨 Important Notes

1. **Domain Registration**: Each domain must be registered separately
2. **SSL Certificates**: Vercel automatically provides SSL for all domains
3. **CDN**: All domains benefit from Vercel's global CDN
4. **Analytics**: Track each domain separately for regional insights

## 📈 Regional Optimization

### China (tentenai.cn)
- Consider using a China-specific hosting solution for better performance
- Simplified Chinese content and payment methods

### Middle East (tentenai.ae)
- RTL (Right-to-Left) text support implemented
- Arabic language and cultural considerations

### Asia-Pacific (tentenai.jp, tentenai.kr, tentenai.tw)
- Region-specific business terminology
- Local contact information and phone numbers

## 🔄 Maintenance

### Adding New Languages
1. Update `domainMapping` in language context
2. Add domain to Vercel project
3. Configure DNS records
4. Add translations to language files
5. Update middleware configuration

### Monitoring
- Set up monitoring for each domain
- Track redirects and language detection
- Monitor conversion rates by region 