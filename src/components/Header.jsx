import React from 'react'
import { headerLinks } from '../constants'
import { HashLink } from 'react-router-hash-link'

const Header = () => {

  const headerHeight = 60;
  function handleClick(sectionId) {
    const section = document.getElementById(sectionId);
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop - headerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className='
        bg-primary
        flex justify-between items-center
        font-body text-light
        px-6 h-[60px] fixed w-full
      '
    >
      <ul className='flex uppercase'>
        {headerLinks.map(link => (
          <HashLink
            key={link}
            to={`#${link}`}
            scroll={() => handleClick(link)}
            className='hover:bg-dark hover:rounded-md px-4'
          >
            <li>{link}</li>
          </HashLink>
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