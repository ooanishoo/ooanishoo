import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './CustomIcons'

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted)
    return (
      <span className="relative flex h-8 w-8">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-slate-300"></span>
      </span>
    )

  const handleOnClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={handleOnClick}
      className="transition ease-in-out delay-350  hover:-translate-y-1 hover:scale-110 duration-500 active:animate-ping"
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
