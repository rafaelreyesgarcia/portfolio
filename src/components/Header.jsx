import React from 'react'
import { headerLinks } from '../constants'

const Header = () => {
  return (
    <div
      className='
        bg-primary
        flex justify-between items-center
        font-body text-light
        px-6 h-[60px] fixed w-full
      '
    >
      <ul className='flex gap-4 uppercase'>
        {headerLinks.map(link => (
          <a href={`#${link}`}>
            <li>{link}</li>
          </a>
        ))}
      </ul>
      <div>
        <button className='border-2 border-dark rounded-md px-4
         hover:bg-dark uppercase'>
          Resume
        </button>
      </div>
    </div>
  )
}

export default Header