'use client'
import Image from 'next/image'
import Link from 'next/link'
import ToogleThemeButton from './ToggleThemeButton'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import blackLogo from '../../../public/logo-black.png'
import whiteLogo from '../../../public/logo-white.png'

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

const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="menu-button"
    className="block h-6 w-6 cursor-pointer md:hidden"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

export const Nav = () => {
  const { theme } = useTheme()
  const [logo, setLogo] = useState(blackLogo)
  const [isNavHidden, setIsNavHidden] = useState(true)

  useEffect(() => setLogo(theme === 'light' ? blackLogo : whiteLogo), [theme])

  const handleOnClick = () => setIsNavHidden(!isNavHidden)

  return (
    <nav className="flex flex-wrap items-center justify-between gap-6 px-4 pt-6 text-slate-700 dark:text-slate-200 sm:px-6 lg:px-8">
      <Link href={'/'}>
        <Image src={logo} alt="me" className="w-12 sm:w-14" />
      </Link>
      <button onClick={handleOnClick}>
        <Menu />
      </button>
      <div
        className={`w-full md:flex md:w-auto md:items-center ${
          isNavHidden ? 'hidden' : ''
        }`}
      >
        <ul className="pt-4 md:flex md:justify-between  md:pt-0">
          {NAVIGATIONS.map((nav, _index) => (
            <li
              key={_index}
              className="block py-2 hover:text-sky-500  dark:hover:text-sky-400 md:p-4"
            >
              <Link href={nav.link} onClick={handleOnClick}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" ml-6 hidden border-l border-solid border-slate-400 pl-6 dark:border-slate-600 md:block ">
          <ToogleThemeButton />
        </div>
      </div>
    </nav>
  )
}
