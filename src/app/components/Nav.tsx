'use client'
import Image from 'next/image'
import Link from 'next/link'
import ToogleThemeButton from './ToggleThemeButton'
import { useTheme } from 'next-themes'

interface INavigation {
  title: string
  link: string
}
const NAVIGATIONS: INavigation[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Testimonials',
    link: '/testimonials',
  },
  {
    title: 'Tools',
    link: '/tools',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]

export const Nav = () => {
  const { theme } = useTheme()
  return (
    <nav className="flex flex-row justify-between items-center pt-6 gap-6">
      <Link href={'/'}>
        <Image
          src={theme === 'light' ? '/logo-black.png' : '/logo-white.png'}
          alt="me"
          width="64"
          height="64"
        />
      </Link>

      <ul className="flex justify-end flex-auto  gap-12 px-6 items-center c">
        {NAVIGATIONS.map((nav, _index) => (
          <li key={_index}>
            <Link href={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <ToogleThemeButton />
    </nav>
  )
}
