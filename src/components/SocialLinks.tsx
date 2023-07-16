'use client'

import { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiPolywork } from 'react-icons/si'

interface SocialLink {
  name: string
  url: string
  icon: IconType
}

export const SocialLinks = () => {
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

  return (
    <>
      {socialLinks.map((socialLink, index) => (
        <a href={socialLink.url} target="_blank" key={index}>
          <socialLink.icon
            title={socialLink.name}
            size={24}
            className=" hover:text-slate-500 dark:hover:text-slate-400"
          />
        </a>
      ))}
    </>
  )
}
