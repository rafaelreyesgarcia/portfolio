import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='bg-dark text-light flex flex-col items-center justify-between h-[60vh]' id='contact'>
      <div className='flex flex-col gap-8 items-center pt-12'>
        <h2 className='font-heading font-bold text-5xl'>
          Contact
        </h2>
        <p className='font-body'>
          I would love to build something for you
        </p>
      </div>
      <Link to='mailto:rafaelreyesgarcia93@gmail.com'>
        <button className='border-2 border-light self-center px-4 rounded-md uppercase text-2xl hover:bg-primary mb-20'>
          connect
        </button>
      </Link>
    </section>
  )
}

export default Contact