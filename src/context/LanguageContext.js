"use client";

import { createContext, useContext, useState } from 'react'
import { i18n } from '@/i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('id')

  const t = (key) => {
    try {
      const keys = key.split('.')
      let value = i18n[language]
      
      for (const k of keys) {
        if (value === undefined) return key
        value = value[k]
      }
      
      return value || key
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)