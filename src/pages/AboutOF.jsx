import React from 'react'
import {motion as m} from 'framer-motion'
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState } from "react";
import volunteer from "../assets/volunteer.jpg";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {BiLogoLinkedin} from "react-icons/bi"
import {  useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:2,
        delayChildren: 0.8,
        staggerChildren: 0.5
      }
    }
  };
  
  
  const item = {
    hidden: {scale:0.8, opacity: 0 },
    visible: {
      scale:1,
      opacity: 1
    },
  };


const AboutOF = () => {
    const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const [content4, setContent4] = useState(false);
  const [content5, setContent5] = useState(false);
  const [content6, setContent6] = useState(false);
  const controls = useAnimation();
const [ref, inView] = useInView();
useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView])

  return (
    <m.div>
        <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      <m.div
        initial={{ opacity: 0, x: "200%" }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col md:h-[100vh]  pb-20 md:pb-48 items-start justify-center"
      >
        <div className="  text-4xl md:text-8xl text-orange-500 md:text-black  font-bold md:after:absolute md:after:content-[''] md:after:items-center md:after:w-96 md:after:h-2 md:after:top-40 pb-12 md:after:left-80 md:after:bg-orange-500   md:pl-60">
          Our Mission
        </div>
        <div className="flex md:flex-row flex-col  md:items-center md:w-5/6 pb-8 text-lg md:text-xl md:px-20 md:gap-44 leading-7 md:leading-relaxed">
          <p className="w-full mx-1 md:mx-0">
            Orinova, is an influential NGO that aims to build a just and
            equitable society where everyone can live with dignity and in good
            health. Our influence extends beyond just allocating funds to the
            most in need areas; it also involves putting communities in control
            of change and redistributing power in order to completely alter the
            way philanthropy and assistance are delivered. We as a care-oriented
            organization, keep an eye on the problems arising in society. We are
            working to monitor the issues that are emerging in society. We
            simply work to improve society and the nation as a whole.
          </p>
          <img src={mission} className=" md:block w-full md:w-auto md:h-[40vh] "></img>
        </div>
      </m.div>
      <m.div
        
        className="flex flex-col  md:items-end justify-center pb-12 md:pb-32 md:h-[40vh]"
        initial={{ opacity: 0, x: "200%" }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className=" text-4xl pb-12 text-orange-500 md:text-black md:text-8xl font-bold md:after:absolute md:after:content-[''] md:after:items-center md:after:mb-8 md:after:w-80 md:after:h-2 md:after:bottom-[24.5rem] md:after:right-64 md:after:mr-2 md:pr-48 after:bg-orange-500 md:pb-[5.3rem]  md:pl-60">
          Our Vision
        </div>
        <div className="flex md:flex-row flex-col  md:items-center md:w-5/6 text-lg  md:text-xl md:pr-20 leading-7 md:leading-relaxed md:gap-32 ">
          <img src={vision} className="hidden md:block"></img>
          <p className=" w-full mx-1 md:mx-0">
            Orinova's primary goal is to protect the environment and mitigate
            threats to biodiversity.The organization also emphasizes
            coordinating local and international efforts to manage shared
            natural resources using a commons approach.Integrating socioeconomic
            and ecological processes is a key aspect of their work, considering
            it vital for successful livelihoods.Promoting women's engagement in
            governance processes is another important focus, aimed at achieving
            gender parity.Additionally, Orinova aims to alleviate poverty and
            hunger, emphasizing the anticipation, prevention, and treatment of
            hunger.In conclusion, Orinova invites others to join their campaign
            to save lives, strengthen communities, protect nature, and transform
            the lives of millions of families and children worldwide.
          </p>
          <img src={vision} className=" md:hidden"></img>

        </div>
      </m.div>
      <m.div className=' my-20'>
        <div className='py-12 text-center text-7xl'>Our Team</div>
        <m.div
        ref={ref}
    
        variants={container}
        initial="hidden"
        animate={controls} 
    


         className='grid grid-cols-3 gap-y-8 mx-36 gap-x-4'> 
        <m.div
        variants={item} 
         className={content1?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
            setContent1(!content1)
        }} onMouseLeave={()=>{
            setContent1(!content1)
        }}>
          <img
            src={volunteer}
            alt=""
            className=" w-full h-[60vh] rounded-3xl"
          />
          <div className={ content1 ? "flex pb-8 flex-col ease-in-out duration-1000  items-center overflow-hidden -translate-y-[60%] z-20 bg-white": "flex pb-8 flex-col items-center overflow-hidden  z-20 bg-white"}>
            <div className="text-2xl font-Poppins font-semibold pt-5">
              John Doe
            </div>
            <div className=" text-gray-500"> Role</div>
            <div className=" pt-4 flex gap-4 ">
                <FaTwitter className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>
                <BiLogoLinkedin className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all" size={45}/>
                <AiFillInstagram className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>

             </div>
          </div>
        </m.div>
        <m.div 
        variants={item}
        className={content2?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh] rounded-3xl" } onMouseEnter={()=>{
            setContent2(!content2)
        }} onMouseLeave={()=>{
            setContent2(!content2)
        }}>
          <img
            src={volunteer}
            alt=""
            className=" w-full h-[60vh] rounded-3xl"
          />
          <div className={ content2 ? "flex pb-8 flex-col ease-in-out duration-1000  items-center overflow-hidden -translate-y-[60%] z-20 bg-white": "flex pb-8 flex-col items-center overflow-hidden  z-20 bg-white"}>
            <div className="text-2xl font-Poppins font-semibold pt-5">
              John Doe
            </div>
            <div className=" text-gray-500"> Role</div>
            <div className=" pt-4 flex gap-4 ">
                <FaTwitter className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>
                <BiLogoLinkedin className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all" size={45}/>
                <AiFillInstagram className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>

             </div>
          </div>
        </m.div>
        <m.div variants={item} className={content3?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
            setContent3(!content3)
        }} onMouseLeave={()=>{
            setContent3(!content3)
        }}>
          <img
            src={volunteer}
            alt=""
            className=" w-full h-[60vh] rounded-3xl"
          />
          <div className={ content3 ? "flex pb-8 flex-col ease-in-out duration-1000  items-center overflow-hidden -translate-y-[60%] z-20 bg-white": "flex pb-8 flex-col items-center overflow-hidden  z-20 bg-white"}>
            <div className="text-2xl font-Poppins font-semibold pt-5">
              John Doe
            </div>
            <div className=" text-gray-500"> Role</div>
            <div className=" pt-4 flex gap-4 ">
                <FaTwitter className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>
                <BiLogoLinkedin className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all" size={45}/>
                <AiFillInstagram className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>

             </div>
          </div>
        </m.div>
        <m.div variants={item} className={content4?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
            setContent4(!content4)
        }} onMouseLeave={()=>{
            setContent4(!content4)
        }}>
          <img
            src={volunteer}
            alt=""
            className=" w-full h-[60vh] rounded-3xl"
          />
          <div className={ content4 ? "flex pb-8 flex-col ease-in-out duration-1000  items-center overflow-hidden -translate-y-[60%] z-20 bg-white": "flex pb-8 flex-col items-center overflow-hidden  z-20 bg-white"}>
            <div className="text-2xl font-Poppins font-semibold pt-5">
              John Doe
            </div>
            <div className=" text-gray-500"> Role</div>
            <div className=" pt-4 flex gap-4 ">
                <FaTwitter className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>
                <BiLogoLinkedin className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all" size={45}/>
                <AiFillInstagram className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>

             </div>
          </div>
        </m.div>
        <m.div variants={item} className={content5?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
            setContent5(!content5)
        }} onMouseLeave={()=>{
            setContent5(!content5)
        }}>
          <img
            src={volunteer}
            alt=""
            className=" w-full h-[60vh] rounded-3xl"
          />
          <div className={ content5 ? "flex pb-8 flex-col ease-in-out duration-1000  items-center overflow-hidden -translate-y-[60%] z-20 bg-white": "flex pb-8 flex-col items-center overflow-hidden  z-20 bg-white"}>
            <div className="text-2xl font-Poppins font-semibold pt-5">
              John Doe
            </div>
            <div className=" text-gray-500"> Role</div>
            <div className=" pt-4 flex gap-4 ">
                <FaTwitter className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>
                <BiLogoLinkedin className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all" size={45}/>
                <AiFillInstagram className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>

             </div>
          </div>
        </m.div>
        <m.div variants={item} className={content6?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
            setContent6(!content6)
        }} onMouseLeave={()=>{
            setContent6(!content6)
        }}>
          <img
            src={volunteer}
            alt=""
            className=" w-full h-[60vh] rounded-3xl"
          />
          <div className={ content6 ? "flex pb-8 flex-col ease-in-out duration-1000  items-center overflow-hidden -translate-y-[60%] z-20 bg-white": "flex pb-8 flex-col items-center overflow-hidden  z-20 bg-white"}>
            <div className="text-2xl font-Poppins font-semibold pt-5">
              John Doe
            </div>
            <div className=" text-gray-500"> Role</div>
            <div className=" pt-4 flex gap-4 ">
                <FaTwitter className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>
                <BiLogoLinkedin className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all" size={45}/>
                <AiFillInstagram className="border-2 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all " size={45}/>

             </div>
          </div>
        </m.div>
        </m.div>
      </m.div>


      <div className="pt-20">
        <Footer />
      </div>
    </m.div>
  )
}

export default AboutOF
