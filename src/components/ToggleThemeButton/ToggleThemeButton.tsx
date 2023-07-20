'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuMoonStar, LuSun } from 'react-icons/lu'

interface ToggleThemeButtonProps {
  size?: number
}

export const ToggleThemeButton = ({ size = 24 }: ToggleThemeButtonProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <LuSun
        title="Sun icon"
        aria-label="Sun icon"
        className="animate-spin text-slate-400"
        size={24}
      />
    )
  }

  const handleOnClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const label = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`

  return (
    <button
      onClick={handleOnClick}
      title={label}
      aria-label={label}
      className="delay-350 text-slate-400 transition  duration-500  ease-in-out    hover:text-sky-500  dark:text-slate-600 dark:hover:text-sky-400"
    >
      {theme === 'light' ? (
        <LuSun role="img" size={size} aria-label="Sun icon" />
      ) : (
        <LuMoonStar role="img" size={size} aria-label="Moon icon" />
      )}
    </button>
  )
}
