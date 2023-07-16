'use client'

import { ToggleThemeButton } from '@/components/ToggleThemeButton'
import { SocialLinks } from './SocialLinks'

const FooterContent = () => (
  <div className="flex flex-col items-center justify-between border-t border-solid border-slate-200 pb-28 pt-8 text-slate-500 dark:border-slate-200/5 sm:flex-row">
    <div className="mb-6 flex items-center gap-2 whitespace-nowrap sm:mb-0">
      <p>&copy; Anish Maharjan {new Date().getFullYear()}</p>
      <ToggleThemeButton size={16} />
    </div>
    <div className="flex space-x-6 text-slate-400 dark:text-slate-500">
      <SocialLinks />
    </div>
  </div>
)

export const Footer = () => {
  return (
    <footer className="mt-16 px-4 text-sm sm:px-6 lg:px-8">
      <FooterContent />
    </footer>
  )
}
