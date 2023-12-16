'use client'
import React from "react"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { NavLinks } from "@/constants/navLinks"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"
import useMenuActive from "@/hooks/useMenuActive"
import LinkItem from "./LinkItem"



const Navbar = () => {
  return (
    <nav className="w-full py-5  dark:bg-dark">
       <div className=" wrapper flex justify-between items-center">
          <Link href='/' className=" flex-1 "><Image src='/asserts/blog.png' width={80} height={80}
           alt="logo" className=" rounded-xl shadow-xl"/></Link>
           
           <div className="flex gap-8 max-lg:gap-5 flex-1 justify-center 
           items-center max-md:hidden text-gray-600 dark:text-white">
               {
                NavLinks.map((item,index)=> {
                 const isActive = useMenuActive(item.route)
                 return (
                  <LinkItem key={index} route={item.route} 
                  label={item.label} isActive={isActive}/>
                 )
                })
               }
           </div>
           
           <div className="flex-1 justify-end flex gap-3 items-center">
               <ThemeToggle/>
               <MobileMenu/>
           </div>

       </div>
    </nav>
  )
}

export default Navbar