import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full px-4 sm:px-12 lg:px-24 py-6 lg:py-10'>
        <Link href='/' className='text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-semibold font-archivo'>ReadmeEasy</Link>
    </header>
  )
}

export default Header