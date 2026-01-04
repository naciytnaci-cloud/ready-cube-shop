'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'tr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr')
  const [translations, setTranslations] = useState<any>(null)

  useEffect(() => {
    // Load language from localStorage or default to Turkish
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Load translations based on current language
    import(`@/lib/translations/${language}.json`)
      .then((mod) => setTranslations(mod.default))
      .catch(() => {
        // Fallback to Turkish if translation file not found
        import('@/lib/translations/tr.json')
          .then((mod) => setTranslations(mod.default))
      })
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    if (!translations) return key
    
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    if (typeof value === 'string') {
      // Replace placeholders like {year}
      return value.replace(/\{(\w+)\}/g, (match, placeholder) => {
        if (placeholder === 'year') {
          return new Date().getFullYear().toString()
        }
        return match
      })
    }
    
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

