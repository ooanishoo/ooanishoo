import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './CustomIcons'

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <SunIcon className="animate-spin" />

  const handleOnClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const label = `Activate ${theme === 'light' ? 'dark' : 'light'} mode`

  return (
    <button
      onClick={handleOnClick}
      title={label}
      aria-label={label}
      className="delay-350 transition duration-500  ease-in-out  hover:text-sky-500 active:animate-ping   dark:hover:text-sky-400"
    >
      {theme === 'light' ? (
        <SunIcon className="hover:animate-spin" />
      ) : (
        <MoonIcon className="hover:animate-spin" />
      )}
    </button>
  )
}

export default ToggleThemeButton
