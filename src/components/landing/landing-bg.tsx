import React from 'react'

const LandingBg = () => {
  return (
    <div className='absolute top-0 w-full lg:w-4xl xl:w-7xl -z-1 h-full grid grid-cols-8 gap-2 mx-auto'>
      {[...Array(8)].map((_, i) => (
        <div key={i} className='border-x' />
      ))}
    </div>
  )
}

export default LandingBg
