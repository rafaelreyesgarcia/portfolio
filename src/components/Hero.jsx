import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "frontend developer",
      "interface designer",
      "web3 enthusiast"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='bg-dark h-screen flex flex-col justify-center items-center capitalize font-heading font-bold gap-5'>
      <span className='text-secondary font-normal'>
        hello world!
      </span>
      <h1 className='text-light text-5xl'>
        I'm Rafael Reyes
      </h1>
      <h2 className='text-secondary text-4xl'>
        {text}
        <Cursor cursorColor='#E7F6F2'/>
      </h2>
    </div>
  )
}

export default Hero