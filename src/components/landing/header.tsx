import React from 'react'

const Header = () => {
  return (
    <div className='w-full text-sm text-center sm:text-left pt-2 col-span-8 h-auto'>
      <div className='w-full grid grid-cols-8 gap-2 h-12 before:absolute before:-left-[100vw] before:-z-1 before:h-12 before:w-[200vw] before:border-y before:border-y-[var(--border)]'>
        <div className='relative flex items-center justify-center text-2xl font-[family-name:var(--font-instrument-serif)] font-semibold'>
          Sculptsoft
          <div className='absolute top-0 left-0 size-2 border-t border-l border-accent'></div>
          <div className='absolute top-0 right-0 size-2 border-t border-r border-accent'></div>
          <div className='absolute bottom-0 left-0 size-2 border-b border-l border-accent'></div>
          <div className='absolute bottom-0 right-0 size-2 border-b border-r border-accent'></div>
        </div>
        <div className='text-sm flex items-center justify-center'>Company</div>
        <div className='text-sm flex items-center justify-center'>Services</div>
        <div className='text-sm flex items-center justify-center'>Resources</div>
        <div className='text-sm flex items-center justify-center'>Careers</div>
        <div className='text-sm flex items-center justify-center'></div>
        <div className='text-sm flex items-center justify-center'>Inquire</div>
        <div className='text-sm p-2'>
          <a href='/plus?ref=top' className='group flex items-center justify-center relative w-full py-1 text-sm/6 text-accent font-medium'>
            <span className='absolute inset-0 border border-dashed border-accent/60 bg-accent/10 group-hover:bg-accent/15 dark:accent/30'></span>
            Hire Us
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
      <div className='relative flex h-12 w-full before:border-y-[var(--border)] before:absolute before:-left-[100vw] before:h-12 before:w-[200vw] before:bg-repeat before:bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)] before:bg-size-[16px_auto] before:bg-opacity-5'></div>
    </div>
  )
}

export default Header
/* <div className='relative flex h-8 w-full border-x before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56'></div> */
/* <div className='row-span-full row-start-1 h-16 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10'></div> */
