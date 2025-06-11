'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useEffect, useState } from 'react'

const domainMapping = {
  'en': 'tentenai.com',
  'zh': 'tentenai.tw',
  'zh-cn': 'tentenai.cn', 
  'ja': 'tentenai.jp',
  'ko': 'tentenai.kr',
  'ar': 'tentenai.ae'
}

export default function DomainInfo() {
  const { language } = useLanguage()
  const [currentDomain, setCurrentDomain] = useState<string>('')
  const [browserLang, setBrowserLang] = useState<string>('')
  const [isDevelopment, setIsDevelopment] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentDomain(window.location.host)
      setBrowserLang(navigator.language)
      setIsDevelopment(
        window.location.host.includes('localhost') || 
        window.location.host.includes('vercel.app')
      )
    }
  }, [])

  const targetDomain = domainMapping[language as keyof typeof domainMapping]

  if (!isDevelopment) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <div className="font-semibold mb-2">🌍 Domain Switching Info</div>
      <div className="space-y-1">
        <div><strong>Current:</strong> {currentDomain}</div>
        <div><strong>Target:</strong> {targetDomain}</div>
        <div><strong>Language:</strong> {language}</div>
        <div><strong>Browser:</strong> {browserLang}</div>
        <div className="mt-2 text-xs opacity-75">
          {isDevelopment ? 
            '🔧 Development mode - Using URL params' : 
            '🚀 Production mode - Domain switching active'
          }
        </div>
      </div>
    </div>
  )
} 