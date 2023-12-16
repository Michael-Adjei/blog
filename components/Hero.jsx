
import { Posts } from "@/constants/posts"
import Image from "next/image";
import Link from "next/link"

const Hero = () => {
    const featuredPost = Posts.filter((post)=> post.featured===true);
    const topPost = featuredPost.slice(0,2)
    const bottomPost = featuredPost.slice(2,5);
  return (
     <section className="py-5 ">
      <div className="wrapper ">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-x-0
         md:gap-x-6 gap-5">
         {
           topPost.map((post,index)=>(
             <div key={index} className=" md:px-0 md:col-span-2
              lg:col-span-3 overflow-hidden rounded-xl shadow-xl">
                <Link href={{
                  pathname  : `blog/${post.id}`,
                  query : {...post},
                }}>
                <div className="relative overflow-hidden w-full">
                  <div className=" absolute h-full w-full bg-black/50"/>
                    <div className=" absolute p-5 w-full h-full">
                     <div className="flex flex-col justify-between h-full">
                        <div>
                        <h2 className="text-white text-3xl
                         font-bold mb-2 px-1">{post.title}</h2>  
                         <span className="text-gray-500 bg-sky-100
                          rounded-md px-2">{post.tags}</span> 
                     </div>
                        </div>
                     <div className="text-white font-bold text-sm flex flex-col
                 gap-1">
                   <span>{post.publishDate}</span>
                </div> 
                
               </div>
                <Image src={post.image_url} width={400} height={400}
                alt='blog image' className=" w-full h-[400px] object-cover"/>
           </div>
           </Link>
        </div>
            
          ))
                       
      }
   </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-6
     mt-6 gap-5">
       {
        bottomPost.map((post,index)=> (
         <div key={index} className="md:px-0 relative rounded-xl overflow-hidden
          shadow-xl">
              <Link href={{
                  pathname  : `blog/${post.id}`,
                  query : {...post},
                }}>
             <div className="relative overflow-hidden w-full">
                  <div className=" absolute h-full w-full bg-black/50"/>
                    <div className=" absolute p-5 w-full h-full">
                     <div className="flex flex-col justify-between h-full">
                        <div>
                        <h2 className="text-white text-3xl
                         font-bold mb-2 px-1">{post.title}</h2>  
                         <span className="text-gray-500 bg-sky-100
                          rounded-md px-2">{post.tags}</span> 
                     </div>
                        </div>
                     <div className="text-white font-bold text-sm flex flex-col
                 gap-1">
                   <span>{post.publishDate}</span>
                </div> 
                
               </div>
                <Image src={post.image_url} width={400} height={400}
                alt='blog image' className=" w-full h-[400px] object-cover"/>
           </div>
           </Link>
         </div>
        ))
       }
    </div>

  </div>
  </section>
  )
}

export default Hero
