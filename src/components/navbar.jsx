import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import {AiFillCloseCircle} from 'react-icons/ai'
import {motion as m} from "framer-motion"
import ngo from "../assets/ngo.png"


const Navbar = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div  className={`pb-4 bg-white border-b-[#09b6cb] border-b-4`}>
      <div className="flex  justify-around items-center pt-6 text-lg  ">
        <img
          src={ngo}
          className=" h-16 w-40 md:h-24 md:w-60 bg-contain object-cover bg-center"
        ></img>
        <div className=" pr-12 font-Poppins font-medium justify-evenly ml-6 text-black  ">
          <ul className="md:flex hidden list-none text-xl">
            <li className="pr-6 pl-3  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo">Home</Link>
            </li>
            <li className="pr-6 pl-3  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/about">About</Link>
            </li>
            <li
              className="pr-6 pl-3 transition-all ease-in "
              // onMouseEnter={() => setOpen((prev) => !prev)}
              // onMouseLeave={() => setOpen((prev) => !prev)}
            >
              <Link
                to="/ngo/goals"
                className=" flex justify-center items-center hover:text-orange-500 hover:transition-all ease-in-out cursor-pointer"
              >
                <p> Goals</p>
                {/* { !open?
            (<IoMdArrowDropdown className="pb-1 " size={30}></IoMdArrowDropdown>) :(<IoMdArrowDropup className="pb-1 " size={30}></IoMdArrowDropup>) */}
              </Link>
              {/* { open &&
          <div className=" z-50 bg-white absolute mx-2 transition-all ease-in-out delay-500" >
            <ul className="">
              <li className="hover:text-orange-500 transition-all ease-in-out pt-1 px-2"> <Link to="/ngo/services">service</Link></li>
              <li className="hover:text-orange-500 transition-all ease-in-out  pt-1 px-2"><Link to="/ngo/services">service</Link></li>
              <li className="hover:text-orange-500 transition-all ease-in-out pt-1 px-2"><Link to="/ngo/services">service</Link></li>
              <li className="hover:text-orange-500 transition-all ease-in-out  pt-1 px-2"><Link to="/ngo/services">service</Link></li>

            </ul>
          </div>} */}
            </li>
            <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/events">Events</Link>
            </li>
            <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/contact">Contact</Link>
            </li>
            <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/news">NewsRoom</Link>
              
            </li>
            <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/gallery">Gallery</Link>
            </li>
            <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/blogs">Blogs</Link>
            </li>
          </ul>
        </div>



        

        {/* <div className=" md:text-center md:pr-2 md:border-2 md:py-2 md:rounded-lg md:border-orange-500 md:hover:bg-transparent md:text-white  md:hover:border-orange-500 md:hover:text-orange-500 md:bg-orange-500 md:transition md:delay-100 md:ease-in">
          <button className=" text-center">
            <Link to="/ngo/donations" className="  md:py-4 md:px-5 md:font-medium  ">
              Donate Now
            </Link>
          </button>
        </div> */}
        <div className=" md:hidden" onClick={()=>{
          setOpen(!open)
        }}> <TbGridDots className="" size={40}/></div>
        
      </div>
      {/* navbar for sm screens  */}



      <div className={ open ?` bg-white w-full h-[60vh]  ease-in-out duration-500 z-50 absolute top-0 left-0`:'left-[-100%] fixed trans'}>
          <div className="flex justify-center pt-12">
          <ul className=" list-none">
        <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo">Home</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/about">About</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/goals">Goals</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/events">Events</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/ngo/contact">Contact</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
          <button className=" text-center">
            <Link to="/ngo/donations" className="  md:py-4 md:px-5 md:font-medium  ">
              Donate Now
            </Link>
          </button>
        </li>
            </ul>
            <AiFillCloseCircle className="absolute top-2 right-2" onClick={()=>{
              setOpen(!open)
            }} size={30}/>
            </div>

        </div>
        {/* navbar for sm screens finished */}
    </div>
  );
};

export default Navbar;
