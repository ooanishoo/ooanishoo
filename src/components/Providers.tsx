'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  )
}
