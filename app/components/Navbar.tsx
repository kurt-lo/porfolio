"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/logo.png';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const menuAnimation = {
    animation: menuOpen ? 'spinOpen 0.6s ease-out' : 'spinClose 0.6s ease-out',
  };

  return (
    <nav className='bg-bg flex items-center justify-between px-[2rem] py-[.5rem] sm:pt-[1rem] sm:px-[5rem]
    sm:flex sm:items-center
    '>
      <div className='logo-container flex'>
        <Image
          src={logo}
          alt='logo'
          width={60}
          height={60}
          className='object-contain select-none'
        />
        <h1 className={`hidden lg:block select-none text-[2rem] text-headings font-bold`}>
          Russel Kurt
        </h1>
      </div>

      {/* HAMBURGER MENU */}
      <div className='sm:hidden relative'>
        {menuOpen ? (
          <AiOutlineClose onClick={openMenu}
            className="cursor-pointer"
            style={menuAnimation}
          />
        ) : (
          <GiHamburgerMenu onClick={openMenu}
            className="cursor-pointer"
            style={menuAnimation}
          />
        )}
      </div>

      <div className={`links-container flex flex-col text-center top-[5rem] left-[5%] rounded-[25px] font-medium
      sm:flex sm:flex-row
      ${menuOpen ? '' : 'hidden'}`}
      >
        <Link href='#' className='py-[.5rem] px-[.5rem] md:pl-[3rem] hover:font-normal hover:text-tertiary sm:hover:font-medium sm:hover:underline sm:hover:decoration-4 sm:hover:underline-offset-8'>
          Home
        </Link>
        <Link href='#about' className='py-[.5rem] px-[.5rem] md:pl-[3rem] hover:font-normal hover:text-tertiary sm:hover:font-medium sm:hover:underline sm:hover:decoration-4 sm:hover:underline-offset-8'>
          About
        </Link>
        <Link href='#skills' className='py-[.5rem] px-[.5rem] md:pl-[3rem] hover:font-normal hover:text-tertiary sm:hover:font-medium sm:hover:underline sm:hover:decoration-4 sm:hover:underline-offset-8'>
          Skills
        </Link>
        <Link href='#contact' className='py-[.5rem] px-[.5rem] md:pl-[3rem] hover:font-normal hover:text-tertiary sm:hover:font-medium sm:hover:underline sm:hover:decoration-4 sm:hover:underline-offset-8'>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar