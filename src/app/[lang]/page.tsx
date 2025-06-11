'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import DomainInfo from '../components/DomainInfo'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

const validLanguages = ['zh', 'zh-cn', 'ja', 'ko', 'ar']

export default function LanguagePage({ params }: PageProps) {
  const { language, setLanguage, t, navigateToLanguage } = useLanguage()
  const [langParam, setLangParam] = useState<string>('')

  // Get language parameter from async params
  useEffect(() => {
    params.then((resolvedParams) => {
      setLangParam(resolvedParams.lang)
    })
  }, [params])

  // Validate language parameter
  useEffect(() => {
    if (langParam && !validLanguages.includes(langParam)) {
      notFound()
    }
  }, [langParam])

  // Set language from URL parameter
  useEffect(() => {
    if (langParam && langParam !== language) {
      setLanguage(langParam as 'zh' | 'zh-cn' | 'ja' | 'ko' | 'ar')
    }
  }, [langParam, language, setLanguage])

  return (
    <main className="min-h-screen bg-white">
      {/* Header with Language Toggle */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Tenten AI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">{t('nav.services')}</a>
              <a href="#story" className="text-gray-600 hover:text-gray-900">{t('nav.story')}</a>
              <a href="#compare" className="text-gray-600 hover:text-gray-900">{t('nav.compare')}</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">{t('nav.team')}</a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Language Toggle with URL Navigation */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-gray-100 rounded-md p-1">
                  <button
                    onClick={() => navigateToLanguage('en')}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      language === 'en'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🌍 EN
                  </button>
                  <button
                    onClick={() => navigateToLanguage('zh')}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      language === 'zh'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🇹🇼 繁中
                  </button>
                  <button
                    onClick={() => navigateToLanguage('zh-cn')}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      language === 'zh-cn'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🇨🇳 简中
                  </button>
                  <button
                    onClick={() => navigateToLanguage('ja')}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      language === 'ja'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🇯🇵 日本
                  </button>
                  <button
                    onClick={() => navigateToLanguage('ko')}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      language === 'ko'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🇰🇷 한국
                  </button>
                  <button
                    onClick={() => navigateToLanguage('ar')}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      language === 'ar'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    dir="rtl"
                  >
                    🇦🇪 عربي
                  </button>
                </div>
                
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 font-medium">
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
                {t('hero.banner')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800">
                {t('hero.cta1')}
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-50">
                {t('hero.cta2')}
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span>{t('hero.rating')}</span>
              </div>
              <div>{t('hero.clients')}</div>
              <div>{t('hero.saved')}</div>
              <div>{t('hero.experience')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">{t('trust.title')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Company Logos */}
            <div className="flex items-center justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-400">
                <rect x="10" y="15" width="100" height="10" rx="5" fill="currentColor" />
                <circle cx="20" cy="20" r="8" fill="currentColor" />
                <text x="35" y="23" fontSize="8" fill="white" fontFamily="Arial, sans-serif">Acme Corp</text>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-400">
                <polygon points="20,8 30,8 35,20 30,32 20,32 15,20" fill="currentColor" />
                <text x="40" y="23" fontSize="8" fill="currentColor" fontFamily="Arial, sans-serif">Lightbox</text>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-400">
                <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="20" r="6" fill="currentColor" />
                <text x="38" y="23" fontSize="8" fill="currentColor" fontFamily="Arial, sans-serif">Quantum</text>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-400">
                <rect x="15" y="10" width="10" height="20" rx="2" fill="currentColor" />
                <rect x="30" y="15" width="10" height="15" rx="2" fill="currentColor" />
                <text x="45" y="23" fontSize="8" fill="currentColor" fontFamily="Arial, sans-serif">Boltshift</text>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-400">
                <path d="M15 20 L25 10 L35 20 L25 30 Z" fill="currentColor" />
                <text x="40" y="23" fontSize="8" fill="currentColor" fontFamily="Arial, sans-serif">AlphaWave</text>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-400">
                <rect x="12" y="12" width="16" height="16" rx="8" fill="currentColor" />
                <rect x="16" y="16" width="8" height="8" rx="4" fill="white" />
                <text x="32" y="23" fontSize="8" fill="currentColor" fontFamily="Arial, sans-serif">Capsule</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('services.ai.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.ai.desc')}
              </p>
              <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {t('services.ai.replaces')}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('services.creative.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.creative.desc')}
              </p>
              <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {t('services.creative.replaces')}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('services.ecommerce.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.ecommerce.desc')}
              </p>
              <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {t('services.ecommerce.replaces')}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('services.automation.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.automation.desc')}
              </p>
              <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {t('services.automation.replaces')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('story.hero.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('story.hero.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 via-orange-400 to-green-400 hidden lg:block"></div>
            
            <div className="space-y-16">
              {/* Story parts would go here - abbreviated for brevity */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-400">
                    <div className="text-6xl mb-4">💸</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('story.problem.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('story.problem.content')}
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-red-400 rounded-full mx-auto lg:mx-0 flex items-center justify-center text-white font-bold text-xl z-10 relative">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100">
              {t('cta.button1')}
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-black transition-colors">
              {t('cta.button2')}
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            {t('cta.note')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tenten AI</h3>
              <p className="text-gray-400">
                {t('footer.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('services.ai.title')}</li>
                <li>{t('services.creative.title')}</li>
                <li>{t('services.ecommerce.title')}</li>
                <li>{t('services.automation.title')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('footer.about')}</li>
                <li>{t('footer.case.studies')}</li>
                <li>{t('footer.blog')}</li>
                <li>{t('footer.contact.us')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('footer.email')}</li>
                <li>{t('footer.schedule')}</li>
                <li>{t('footer.enterprise')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* URL Navigation Info (Development Only) */}
      <DomainInfo />
    </main>
  )
} 