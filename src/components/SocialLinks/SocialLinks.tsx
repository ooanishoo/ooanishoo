'use client'

import {
  GITHUB_URL,
  LINKEDIN_URL,
  POLYWORK_URL,
  TWITTER_URL,
} from '@/constants'
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
      url: GITHUB_URL,
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: LINKEDIN_URL,
      icon: FaLinkedinIn,
    },
    {
      name: 'Polywork',
      url: POLYWORK_URL,
      icon: SiPolywork,
    },
    {
      name: 'Twitter',
      url: TWITTER_URL,
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
            aria-label={socialLink.name}
            className=" hover:text-slate-500 dark:hover:text-slate-400"
          />
        </a>
      ))}
    </>
  )
}
