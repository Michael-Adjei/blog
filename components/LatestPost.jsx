import { Posts } from "@/constants/posts"
import PostsCard from "./PostsCard"


const LatestPost = () => {
  return (
    
    <section className="w-full mt-10 ">
      <div className="wrapper ">
        <div className=" relative">
           <div className=" absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-300"/>
           </div>
           <div className=" relative flex justify-center ">
              <span className=" bg-gray-100 px-3 text-gray-900
               text-2xl dark:bg-medium dark:text-gray-50">
                Latest Post
               </span>
           </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 grid-cols-2 
        max-sm:grid-cols-1 mt-10">
        {
          Posts.slice(7,13).map((post, index)=>(
             <PostsCard index={index} post={post}/>
          ))
        }
        </div>
      </div>
    </section>
    
  )
}

export default LatestPost
