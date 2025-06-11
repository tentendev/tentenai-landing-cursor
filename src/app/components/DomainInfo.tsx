'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useEffect, useState } from 'react'

const urlMapping = {
  'en': '/',
  'zh': '/zh',
  'zh-cn': '/zh-cn', 
  'ja': '/ja',
  'ko': '/ko',
  'ar': '/ar'
}

export default function DomainInfo() {
  const { language } = useLanguage()
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const [browserLang, setBrowserLang] = useState<string>('')
  const [isDevelopment, setIsDevelopment] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.pathname)
      setBrowserLang(navigator.language)
      setIsDevelopment(
        window.location.host.includes('localhost') || 
        window.location.host.includes('vercel.app')
      )
    }
  }, [])

  const recommendedUrl = urlMapping[language as keyof typeof urlMapping]

  if (!isDevelopment) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <div className="font-semibold mb-2">🔗 URL Language Navigation</div>
      <div className="space-y-1">
        <div><strong>Current URL:</strong> {currentUrl}</div>
        <div><strong>Recommended:</strong> {recommendedUrl}</div>
        <div><strong>Language:</strong> {language}</div>
        <div><strong>Browser:</strong> {browserLang}</div>
        <div className="mt-2 text-xs opacity-75 space-y-1">
          <div>🌍 Auto-detects browser language</div>
          <div>🔗 URLs: /, /zh, /ja, /ko, /zh-cn, /ar</div>
        </div>
      </div>
    </div>
  )
} 