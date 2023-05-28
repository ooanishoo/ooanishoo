import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './CustomIcons'

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const handleOnClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <button
      onClick={handleOnClick}
      className="transition ease-in-out delay-350  hover:-translate-y-1 hover:scale-110 duration-500 active:animate-ping"
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ToggleThemeButton
