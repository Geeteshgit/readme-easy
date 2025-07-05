import GeneratedCounter from '@/Components/Homepage/GeneratedCounter'
import Hero from '@/Components/Homepage/Hero'
import HeroImage from '@/Components/Homepage/HeroImage'
import HowItWorks from '@/Components/Homepage/HowItWorks'
import React from 'react'

const HomePage = () => {
  return (
    <main className='flex-1 flex flex-col items-center px-4 sm:px-12 lg:px-24 py-4 sm:py-6 lg:py-8 gap-10 sm:gap-15 lg:gap-20 text-center'>
      <Hero />
      <HeroImage />
      <HowItWorks />
      <GeneratedCounter />
      <p className='sm:text-lg lg:text-xl opacity-75'>No login. No sign-up. Completely free, AI-powered README generation.</p>
    </main>
  )
}

export default HomePage