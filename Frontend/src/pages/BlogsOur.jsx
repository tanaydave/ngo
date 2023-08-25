import React from 'react'
import {motion as m} from "framer-motion"
import Navbar from '../components/navbar'
import misvis from "../assets/misvis.jpg"
import Footer from "../components/footer"
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
    <m.div  className=" h-fit  bg-[#f5f3ee] font-Poppins">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50 "
      >
        <Navbar />
      </m.div>
      <div className="flex items-center justify-center text-white bg-orange-400 h-60 mb-4 text-8xl ">Blogs</div>
      <div className='md:hidden pt-8 text-center rounded-lg'><input type="text" placeholder='search...' className='p-3 w-80 rounded-lg' /></div>

      <m.div  className="md:grid md:grid-cols-3 pt-16 ">
        <div className=" flex flex-col items-center gap-8 md:mx-0 md:col-span-2 md:pl-40">
          {/* map here  */}
          {posts.map(post => (<div className="bg-white shadow-lg my-2 h-fit md:w-[53vw] flex flex-col items-start gap-8 pb-8 ">
            <img src={post.img} alt="" className="md:h-[30rem] md:w-full  w-full" />
            <div className='md:text-6xl font-semibold md:mx-16'>{post.headline}</div>
            <div className='md:mx-16 md:text-lg'>{post.date}</div>
            <div className='md:mx-16 md:text-lg'>{post.content}</div>
            <div className='md:mx-16 md:text-lg'><button>Read More</button></div>
             
             </div>))}

      



        </div>
        <div className=" hidden md:flex col-span-1  flex-col gap-8">
          <div><input type="text" placeholder='search...' className='p-3 w-80' /></div>
          <div className='text-3xl font-medium'>Recent Posts</div>
          <div className='flex flex-col gap-2 md:text-lg'>

          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          <div><a href="">Lorem ipsum dolor sit amet consectetur.</a></div>
          </div>


        </div>
        
      </m.div>
      <Footer/>
      
    </m.div>
  )
}

export default Blogs
