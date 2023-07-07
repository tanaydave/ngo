import React from 'react'
import {motion as m} from "framer-motion"
import Navbar from '../components/navbar'
import misvis from "../assets/misvis.jpg"

const Blogs = () => {

const posts =[
  {
    id:1,
    img:misvis,
    date:'18 July 2023',
    headline: 'hello hello hello hello hello',
    content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis itaque voluptate corporis eius repellat, non dolorum animi perferendis dolore quam! Hic nam perferendis illum. Odio doloribus quia nostrum impedit!"

  },
  {
    id:1,
    img:misvis,
    date:'18 July 2023',
    headline: 'hello hello hello hello hello',
    content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis itaque voluptate corporis eius repellat, non dolorum animi perferendis dolore quam! Hic nam perferendis illum. Odio doloribus quia nostrum impedit!"

  },
  {
    id:1,
    img:misvis,
    date:'18 July 2023',
    headline: 'hello hello hello hello hello',
    content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis itaque voluptate corporis eius repellat, non dolorum animi perferendis dolore quam! Hic nam perferendis illum. Odio doloribus quia nostrum impedit!"

  },
  {
    id:1,
    img:misvis,
    date:'18 July 2023',
    headline: 'hello hello hello hello hello',
    content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis itaque voluptate corporis eius repellat, non dolorum animi perferendis dolore quam! Hic nam perferendis illum. Odio doloribus quia nostrum impedit!"

  }
]

  return (
    <m.div  className=" h-fit  bg-zinc-200">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50 "
      >
        <Navbar />
      </m.div>

      <m.div  className="grid grid-cols-3 pt-16 ">
        <div className=" flex flex-col gap-8  col-span-2 pl-40">
          {/* map here  */}
          {posts.map(post => (<div className="bg-white h-fit w-[53vw] flex flex-col items-start gap-8 pb-8 ">
            <img src={post.img} alt="" className="h-[30rem] w-full " />
            <div className='text-6xl font-semibold mx-16'>{post.headline}</div>
            <div className='mx-16 text-lg'>{post.date}</div>
            <div className='mx-16 text-lg'>{post.content}</div>
            <div className='mx-16 text-lg'><button>Read More</button></div>
             
             </div>))}

      



        </div>
        <div className=" col-span-1 flex flex-col gap-8">
          <div><input type="text" placeholder='search...' className='p-3 w-80' /></div>
          <div className='text-3xl font-medium'>Recent Posts</div>
          <div className='flex flex-col gap-2 text-lg'>

          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          </div>


        </div>
      </m.div>
      
    </m.div>
  )
}

export default Blogs
