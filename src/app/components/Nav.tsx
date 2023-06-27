'use client'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { LogoIcon } from './LogoIcon'
import ToogleThemeButton from './ToggleThemeButton'

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

const Logo = () => (
  <Link href={'/'}>
    <LogoIcon className="w-8 text-black dark:text-white sm:w-10" />
  </Link>
)

export const Nav = () => {
  const { theme, setTheme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOnClick = () => setIsNavOpen(!isNavOpen)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsNavOpen(false)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    isNavOpen && setIsNavOpen(!isNavOpen)
  }, [pathname])

  return (
    <div
      className={clsx(
        'fixed left-0 right-0 top-0 z-10 mx-auto  w-full bg-white dark:bg-gray-950',
        isNavOpen && 'h-screen md:h-auto lg:h-auto xl:h-auto',
        'font-semibold lg:container md:absolute'
      )}
    >
      <nav className="flex h-auto flex-wrap items-center justify-between gap-6 px-4 py-6 text-sm text-slate-700 dark:text-slate-200 sm:px-6 lg:px-8 lg:text-lg">
        <Logo />
        {/* Mobile menu button */}
        <button
          onClick={handleOnClick}
          className="duration-900 block h-6 w-6 cursor-pointer transition md:hidden"
        >
          {isNavOpen ? <RxCross2 size={32} /> : <BiMenuAltRight size={32} />}
        </button>
        <div
          className={clsx(
            'w-full md:flex md:w-auto md:items-center',
            !isNavOpen && 'hidden'
          )}
        >
          <ul className="pt-4 text-center md:flex md:justify-between md:pt-0">
            {NAVIGATIONS.map((nav, _index) => (
              <li
                key={_index}
                className={clsx(
                  'group block py-2 transition duration-300  md:p-4',
                  pathname === nav.link && 'text-sky-500',
                  nav.link === '/' && 'md:hidden'
                )}
              >
                <Link href={nav.link}>{nav.title}</Link>
                <span
                  className={clsx(
                    'h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-[40px] md:block',
                    pathname === nav.link && 'bg-white dark:bg-gray-950'
                  )}
                />
              </li>
            ))}
            <li className="block py-2  md:hidden md:p-4">
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
    </div>
  )
}
