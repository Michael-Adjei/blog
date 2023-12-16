"use client"
import { Posts } from "@/constants/posts"
import React,{ useState} from "react"
import PostsCard from "./PostsCard"
import PostFilter from "./PostFilter"

const MorePost = () => {
  const [activeCatergory, setActiveCatergory] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(12);

  const loadMorePosts = () => {
    setVisiblePosts((prev)=> prev + 4)
  }
  return (
    <div className="w-full h-fit " >
       <div className="wrapper">
          <PostFilter setFiltered={setFiltered}
           activeCatergory={activeCatergory} 
           setActiveCatergory={setActiveCatergory}
           />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              {
                filtered.slice(0, visiblePosts).map((post,index)=> (
                  <PostsCard key={index} post={post}/>
                ))
              }
           </div>
           <div className="py-10 ">
              {
                visiblePosts < filtered.length && (
                  <div className="text-center mt-4 ">
                      <button onClick={()=> loadMorePosts()}
                      className="bg-sky-400 hover:bg-sky-200 py-2 px-4
                       text-white rounded-xl shadow-xl ">
                          Load More
                      </button>
                  </div>
                )
              }
           </div>
       </div>
    </div>
  )
}

export default MorePost
