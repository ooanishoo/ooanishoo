import { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiPolywork } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className="mt-16 px-4 text-sm sm:px-6 lg:px-8">
      <FooterContent />
    </footer>
  )
}

const FooterContent = () => (
  <div className="justify-between border-t border-solid border-slate-200 pb-28 pt-8 text-slate-500 dark:border-slate-200/5 sm:flex">
    <div className="mb-6 sm:mb-0 sm:flex">
      <p>&copy; Anish Maharjan {new Date().getFullYear()}</p>
    </div>
    <div className="flex space-x-6 text-slate-400 dark:text-slate-500">
      {socialLinks.map((socialLink, index) => (
        <a
          href={socialLink.url}
          target="_blank"
          key={index}
          title={socialLink.name}
        >
          <socialLink.icon
            size={24}
            className=" hover:text-slate-500 dark:hover:text-slate-400"
          />
        </a>
      ))}
    </div>
  </div>
)

interface SocialLink {
  name: string
  url: string
  icon: IconType
}

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
