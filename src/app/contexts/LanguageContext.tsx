'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { additionalTranslations } from './AdditionalTranslations'
import { useRouter, usePathname } from 'next/navigation'

// Language detection from browser locale
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language.toLowerCase()
  
  // Map browser language codes to our supported languages
  if (browserLang.startsWith('zh-tw') || browserLang.startsWith('zh-hk')) return 'zh'
  if (browserLang.startsWith('zh-cn') || browserLang.startsWith('zh')) return 'zh-cn'
  if (browserLang.startsWith('ja')) return 'ja'
  if (browserLang.startsWith('ko')) return 'ko'
  if (browserLang.startsWith('ar')) return 'ar'
  
  return 'en' // Default to English
}

// Get language from current URL path
const getLanguageFromPath = (pathname: string): Language => {
  // Extract language from path like /zh, /ja, etc.
  const pathSegments = pathname.split('/').filter(Boolean)
  const langFromPath = pathSegments[0]
  
  // Check if first segment is a valid language
  const validLanguages: Language[] = ['en', 'zh', 'zh-cn', 'ja', 'ko', 'ar']
  if (validLanguages.includes(langFromPath as Language)) {
    return langFromPath as Language
  }
  
  return 'en' // Default to English for root path
}

type Language = 'en' | 'zh' | 'zh-cn' | 'ja' | 'ko' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  navigateToLanguage: (lang: Language) => void
  autoDetectLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ...additionalTranslations,
  en: {
    // Header
    'nav.services': 'Services',
    'nav.story': 'Story',
    'nav.compare': 'Compare',
    'nav.team': 'Team',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.banner': '🚀 Transform Your Business with AI - Limited Consulting Spots Available',
    'hero.title': 'The AI Consultant',
    'hero.subtitle': 'Transform your enterprise with end-to-end AI solutions. From automation to agentic workflows, we replace $50K-$500K+ consultancy fees for enterprise-grade AI transformation.',
    'hero.cta1': 'Schedule Free AI Assessment ($5,000 Value)',
    'hero.cta2': 'View Case Studies',
    'hero.rating': '5.0 rating',
    'hero.clients': '50+ Enterprise Clients',
    'hero.saved': '$10M+ Saved in Automation',
    'hero.experience': 'AI Experts Since 2020',
    
    // Trust Section
    'trust.title': 'Trusted by enterprise companies worldwide',
    
    // Services Section
    'services.title': 'Complete AI Transformation Suite',
    'services.subtitle': 'Everything your enterprise needs to dominate with AI. One team, complete transformation.',
    'services.ai.title': 'AI Consulting',
    'services.ai.desc': 'Enterprise AI transformation, business automation, agentic workflows, and strategic AI integration for 1000+ employee companies.',
    'services.ai.replaces': 'Replaces $50K-$200K consultancy fees',
    'services.creative.title': 'AI Creative',
    'services.creative.desc': 'AI-powered content generation for web, video production, and social media. Scale your creative output 10x.',
    'services.creative.replaces': 'Replaces $20K-$100K creative agencies',
    'services.ecommerce.title': 'Ecommerce AI',
    'services.ecommerce.desc': 'Shopify-based agentic flows that transform your ecommerce operations with intelligent automation and personalization.',
    'services.ecommerce.replaces': 'Replaces $30K-$150K ecommerce solutions',
    'services.automation.title': 'Workflow Automation',
    'services.automation.desc': 'N8N and Dify-powered business flow automation that eliminates manual processes and increases efficiency by 80%.',
    'services.automation.replaces': 'Replaces $15K-$75K automation tools',
    
    // Comparison Section
    'compare.title': 'Us vs. Traditional Consultants',
    'compare.subtitle': 'Get enterprise-grade AI transformation for a fraction of the cost. No one else comes close.',
    'compare.tentenai': 'Tenten AI',
    'compare.tentenai.sub': 'Complete AI Solutions',
    'compare.big4': 'Big 4 Consulting',
    'compare.big4.sub': 'Traditional Approach',
    'compare.freelancers': 'Freelancers',
    'compare.freelancers.sub': 'Fragmented Solutions',
    'compare.feature1': 'Full AI Transformation',
    'compare.feature2': 'End-to-End Implementation',
    'compare.feature3': 'Ongoing Support & Training',
    'compare.feature4': 'Proven ROI Guarantee',
    'compare.feature5': 'Cost',
    'compare.feature6': 'Timeline',
    'compare.cost.tenten': '$25K-$100K',
    'compare.cost.big4': '$200K-$2M+',
    'compare.cost.freelance': '$50K-$300K',
    'compare.timeline.tenten': '30-90 days',
    'compare.timeline.big4': '6-18 months',
    'compare.timeline.freelance': '3-12 months',
    
    // Story Section (NEW)
    'story.hero.title': 'The AI Revolution Started with a Problem',
    'story.hero.subtitle': 'How we discovered the gap between AI potential and enterprise reality',
    'story.problem.title': 'The $2 Million Problem',
    'story.problem.content': 'In 2022, we watched a Fortune 500 company spend $2.3 million on an AI transformation project with a Big 4 consultancy. After 18 months, they had beautiful PowerPoint presentations, theoretical frameworks, and zero implemented solutions. Their manual processes remained unchanged, their efficiency problems unsolved.',
    'story.discovery.title': 'The Breakthrough Moment',
    'story.discovery.content': 'That\'s when we realized the fundamental disconnect: traditional consultants sell strategies, but enterprises need working solutions. They needed partners who could not just advise, but actually build, implement, and deliver measurable results.',
    'story.solution.title': 'Building the Bridge',
    'story.solution.content': 'We assembled a team that combined deep AI expertise with hands-on implementation skills in Web Design, Ecommerce, and Business Automation. We don\'t just consult – we build your AI future and make it work from day one.',
    'story.impact.title': 'The Results Speak',
    'story.impact.stat1': '50+ Enterprises Transformed',
    'story.impact.stat2': '$10M+ in Operational Savings',
    'story.impact.stat3': '90% Faster Implementation',
    'story.impact.stat4': '100% Client Satisfaction',
    
    // Testimonials Section
    'testimonials.title': 'What Enterprise Leaders Say',
    'testimonials.subtitle': 'See how we\'ve transformed businesses with practical AI implementation',
    'testimonials.1.content': '"Tenten AI transformed our entire customer service operation. We went from manual processes to fully automated AI workflows that handle 80% of inquiries. Saved us $2M annually."',
    'testimonials.1.name': 'Sarah Johnson',
    'testimonials.1.title': 'CTO, TechCorp (2,500 employees)',
    'testimonials.2.content': '"Unlike traditional consultants who only provide strategies, Tenten AI actually built and implemented our entire AI infrastructure. ROI was immediate and measurable."',
    'testimonials.2.name': 'Michael Chen',
    'testimonials.2.title': 'VP Operations, RetailPlus (5,000 employees)',
    'testimonials.3.content': '"Best investment we\'ve made. Their AI-powered ecommerce flows increased our conversion rate by 40% and reduced operational costs by 60%. Incredible results in just 8 weeks."',
    'testimonials.3.name': 'Amanda Rodriguez',
    'testimonials.3.title': 'CEO, GlobalMart (3,200 employees)',
    
    // Founder Story Section
    'founder.title': 'Our Story',
    'founder.subtitle': 'Built by AI experts who understand enterprise transformation',
    'founder.story.title': 'Why We Started Tenten AI',
    'founder.story.p1': 'After watching countless enterprises waste millions on failed AI initiatives with traditional consultants, we knew there had to be a better way. We\'ve seen too many companies get stuck with theoretical frameworks instead of practical, implemented solutions.',
    'founder.story.p2': 'Our team combines deep AI expertise with hands-on implementation experience in Web Design (Webflow), Ecommerce (Shopify), and Business Automation (N8N). We don\'t just consult – we build and deliver.',
    'founder.story.p3': 'We\'re not just another consultancy. We\'re your AI transformation partner, committed to delivering measurable results that transform your business operations.',
    
    // Team Section
    'team.title': 'Expert AI Team',
    'team.subtitle': 'Specialists in Web Design, Ecommerce, AI, and Automation',
    'team.webflow': 'Webflow Expert',
    'team.webflow.desc': '5+ years building enterprise websites and design systems',
    'team.shopify': 'Shopify Specialist',
    'team.shopify.desc': 'Expert in ecommerce automation and AI integration',
    'team.ai': 'AI Engineer',
    'team.ai.desc': 'Machine learning and agentic workflow architect',
    'team.n8n': 'N8N Automation Expert',
    'team.n8n.desc': 'Business process automation and workflow optimization',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Business with AI?',
    'cta.subtitle': 'Join 50+ enterprise companies who\'ve saved millions with our AI transformation solutions. 100% satisfaction guarantee.',
    'cta.button1': 'Schedule Free Consultation',
    'cta.button2': 'Download Case Studies',
    'cta.note': 'No commitment required • Free AI assessment • Response within 24 hours',
    
    // Footer
    'footer.desc': 'Enterprise AI transformation specialists helping businesses automate and scale with cutting-edge AI solutions.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.about': 'About',
    'footer.case.studies': 'Case Studies',
    'footer.blog': 'Blog',
    'footer.contact.us': 'Contact',
    'footer.email': 'hello@tentenai.com',
    'footer.schedule': 'Schedule Consultation',
    'footer.enterprise': 'Enterprise Inquiries',
    'footer.copyright': '© 2024 Tenten AI. All rights reserved.',
  },
  zh: {
    // Header
    'nav.services': '服務項目',
    'nav.story': '我們的故事',
    'nav.compare': '比較優勢',
    'nav.team': '專業團隊',
    'nav.getStarted': '立即開始',
    
    // Hero Section
    'hero.banner': '🚀 用AI轉型您的企業 - 限量諮詢名額',
    'hero.title': 'AI 諮詢專家',
    'hero.subtitle': '端到端AI解決方案，全面轉型您的企業。從自動化到智能代理工作流程，我們以企業級AI轉型替代$50K-$500K+的諮詢費用。',
    'hero.cta1': '預約免費AI評估 (價值$5,000)',
    'hero.cta2': '查看案例研究',
    'hero.rating': '5.0 星評價',
    'hero.clients': '50+ 企業客戶',
    'hero.saved': '節省超過 $1,000萬 自動化成本',
    'hero.experience': '2020年起的AI專家',
    
    // Trust Section
    'trust.title': '全球企業信賴的合作夥伴',
    
    // Services Section
    'services.title': '完整AI轉型解決方案',
    'services.subtitle': '您的企業在AI領域稱霸所需的一切。一個團隊，全面轉型。',
    'services.ai.title': 'AI 諮詢',
    'services.ai.desc': '為1000+員工企業提供企業AI轉型、業務自動化、智能代理工作流程及戰略AI整合。',
    'services.ai.replaces': '替代 $50K-$200K 諮詢費用',
    'services.creative.title': 'AI 創意',
    'services.creative.desc': 'AI驅動的網頁、影片製作和社群媒體內容生成。創意產出提升10倍。',
    'services.creative.replaces': '替代 $20K-$100K 創意代理商',
    'services.ecommerce.title': '電商 AI',
    'services.ecommerce.desc': '基於Shopify的智能代理流程，通過智能自動化和個性化轉型您的電商營運。',
    'services.ecommerce.replaces': '替代 $30K-$150K 電商解決方案',
    'services.automation.title': '工作流程自動化',
    'services.automation.desc': 'N8N和Dify驅動的業務流程自動化，消除手動流程，提升80%效率。',
    'services.automation.replaces': '替代 $15K-$75K 自動化工具',
    
    // Comparison Section
    'compare.title': '我們 vs. 傳統顧問',
    'compare.subtitle': '以一小部分成本獲得企業級AI轉型。無人能及。',
    'compare.tentenai': 'Tenten AI',
    'compare.tentenai.sub': '完整AI解決方案',
    'compare.big4': '四大諮詢',
    'compare.big4.sub': '傳統方法',
    'compare.freelancers': '自由職業者',
    'compare.freelancers.sub': '分散式解決方案',
    'compare.feature1': '全面AI轉型',
    'compare.feature2': '端到端實施',
    'compare.feature3': '持續支援與培訓',
    'compare.feature4': '保證投資回報',
    'compare.feature5': '成本',
    'compare.feature6': '時程',
    'compare.cost.tenten': '$25K-$100K',
    'compare.cost.big4': '$200K-$2M+',
    'compare.cost.freelance': '$50K-$300K',
    'compare.timeline.tenten': '30-90 天',
    'compare.timeline.big4': '6-18 個月',
    'compare.timeline.freelance': '3-12 個月',
    
    // Story Section (NEW)
    'story.hero.title': 'AI革命始於一個問題',
    'story.hero.subtitle': '我們如何發現AI潛力與企業現實之間的差距',
    'story.problem.title': '200萬美元的問題',
    'story.problem.content': '2022年，我們看到一家財富500強企業花費230萬美元與四大諮詢公司進行AI轉型項目。18個月後，他們得到了精美的PowerPoint簡報、理論框架，但零實施解決方案。他們的手動流程依然未變，效率問題依然未解。',
    'story.discovery.title': '突破時刻',
    'story.discovery.content': '這時我們意識到根本性的斷層：傳統顧問銷售策略，但企業需要的是實用的解決方案。他們需要的合作夥伴不僅能提供建議，更能實際建構、實施並提供可衡量的結果。',
    'story.solution.title': '架橋築路',
    'story.solution.content': '我們組建了一個結合深度AI專業知識與網頁設計、電商和業務自動化實務技能的團隊。我們不只是諮詢 – 我們建構您的AI未來，並從第一天就讓它運作。',
    'story.impact.title': '成果說話',
    'story.impact.stat1': '50+ 企業成功轉型',
    'story.impact.stat2': '節省超過 $1,000萬 營運成本',
    'story.impact.stat3': '90% 更快實施速度',
    'story.impact.stat4': '100% 客戶滿意度',
    
    // Testimonials Section
    'testimonials.title': '企業領袖怎麼說',
    'testimonials.subtitle': '看看我們如何用實用的AI實施轉型企業',
    'testimonials.1.content': '"Tenten AI轉型了我們整個客戶服務營運。我們從手動流程轉為全自動AI工作流程，處理80%的查詢。每年節省200萬美元。"',
    'testimonials.1.name': 'Sarah Johnson',
    'testimonials.1.title': 'CTO, TechCorp (2,500 名員工)',
    'testimonials.2.content': '"與只提供策略的傳統顧問不同，Tenten AI實際建構並實施了我們整個AI基礎設施。投資回報立即且可衡量。"',
    'testimonials.2.name': 'Michael Chen',
    'testimonials.2.title': 'VP Operations, RetailPlus (5,000 名員工)',
    'testimonials.3.content': '"我們做過最好的投資。他們的AI驅動電商流程提升了40%轉換率，降低了60%營運成本。8週內就有驚人結果。"',
    'testimonials.3.name': 'Amanda Rodriguez',
    'testimonials.3.title': 'CEO, GlobalMart (3,200 名員工)',
    
    // Founder Story Section
    'founder.title': '我們的故事',
    'founder.subtitle': '由理解企業轉型的AI專家建構',
    'founder.story.title': '為什麼我們創立 Tenten AI',
    'founder.story.p1': '看到無數企業在傳統顧問的失敗AI計畫上浪費數百萬後，我們知道必須有更好的方法。我們看過太多公司被困在理論框架中，而非實用的已實施解決方案。',
    'founder.story.p2': '我們的團隊結合深度AI專業知識與網頁設計（Webflow）、電商（Shopify）和業務自動化（N8N）的實務經驗。我們不只諮詢 – 我們建構並交付。',
    'founder.story.p3': '我們不只是另一家諮詢公司。我們是您的AI轉型夥伴，致力於提供可衡量的結果來轉型您的業務營運。',
    
    // Team Section
    'team.title': '專業AI團隊',
    'team.subtitle': '網頁設計、電商、AI和自動化專家',
    'team.webflow': 'Webflow 專家',
    'team.webflow.desc': '5+ 年企業網站和設計系統建構經驗',
    'team.shopify': 'Shopify 專家',
    'team.shopify.desc': '電商自動化和AI整合專家',
    'team.ai': 'AI 工程師',
    'team.ai.desc': '機器學習和智能代理工作流程架構師',
    'team.n8n': 'N8N 自動化專家',
    'team.n8n.desc': '業務流程自動化和工作流程優化',
    
    // CTA Section
    'cta.title': '準備好用AI轉型您的業務了嗎？',
    'cta.subtitle': '加入50+家透過我們AI轉型解決方案節省數百萬的企業。100%滿意保證。',
    'cta.button1': '預約免費諮詢',
    'cta.button2': '下載案例研究',
    'cta.note': '無需承諾 • 免費AI評估 • 24小時內回覆',
    
    // Footer
    'footer.desc': '企業AI轉型專家，幫助企業透過尖端AI解決方案自動化和擴展。',
    'footer.services': '服務項目',
    'footer.company': '公司',
    'footer.contact': '聯絡',
    'footer.about': '關於我們',
    'footer.case.studies': '案例研究',
    'footer.blog': '部落格',
    'footer.contact.us': '聯絡我們',
    'footer.email': 'hello@tentenai.com',
    'footer.schedule': '預約諮詢',
    'footer.enterprise': '企業洽詢',
    'footer.copyright': '© 2024 Tenten AI. 版權所有。',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    return getLanguageFromPath(pathname)
  })

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const navigateToLanguage = (lang: Language) => {
    setLanguage(lang)
    
    // Navigate to the new language path
    if (lang === 'en') {
      // For English, go to root
      router.push('/')
    } else {
      // For other languages, go to /{lang}
      router.push(`/${lang}`)
    }
  }

  const autoDetectLanguage = () => {
    const currentLang = getLanguageFromPath(pathname)
    if (currentLang !== language) {
      setLanguage(currentLang)
    }
  }

  // Auto-detect browser language on first visit to root
  useEffect(() => {
    if (pathname === '/' && language === 'en') {
      const browserLang = detectBrowserLanguage()
      if (browserLang !== 'en') {
        navigateToLanguage(browserLang)
      }
    }
  }, [pathname, language, navigateToLanguage])

  // Update language when path changes
  useEffect(() => {
    autoDetectLanguage()
  }, [pathname, autoDetectLanguage])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, navigateToLanguage, autoDetectLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 