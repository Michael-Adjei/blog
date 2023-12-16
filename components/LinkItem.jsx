import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'


const LinkItem = ({route,label,isActive,footer}) => {
  return (
    <div>
       <Link href={route} className={clsx("px-4 py-1", 
       isActive &&  "bg-sky-400 text-white rounded-xl",
       footer && isActive && "text-sky-400 rounded-none bg-transparent link")}
       >{label}</Link>
    </div>
  )
}

export default LinkItem
