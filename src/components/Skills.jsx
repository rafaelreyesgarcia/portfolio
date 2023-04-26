import React from 'react'
import { skills } from '../constants'

const Skills = () => {
  return (
    <section className='bg-dark text-light h-[80vh] flex flex-col justify-around' id='skills'>
      <div className='flex flex-col items-center gap-8'>
        <h2 className='font-heading text-5xl font-bold'>
          Skills
        </h2>
        <p className='sm:w-[60%] md:w-[30%] text-center'>
          Technologies I've learned and used ranging from programming languages and libraries to design and development tools
        </p>
      </div>
      <div className='grid grid-cols-5 gap-8 px-6'>
        {skills.map(skill => (
          <div className='flex flex-col items-center' key={skill.name}>
            <img src={skill.img} alt="" className='w-10 h-10 object-contain' />
            <p className='capitalize font-body text-light'>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills