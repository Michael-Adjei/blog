import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

const PostsCard = ({post,index}) => {
  return (
    <Link href={{
      pathname : `blog/${post.id}`,
      query : {...post}
      }}>
    <div key={index} className=' dark:bg-black rounded-xl overflow-hidden
     shadow-xl'>
       <div key={index} className='w-full flex'>
          <Image src={post.image_url} width={900} height={900}
           alt='blog image' className='  shadow-xl 
           h-[500px] object-cover'/>
       </div>
            <div className='p-3'>
         
            <div className='px-3 inline-block text-gray-50 bg-sky-400
            rounded-md whitespace-nowrap'>
               {post.tags}
            </div>
          <div className='text-xl mt-3 text-gray-900 font-bold dark:text-white'>
            {post.title}
        </div> 
        <p className='mt-3 dark:text-white text-gray-900 text-sm'>
            {post.paragraph.substring(0,100) + 
            (post.paragraph.length > 100 ? "..." : "")}
            </p>
            <div className='flex mt-3 gap-3 items-center'>
            <Image src={post.authorImage} width={60} height={60}
             alt='author image' className='rounded-full object-cover
              w-10 h-10 border-2 border-sky-400'/>
              <div className='flex gap-2 dark:text-white text-gray-500
               text-sm'>
                  <span>{post.authorName}</span>
                  <span>.</span>
                  <span>7 minute read</span>
              </div>
            </div>

       </div>
    </div>
    </Link>
  )
}

export default PostsCard