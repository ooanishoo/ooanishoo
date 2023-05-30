'use client'
import Image from 'next/image'
import Link from 'next/link'
import ToogleThemeButton from './ToggleThemeButton'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
    title: 'Toolbox',
    link: '/uses',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]

export const Nav = () => {
  const { theme } = useTheme()
  const [logo, setLogo] = useState('/logo-black.png')

  useEffect(
    () => setLogo(theme === 'light' ? '/logo-black.png' : '/logo-white.png'),
    [theme]
  )

  return (
    <nav className="flex flex-row justify-between items-center pt-6 gap-6">
      <Link href={'/'}>
        <Image src={logo} alt="me" width="64" height="64" />
      </Link>

      <ul className="flex justify-end flex-auto  gap-12 px-6 items-center text-lg">
        {NAVIGATIONS.map((nav, _index) => (
          <li
            key={_index}
            className="hover:underline transition ease-in-out delay-550 hover:scale-110 duration-500"
          >
            <Link href={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <ToogleThemeButton />
    </nav>
  )
}
