'use client'

import BackArrow from '@/components/icons/back-arrow'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import React from 'react'

function BackBtn() {
  function back() {
    redirect('..')
  }
  return (
    <Button
      onClick={back}
      className='pr-6 pl-4 bg-white shadow-md text-gray-900 hover:text-gray-700 hover:bg- dark:dark:text-gray-400'
    >
      <BackArrow className=' dark:fill-lightBG dark:stroke-lightBG' /> Back
    </Button>
  )
}

export default BackBtn
