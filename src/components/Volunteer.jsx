import { useState } from "react";
import React from "react";
import { motion as m } from "framer-motion";
import volunteer from "../assets/volunteer.jpg";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {BiLogoLinkedin} from "react-icons/bi"

const Volunteer = () => {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);



  return (
    <m.div className="pt-12 pb-20 flex flex-col gap-8 items-center">
      <div className="text-[#09b6cb] text-lg italic"> Meet Our Team</div>
      <div className="text-6xl font-[Yeseva-One] font-bold"> Our Volunteer</div>
      <div className="flex gap-6 mt-8">
        <div className={content1?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
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
        </div>
        <div className={content2?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh] rounded-3xl" } onMouseEnter={()=>{
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
        </div>
        <div className={content3?" shadow-2xl overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl": " overflow-hidden w-[25rem]  h-[70vh]  rounded-3xl" } onMouseEnter={()=>{
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
        </div>
      </div>
    </m.div>
  );
};

export default Volunteer;
