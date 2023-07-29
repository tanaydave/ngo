import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import {AiFillCloseCircle} from 'react-icons/ai'
import {motion as m} from "framer-motion"
import ngo from "../assets/ngo.png"
import {AiOutlineMenu} from "react-icons/ai"
const navs= ['Home','About','Causes','Events','Contact','NewsRoom','Gallery','Blogs']



const Navbar = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const pathname = useLocation();
  const path = pathname.pathname
  console.log(path)
  
  return (
    <div  className=" bg-white border-b-[#09b6cb] border-b-4 ">
      <div className="flex  justify-around items-center pt-6 text-lg  ">
        <Link  to="/"><img
          src={ngo}
          className=" h-16 w-40 md:h-24 md:w-60 bg-contain object-cover bg-center"
        ></img></Link>
        <div className=" pr-12 font-Titillium font-medium justify-evenly ml-6 text-black  ">
          <ul className="md:flex hidden list-none text-xl">
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/')? "change":""} to="/">Home</Link>
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/About')? "change":""} to="/About">About</Link>
            </li>
            <li
              className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3 transition-all ease-in "
              // onMouseEnter={() => setOpen((prev) => !prev)}
              // onMouseLeave={() => setOpen((prev) => !prev)}
            >
              <Link
                to="/Causes"
                className=" relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 flex justify-center items-center  hover:transition-all ease-in-out cursor-pointer"
              >
                <p className={(path=== '/Causes')? "change":""}>Causes</p>
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
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Events')? "change":""} to="/Events">Events</Link>
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Contact')? "change":""} to="/Contact">Contact</Link>
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/NewsRoom')? "change":""} to="/NewsRoom">NewsRoom</Link>
              
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Gallery')? "change":""} to="/Gallery">Gallery</Link>
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Blogs')? "change":""} to="/Blogs">Blogs</Link>
            </li>
          </ul>
          {/* <ul className="md:flex hidden list-none text-xl">
            {
              navs.map((nav)=>{
                return(
                  <li className="pr-6 pl-3  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/">Home</Link>
            </li>
                )
              })
            }


          </ul> */}


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
        }}> <AiOutlineMenu className="" size={40}/></div>
        
      </div>
      {/* navbar for sm screens  */}



      <div className={ open ?` bg-white w-full h-[60vh]  ease-in-out duration-500 z-50 absolute top-0 left-0`:'left-[-100%] fixed trans'}>
          <div className="flex justify-center pt-4 ">
          <ul className=" list-none">
        <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/About">About</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/Causes">Causes</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/Events">Events</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link to="/NewsRoom">NewsRoom</Link>
              
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
              <Link  to="/Gallery">Gallery</Link>
            </li>
            <li className="p-4  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
          <button className=" text-center">
            <Link to="/donations" className="  md:py-4 md:px-5 md:font-medium  ">
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
