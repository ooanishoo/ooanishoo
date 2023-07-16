'use client'
import { AnimatePresence, motion as m } from 'framer-motion'
import React from 'react'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <m.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="mx-auto mt-24  px-4 lg:container sm:mt-28 sm:px-6  lg:mt-32 lg:px-8 xl:pt-14"
    >
      <AnimatePresence>{children}</AnimatePresence>
      {/* {children} */}
    </m.main>
  )
}

export default Wrapper
