import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuMoonStar, LuSun } from 'react-icons/lu'

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted)
    return <LuSun className="animate-spin text-slate-400" size={24} />

  const handleOnClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const label = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`

  return (
    <button
      onClick={handleOnClick}
      title={label}
      aria-label={label}
      className="delay-350 text-slate-400 transition  duration-500  ease-in-out hover:animate-spin   hover:text-sky-500 active:animate-ping dark:text-slate-600 dark:hover:text-sky-400"
    >
      {theme === 'light' ? <LuSun size={24} /> : <LuMoonStar size={24} />}
    </button>
  )
}

export default ToggleThemeButton
