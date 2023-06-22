'use client'

import { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiPolywork } from 'react-icons/si'
import ToggleThemeButton from './ToggleThemeButton'

interface SocialLink {
  name: string
  url: string
  icon: IconType
}

export const Footer = () => {
  return (
    <footer className="mt-16 px-4 text-sm sm:px-6 lg:px-8">
      <FooterContent />
    </footer>
  )
}

const FooterContent = () => (
  <div className="flex flex-col items-center justify-between border-t border-solid border-slate-200 pb-28 pt-8 text-slate-500 dark:border-slate-200/5 sm:flex-row">
    <div className="mb-6 flex items-center gap-2 whitespace-nowrap sm:mb-0">
      <p>&copy; Anish Maharjan {new Date().getFullYear()}</p>
      <ToggleThemeButton size={16} />
    </div>
    <div className="flex space-x-6 text-slate-400 dark:text-slate-500">
      {renderSocialLinks()}
    </div>
  </div>
)

export const renderSocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Github',
      url: 'https://github.com/ooanishoo',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ooanishoo/',
      icon: FaLinkedinIn,
    },
    {
      name: 'Polywork',
      url: 'https://www.polywork.com/ooanishoo',
      icon: SiPolywork,
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/ooanishoo/',
      icon: FaTwitter,
    },
  ]

  return socialLinks.map((socialLink, index) => (
    <a href={socialLink.url} target="_blank" key={index}>
      <socialLink.icon
        title={socialLink.name}
        size={24}
        className=" hover:text-slate-500 dark:hover:text-slate-400"
      />
    </a>
  ))
}
