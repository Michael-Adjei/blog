"use client"
import React, {useEffect} from 'react'
import { Posts } from "@/constants/posts"
import clsx from 'clsx'

const PostFilter = ({setFiltered,activeCatergory,setActiveCatergory}) => {
    useEffect(()=> {
        if (activeCatergory=== "all"){
            setFiltered(Posts)
            return 
        }
      
        const filtered = Posts.filter((post)=> post.tags?.
        includes(activeCatergory))
        setFiltered(filtered)
    },[activeCatergory])
  return (
   <>
     <div className='flex gap-5 my-10 flex-wrap justify-center dark:text-white'>
       <button className={clsx(
        "py-1 px-5 ", activeCatergory === "all" ? 'bg-sky-300 text-white rounded-md':null
       )} onClick={()=> setActiveCatergory("all")}>
         All
       </button>
        <button className={clsx(
        "py-1 px-5 ", activeCatergory === "lifestyle" ? 'bg-sky-300 text-white rounded-md':null
       )} onClick={()=> setActiveCatergory("lifestyle")}>
         Lifestyle
         </button>
        <button className={clsx(
        "py-1 px-5 ", activeCatergory === "music" ? 'bg-sky-300 text-white rounded-md':null
       )} onClick={()=> setActiveCatergory("music")}>
         Music
         </button>
        <button className={clsx(
        "py-1 px-5 ", activeCatergory === "hike" ? 'bg-sky-300 text-white rounded-md':null
       )} onClick={()=> setActiveCatergory("hike")}>
        Hike
        </button>
        <button className={clsx(
        "py-1 px-5 ", activeCatergory === "photography" ? 'bg-sky-300 text-white rounded-md':null
       )} onClick={()=> setActiveCatergory("photography")}>
        Photography
        </button>
     </div>
   </>
  )
}

export default PostFilter
