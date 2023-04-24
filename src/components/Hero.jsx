import React from 'react'

const Hero = () => {
  return (
    <div className='bg-dark h-screen flex flex-col justify-center items-center capitalize font-heading font-bold gap-5'>
      <span className='text-secondary font-normal'>
        hello world!
      </span>
      <h1 className='text-light text-5xl'>
        I'm Rafael Reyes
      </h1>
      <h2 className='text-secondary text-4xl'>
        frontend developer
      </h2>
    </div>
  )
}

export default Hero