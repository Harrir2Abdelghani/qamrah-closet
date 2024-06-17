import React from 'react'
import logo from "../../assets/icon.png"
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "DRESSES",
    link: "/#dresses",
  },

  {
    id: 3,
    name: "BOOKING",
    link: "/#booking",
  },
  {
    id: 4,
    name: "ABOUT",
    link: "/#about",
  },
];
const Navbar = ({theme, setTheme}) => {
  return (
   <nav className='relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg w-full dark:bg-black dark:text-white duration-300'>
    <div className='container'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <img src={logo} alt="logo" className='w-6' />
          <h1 className='text-4xl font-bold font-display text-gray-600'>Qamrah</h1>  
          <img src={logo} alt="logo" className='w-6' />
        </div>
        <div className='hidden md:block'>
          <ul className='flex items-center gap-8'>
            {
              Navlinks.map((data) => (
                <li key={data.id} className='py-4'>
                <a className='py-2 mr-7 font-serif  hover:border-b-2 hover:text-white hover:border-black transition-colors duration-300 text-lg font-medium' href={data.link}>{data.name}</a>
              </li>
              ))
            }
          </ul>
        </div>
        <div>
          {
            theme === 'dark' ? (
              <FaSun onClick={()=> setTheme("light")} className='w-6 h-6'/>
            ):(
              <IoMoon onClick={() => setTheme("dark")} className='w-6 h-6'/>
            )
          }    
        </div>
      </div>

    </div>
   </nav>
  )
}

export default Navbar