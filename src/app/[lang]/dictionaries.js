import 'server-only'
 
const dictionaries = {
  en: () => import('../../../public/dictionaries/en.json').then((module) => module.default),
  ar: () => import('../../../public/dictionaries/ar.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()