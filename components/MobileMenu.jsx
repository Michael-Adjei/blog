"use client"
import React ,{useState}from 'react'
import { NavLinks } from "@/constants/navLinks"
import Link from "next/link"
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = () => {
  const [openMobileMenu , setOpenMobileMenu]= useState(false);
  const HandleOpen = ()=> {
     setOpenMobileMenu(!openMobileMenu);
  }
  return (
    <>
        <label className=" swap swap-rotate  md:hidden">
          <input type='checkbox' onClick={()=>HandleOpen()}
           checked={openMobileMenu ? false : true}/>
           <HiMenu size={32} className=' dark:text-white swap-on fill-current
            w-6 h-6'/>
           <MdOutlineClose size={32} className=' dark:text-white swap-off fill-current
            w-6 h-6' />
        </label>
        {openMobileMenu ? (
          <div className='mobile-menu'>
               {
                 NavLinks.map((item,index)=> (
                  <Link key={index} href={item.route}>{item.label}</Link>
                 ))
               }
          </div>
        ):null
        }
    </>
  )
}

export default MobileMenu
