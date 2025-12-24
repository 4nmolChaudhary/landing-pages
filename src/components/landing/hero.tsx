import React from 'react'
// import Image from 'next/image'
import { Button } from '@/components/form/button'
import Chatbot from '@/components/chat/chatbot'

const Hero = () => {
  const items = ['Software Development', 'AI & ML', 'Generative AI', 'Web & Mobile App Development', 'Data Services', 'DevSecOps', 'Offshore Outsourcing', 'IT Staff Augmentation']
  return (
    <div className='w-full text-sm text-center sm:text-left h-auto relative'>
      <div className='w-full grid grid-cols-8 gap-2 relative'>
        <div className='h-37 grid grid-cols-8 col-span-8 before:absolute before:-left-[100vw] before:-z-1 before:h-37 before:w-[200vw] before:border-y before:border-y-[var(--border)]'></div>
        <div className='h-37 grid grid-cols-8 col-span-8 before:absolute before:-left-[100vw] before:-z-1 before:h-37 before:w-[200vw] before:border-y before:border-y-[var(--border)]'></div>
        <div className='h-37 col-span-8 before:absolute before:-left-[100vw] before:-z-1 before:h-37 before:w-[200vw] before:border-y before:border-y-[var(--border)]'></div>
        <div className='h-37 col-span-8 before:absolute before:-left-[100vw] before:-z-1 before:h-37 before:w-[200vw] before:border-y before:border-y-[var(--border)]'></div>
        <div className='h-37 col-span-8 before:absolute before:-left-[100vw] before:-z-1 before:h-37 before:w-[200vw] before:border-y before:border-y-[var(--border)]'></div>
        <div className='w-full h-full grid grid-cols-8 gap-2 absolute top-0 left-0 z-10'>
          <div className='col-span-3 grid md:grid-rows-5 gap-2'>
            <div></div>
            <h3 className='text-3xl xl:text-4xl font-medium tracking-tight col-span-3'>
              <span className='font-[family-name:var(--font-instrument-serif)] md:text-4xl xl:text-5xl ml-2'>AI-Powered</span>
              <br />
              Software Development &
              <br />
              <span className='text-black/40'>Data-Driven Business Solutions</span>
            </h3>
            <div className='text-md font-[family-name:var(--font-geist-mono)] text-black/75 row-span-3 col-span-3'>
              SculptSoft - AI-Driven Custom Software
              <br /> Development Company
              <div className='flex flex-wrap gap-2 mt-2'>
                {items.map((item, index) => (
                  <span key={index} className='border border-dashed border-accent/60 bg-accent/30 px-2 py-1 text-xs font-[family-name:var(--font-inter-tight)]'>
                    {item}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-2 mt-8'>
                <Button text='Hire Developers' onClick={() => console.log('inquire')} className='cursor-pointer' />
                <div className='text-sm'>
                  <a href='/plus?ref=top' className='px-4 group flex items-center justify-center relative w-full py-2 text-accent font-medium'>
                    <span className='absolute inset-0 border border-dashed border-accent/60 bg-accent/10 group-hover:bg-accent/15 dark:accent/30'></span>
                    Book Free AI Consultation
                    <svg width='5' height='5' viewBox='0 0 5 5' className='absolute top-[-2px] left-[-2px] fill-accent dark:accent/50'>
                      <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                    </svg>
                    <svg width='5' height='5' viewBox='0 0 5 5' className='absolute top-[-2px] right-[-2px] fill-accent dark:accent/50'>
                      <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                    </svg>
                    <svg width='5' height='5' viewBox='0 0 5 5' className='absolute bottom-[-2px] left-[-2px] fill-accent dark:accent/50'>
                      <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                    </svg>
                    <svg width='5' height='5' viewBox='0 0 5 5' className='absolute right-[-2px] bottom-[-2px] fill-accent dark:accent/50'>
                      <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-5 relative'>
            <div className='w-full h-full overflow-hidden absolute top-0 left-0'>{/* <Image className='xl:scale-100 md:scale-175' priority unoptimized src='/hero.gif' width={1000} height={1000} alt='my gif' /> */}</div>
            <div className='w-full h-full absolute z-10 right-0 top-0 grid gap-2 grid-cols-5 grid-rows-5'>
              <div className='h-full w-full bg-background border'></div>
              <div className='h-full w-full bg-background border row-start-5'></div>
              <div className='h-full w-full bg-background border col-start-5 row-start-5 flex items-center justify-center'>
                <Chatbot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
