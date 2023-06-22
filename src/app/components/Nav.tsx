'use client'
import Link from 'next/link'
import ToogleThemeButton from './ToggleThemeButton'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { LogoIcon } from './LogoIcon'
import { usePathname } from 'next/navigation'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'

interface INavigation {
  title: string
  link: string
}
const NAVIGATIONS: INavigation[] = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'about',
    link: '/about',
  },
  {
    title: 'testimonials',
    link: '/testimonials',
  },
  {
    title: 'toolbox',
    link: '/uses',
  },
  {
    title: 'contact',
    link: '/contact',
  },
]

export const Nav = () => {
  const { theme, setTheme } = useTheme()
  const [isNavHidden, setIsNavHidden] = useState(true)

  const handleOnClick = () => setIsNavHidden(!isNavHidden)
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap items-center justify-between gap-6 px-4 pt-6 text-slate-700 dark:text-slate-200 sm:px-6 lg:px-8 lg:text-lg">
      <Link href={'/'}>
        <LogoIcon className="w-8 text-black dark:text-white sm:w-10" />
      </Link>
      <button
        onClick={handleOnClick}
        className="duration-900 block h-6 w-6 cursor-pointer transition md:hidden"
      >
        {isNavHidden ? <BiMenuAltRight size={32} /> : <RxCross2 size={32} />}
      </button>
      <div
        className={`w-full md:flex md:w-auto md:items-center ${
          isNavHidden ? 'hidden' : ''
        }`}
      >
        <ul className="pt-4 text-center  md:flex md:justify-between md:pt-0">
          {NAVIGATIONS.map((nav, _index) => (
            <li
              key={_index}
              className={`
              group
              block py-2
              transition duration-300  md:p-4 ${
                pathname === nav.link && 'text-sky-500'
              }
              ${nav.link === '/' && 'md:hidden'}
              `}
            >
              <Link href={nav.link} onClick={handleOnClick}>
                {nav.title}
              </Link>
              <span
                className={`h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-[40px]  md:block ${
                  pathname === nav.link && 'bg-white dark:bg-gray-950'
                }`}
              />
            </li>
          ))}
          <li className="block py-2 hover:text-sky-500 dark:hover:text-sky-400  md:hidden md:p-4">
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }}
            >
              {`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            </button>
          </li>
        </ul>
        <div className=" ml-6 hidden border-l border-solid border-slate-400 pl-6 dark:border-slate-600 md:block ">
          <ToogleThemeButton />
        </div>
      </div>
    </nav>
  )
}
