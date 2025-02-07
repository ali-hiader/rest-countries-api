'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import Moon from '@/components/icons/moon'
import Sun from '@/components/icons/sun'
export default function Header() {
  const { setTheme, theme } = useTheme()
  console.log(theme)

  return (
    <header className='bg-white dark:bg-headerDarkBG shadow z-10 py-4'>
      <hgroup className='w-[90%] max-w-[1400px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold md:text-xl text-textColor dark:text-lightBG'>
          Where in the world?
        </h1>
        <Button
          variant={'link'}
          className=' outline-none font-bold hover:no-underline'
          onClick={() => setTheme(`${theme === 'dark' ? 'light' : 'dark'}`)}
        >
          {theme === 'dark' ? (
            <Sun className='size-20' />
          ) : (
            <Moon className='size-20' />
          )}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </hgroup>
    </header>
  )
}
