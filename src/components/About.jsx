import React from 'react'

const About = () => {
  return (
    <section className='bg-light flex flex-col justify-around' id='about'>
      <h2 className='text-primary font-heading text-center capitalize text-5xl font-bold py-8'>
        about me
      </h2>
      <div className='flex gap-8 justify-around items-center p-12 flex-col md:flex-row'>
        <div className='bg-skeleton w-80 h-80 rounded-full'>
        </div>
        <div className='text-dark md:w-[60%] space-y-8 text-xl'>
          <p>
            I'm Rafael a frontend developer based in Chicago. I have a passion for creating beautiful, responsive, and user-friendly web applications using the latest frontend technologies.
          </p>
          <p>
            I have a background in marketing and advertising and recently decided to purse a career in web development.
            As someone who has always had an eye for design and a love for solving problems, I find that frontend development allows me to combine these two in harmony.
          </p>
          <p>
            I am committed to becoming proficient in all aspects of fullstack development. Ultimately, my aim is to become a versatile developer who can deliver quality solutions for both frontend and backend development.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default About