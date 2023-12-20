import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { style } from '../style';
// import { navlinks } from '../constants';
import {logo, menu, close} from '../assets'
import { navLinks } from '../constants';


const Navbar = () => {

  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState('false');

  return (
   <>
    <nav className={`${style.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-none`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
         <Link to="/" className='flex items-center gap-2' onClick={()=>{SecurityPolicyViolationEvent("");window.scrollTo(0,0)}}>
             <img src={logo} alt="logo" className='w-20 h-20 object-contain' />
             <p className="text-white text-[18px] font-bold cursor-pointer flex">Manikandan &nbsp;<span className='sm:block hidden'>|&nbsp; FullStackDeveloper</span></p>
         </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {
              navLinks.map((Link)=>(
                <li key={Link.id} className={`${active===Link.title?"text-white":"text-secondary"} hover:text-white hover:text-[18px] font-medium`} onClick={()=>setActive(Link.title)}>
                  <a href={`#${Link.id}`} >{Link.title}</a>
                </li>
              ))
            }
          </ul>

          <div className="sm:hidden flex flex-col justify-end items-center">
            <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>{setToggle(!toggle)}} />
            <div className={`${!toggle? 'hidden': 'flex'} p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
            {
              navLinks.map((Link)=>(
                <li key={Link.id} className={`${active===Link.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px] `} onClick={()=>{setActive(Link.title);setToggle(!toggle)}}>
                  <a href={`#${Link.id}`} >{Link.title}</a>
                </li>
              ))
            }
             </ul>
            </div>
          </div>
      </div>
    </nav>
   </>
  )
}

export default Navbar