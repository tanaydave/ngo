import React from 'react'
import Navbar from "../components/navbar"
import {motion as m} from "framer-motion"
import misvis from "../assets/misvis.jpg"
import Footer from "../components/footer"

const Events = () => {
  const nums =[1,1,1,1]
  return (
    <div className="font-Poppins h-full bg-[#f5f3ee]">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      <div className="flex items-center justify-center text-white bg-orange-400 h-60 mb-4 text-8xl ">Events</div>
      
      {nums.map(()=>{return(<m.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }} className='shadow-xl border-t-2  mb-4 mt-4 md:m-0 flex md:flex-row flex-col justify-center  mx-4 md:mx-24 gap-6 md:gap-20 py-12 '>
        

       
        <div className="hidden md:block w-60 h-40 bg-white rounded-xl  ">
          <div className='w-60 h-40 flex flex-col items-center gap-2   justify-center'>
          <div className='text-5xl font-bold'> 10</div>
          <div className='text-xl text-orange-500 uppercase'>july</div>
          </div>

        </div>
        <div className="  "> 
        {/* image  */} <div className='h-72 w-72'>
          <img src={misvis} alt=""  className='p-2 md:p-0 h-full'/>
        </div>
        </div>
        <div className="  md:w-[35vw] mb-4">
          <div className="flex flex-col gap-6 ">
            <div className='text-3xl'> Lorem ipsum dolor sit amet consectetur.</div>
            <div className='uppercase text-orange-500 md:hidden'> Date</div>
            <div className='uppercase text-orange-500'> day | time</div>
            <div className=''> address Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit, repellat deleniti in tenetur sapiente.</div>
            <div><button className='uppercase border-2 border-orange-500 bg-transparent text-orange-500 rounded-full py-4 px-6 hover:bg-orange-500 hover:text-white duration-500'>notify me</button> </div>

          </div>
          </div>

      </m.div>)})}
      <Footer />
      
    </div>
  )
}

export default Events
