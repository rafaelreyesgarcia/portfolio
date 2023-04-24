import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className='h-screen bg-light flex flex-col justify-around'>
      <h2 className='font-heading font-bold text-primary text-5xl text-center'>
        Projects
      </h2>
      {/* Project */}
      {projects.map(project => (
        <div className='flex justify-center gap-40'>
        <div className='bg-skeleton w-[640px] h-[454px]'>
          <img src={project.img} alt="" />
        </div>
        <div className='text-primary font-body text-2xl flex flex-col justify-around'>
          <p className='font-bold uppercase'>
            {project.title}
          </p>
          <h3 className='font-bold text-center text-3xl'>
            {project.name}
          </h3>
          <p>{project.description}</p>
          <p className='font-bold'>Technologies used:</p>
          <ul>
            {project.technologies.map(technology => (
              <div className='flex items-center'>
                <MdArrowRight></MdArrowRight>
                <li>{technology}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      ))}
    </section>
  )
}

export default Projects