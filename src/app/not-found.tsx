'use client'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-b dark:bg-mainDarkBG bg-lightBG flex items-center justify-center px-4'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-blue-800 mb-8 animate-bounce'>
          404
        </h1>
        <h2 className='text-3xl font-semibold dark:text-lightBG text-gray-800 mb-4'>
          Oops! Page Not Found
        </h2>
        <p className='text-xl text-gray-500 mb-8'>
          The page you&apos;re looking for doesn&apos;t seem to exist.
        </p>
        <Link
          href='/'
          className='inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        >
          <Home className='w-5 h-5 mr-2' />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
