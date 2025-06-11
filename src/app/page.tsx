'use client'

import { useLanguage } from './contexts/LanguageContext'
import DomainInfo from './components/DomainInfo'

export default function Home() {
  const { language, t, navigateToLanguage } = useLanguage()

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
              {/* Language Toggle with Geo-Location */}
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
            {/* Using SVG logos inspired by logoipsum */}
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

      {/* NEW: Engaging Story Section */}
      <section id="story" className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Hero */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('story.hero.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('story.hero.subtitle')}
            </p>
          </div>

          {/* Story Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 via-orange-400 to-green-400 hidden lg:block"></div>
            
            <div className="space-y-16">
              {/* Story 1: The Problem */}
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
                <div className="hidden lg:block w-8 h-8 bg-red-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="lg:w-1/2 lg:pl-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-red-600 mb-2">$2.3M</div>
                    <div className="text-sm text-red-700">Wasted on failed AI project</div>
                    <div className="text-4xl font-bold text-red-600 mt-4">18 months</div>
                    <div className="text-sm text-red-700">Zero implemented solutions</div>
                  </div>
                </div>
              </div>

              {/* Story 2: The Discovery */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-400">
                    <div className="text-6xl mb-4">💡</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('story.discovery.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('story.discovery.content')}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-8 h-8 bg-orange-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="lg:w-1/2 lg:pr-8">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="text-lg font-semibold text-orange-700 mb-2">The Gap:</div>
                    <div className="text-sm text-orange-600 mb-4">Strategies ≠ Solutions</div>
                    <div className="text-lg font-semibold text-orange-700 mb-2">What Enterprises Need:</div>
                    <div className="text-sm text-orange-600">Working AI Systems</div>
                  </div>
                </div>
              </div>

              {/* Story 3: The Solution */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-400">
                    <div className="text-6xl mb-4">🔧</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('story.solution.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('story.solution.content')}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-8 h-8 bg-blue-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="lg:w-1/2 lg:pl-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">AI</div>
                        <div className="text-xs text-blue-700">Expertise</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">Web</div>
                        <div className="text-xs text-blue-700">Design</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">Ecom</div>
                        <div className="text-xs text-blue-700">Shopify</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">Auto</div>
                        <div className="text-xs text-blue-700">N8N</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 4: The Impact */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-400">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('story.impact.title')}
                    </h3>
                    <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{t('story.impact.stat1')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{t('story.impact.stat2')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{t('story.impact.stat3')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{t('story.impact.stat4')}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="lg:w-1/2 lg:pr-8">
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="text-lg font-semibold text-green-700">Our Mission</div>
                    <div className="text-sm text-green-600 mt-2">Bridge the gap between AI potential and enterprise reality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">{t('services.ai.title')}</h3>
              <p className="text-gray-600 mb-4">{t('services.ai.desc')}</p>
              <div className="text-sm text-gray-500">{t('services.ai.replaces')}</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">{t('services.creative.title')}</h3>
              <p className="text-gray-600 mb-4">{t('services.creative.desc')}</p>
              <div className="text-sm text-gray-500">{t('services.creative.replaces')}</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-3">{t('services.ecommerce.title')}</h3>
              <p className="text-gray-600 mb-4">{t('services.ecommerce.desc')}</p>
              <div className="text-sm text-gray-500">{t('services.ecommerce.replaces')}</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">{t('services.automation.title')}</h3>
              <p className="text-gray-600 mb-4">{t('services.automation.desc')}</p>
              <div className="text-sm text-gray-500">{t('services.automation.replaces')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('compare.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('compare.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900"></th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      <div className="flex flex-col items-center">
                        <div className="text-lg font-bold">{t('compare.tentenai')}</div>
                        <div className="text-xs text-gray-500">{t('compare.tentenai.sub')}</div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      <div className="flex flex-col items-center">
                        <div className="text-lg font-bold">{t('compare.big4')}</div>
                        <div className="text-xs text-gray-500">{t('compare.big4.sub')}</div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      <div className="flex flex-col items-center">
                        <div className="text-lg font-bold">{t('compare.freelancers')}</div>
                        <div className="text-xs text-gray-500">{t('compare.freelancers.sub')}</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('compare.feature1')}</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('compare.feature2')}</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('compare.feature3')}</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('compare.feature4')}</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('compare.feature5')}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">{t('compare.cost.tenten')}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{t('compare.cost.big4')}</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">{t('compare.cost.freelance')}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('compare.feature6')}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">{t('compare.timeline.tenten')}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{t('compare.timeline.big4')}</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">{t('compare.timeline.freelance')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-6">
                {t('testimonials.1.content')}
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t('testimonials.1.name')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.1.title')}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-6">
                {t('testimonials.2.content')}
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t('testimonials.2.name')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.2.title')}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-6">
                {t('testimonials.3.content')}
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="David Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t('testimonials.3.name')}</div>
                  <div className="text-sm text-gray-600">{t('testimonials.3.title')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('team.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                alt="Webflow Expert" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{t('team.webflow')}</h3>
              <p className="text-gray-600 text-sm">{t('team.webflow.desc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                alt="Shopify Specialist" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{t('team.shopify')}</h3>
              <p className="text-gray-600 text-sm">{t('team.shopify.desc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                alt="AI Engineer" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{t('team.ai')}</h3>
              <p className="text-gray-600 text-sm">{t('team.ai.desc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" 
                alt="N8N Automation Expert" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{t('team.n8n')}</h3>
              <p className="text-gray-600 text-sm">{t('team.n8n.desc')}</p>
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

      {/* Domain Switching Info (Development Only) */}
      <DomainInfo />
    </main>
  )
}
