import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { projects } from '../constants';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className=' bg-light flex flex-col justify-around' id='projects'>
      <h2 className='font-heading font-bold text-primary text-5xl text-center pt-8'>
        Projects
      </h2>
      {/* Project */}
      {projects.map(project => (
        <div key={project.name} className='flex flex-col px-16 gap-8 md:gap-0 items-center md:justify-between md:flex-row py-16'>
          <div className='text-primary font-body text-2xl flex flex-col justify-around space-y-8'>
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
            <div className='flex justify-between'>
              <Link to={project.demoUrl} target='blank' className='border-2 border-dark rounded-md px-2 hover:bg-dark hover:text-light'>
                <button>live demo</button>
              </Link>
              <Link to={project.sourceUrl} target='blank' className='border-2 border-dark rounded-md px-2 hover:bg-dark hover:text-light'>
                <button>source code</button>
              </Link>
            </div>
          </div>
          <div className='bg-skeleton w-full h-[20rem] md:w-[40%]'>
            <img src={project.img} alt="" className='object-fit h-full'/>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects