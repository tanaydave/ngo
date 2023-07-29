import React, { useState } from 'react'
import {motion as m } from 'framer-motion'
import misvis from '../assets/misvis.jpg'
import {  useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Variants = {
    visible: { opacity: 1, scale: 1,y:0, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0,y:"15%" }
  };
const Campaigns = () => {
    
 const controls = useAnimation();
const [ref, inView] = useInView();
useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  return (
    <m.div
    ref={ref}
    whileInView="visible"
    // animate={controls}
    initial="hidden"
    variants={Variants}
      
       
        className="py-16 "
      >
        <div className="flex flex-col items-center">
          <p className="md:text-6xl font-extrabold md:py-6 font-[Yeseva-One]">Current Campaigns</p>
          <div className="flex gap-8 justify-center px-12 py-12">
            <div className="w-[22vw]   h-[72vh] transition-all hover:shadow-2xl border-2 rounded-3xl  overflow-hidden">
              <img src={misvis} alt="" className=" w-full h-[25vh] " />
              <div className="pt-12 px-4 bg-slate-200 h-32">
              <div className="w-full bg-gray-600 rounded-full  dark:bg-gray-900 ">
                  <div
                    className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]"
                    
                  >
                    {" "}
                    50%
                  </div>
                </div>
                <div className="flex justify-between px-1 pt-3 ">
                  <div className="text-orange-500 ">Raised: Rs 1000 </div>
                  <div className="text-[#09b6cb]">Goal: Rs 2000</div>
                </div>
                </div>
              <div className="flex flex-col px-4 gap-4 py-4">
                <div className="text-xl font-semibold hover:text-orange-500">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-md ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  cum.
                </div>
                <button className="border-2 rounded-full p-3 mt-2 w-32 text-white bg-orange-500 transition">
                  Read More
                </button>
               
                
              </div>
            </div>
            <div className="w-[22vw] hover:shadow-2xl border-2 h-[72vh] transition-all   rounded-3xl  overflow-hidden">
              <img src={misvis} alt="" className=" h-[25vh] w-full " />
              <div className="pt-12 px-4 bg-slate-200 h-32">
              <div className="w-full bg-gray-600 rounded-full  dark:bg-gray-900 ">
                  <div
                    className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]"
                    
                  >
                    {" "}
                    50%
                  </div>
                </div>
                <div className="flex justify-between px-1 pt-3 ">
                  <div className="text-orange-500 ">Raised: Rs 1000 </div>
                  <div className="text-[#09b6cb]">Goal: Rs 2000</div>
                </div>
                </div>
              <div className="flex flex-col px-4 gap-4 py-4">
                <div className="text-xl font-semibold hover:text-orange-500">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  cum.
                </div>
                <button className="border-2 rounded-full p-3 mt-2 w-32 text-white bg-orange-500 transition">
                  Read More
                </button>
               
                
              </div>
            </div>
            <div className="w-[22vw] transition-all   h-[72vh] hover:shadow-2xl border-2 rounded-3xl  overflow-hidden">
              <img src={misvis} alt="" className=" w-full h-[25vh] " />
              <div className="pt-12 px-4 bg-slate-200 h-32">
              <div className="w-full bg-gray-600 rounded-full  dark:bg-gray-900 ">
                  <div
                    className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]"
                    
                  >
                    {" "}
                    50%
                  </div>
                </div>
                <div className="flex justify-between px-1 pt-3 ">
                  <div className="text-orange-500 ">Raised: Rs 1000 </div>
                  <div className="text-[#09b6cb]">Goal: Rs 2000</div>
                </div>
                </div>
              <div className="flex flex-col px-4 gap-4 py-4">
                <div className="text-xl font-semibold hover:text-orange-500">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  cum.
                </div>
                <button className="border-2 rounded-full p-3 mt-2 w-32 text-white bg-orange-500 transition">
                  Read More
                </button>
               
                
              </div>
            </div>
          </div>
        </div>
      </m.div>
  )
}

export default Campaigns
