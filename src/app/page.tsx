'use client'

import LandingBg from '@/components/landing/landing-bg'
import Header from '@/components/landing/header'
import Hero from '@/components/landing/hero'

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <main className='flex justify-center h-full w-full overflow-x-hidden'>
        <LandingBg />
        <div className='w-full lg:w-4xl xl:w-7xl z-10 h-full grid-cols-8 gap-2'>
          <Header />
          <Hero />
        </div>
      </main>
    </div>
  )
}

