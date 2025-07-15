import React from 'react'
import { Hero, HeroImage, HowItWorks } from "@/Components/Homepage/index";

const HomePage = () => {
  return (
    <main className='flex-1 flex flex-col items-center px-4 sm:px-12 lg:px-18 py-4 sm:py-6 lg:py-8 gap-10 sm:gap-15 lg:gap-20 text-center'>
      <Hero />
      <HeroImage />
      <HowItWorks />
      <p className='sm:text-lg lg:text-xl opacity-75'>No login. No sign-up. Completely free, AI-powered README generation.</p>
    </main>
  )
}

export default HomePage