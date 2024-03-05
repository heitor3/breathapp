import i18n from "i18next";
import { initReactI18next } from 'react-i18next'
import cn from './cn.json'
import en from './en.json'
import es from './es.json'
import ind from './in.json'
import pt from './pt.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en,
    pt,
    cn,
    es,
    ind
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  }
})

export default i18n;