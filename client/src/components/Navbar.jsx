import React, { useState } from 'react'
import { path } from '../dynamicData'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='flex flex-row items-center justify-between my-4 px-2  mx-auto max-w-[944px]'>
      <h1></h1>
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='flex flex-col gap-1'>
          <span className={`w-6 h-1 bg-dark ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-1 bg-black ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1 bg-black ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <nav className={`lg:block ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
        <ul className='flex flex-row gap-4'>
          {path.map((item) => (
            <li key={item.id}>
              <Link className='custom-link' to={`/${item.path}`}>{item.name_eng}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
