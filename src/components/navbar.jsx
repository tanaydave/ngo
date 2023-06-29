import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";




const Navbar = () => {

  const [open,setOpen]= useState(false)
  return (
    <div className=" pb-4  ">
      <div className="flex justify-around items-center pt-6 text-lg">
        <img src={logo} className="h-24 w-60 bg-contain object-cover bg-center">
        </img>
        <div className=" pr-12 font-Poppins font-medium justify-evenly ml-6 text-gray-600">
          <ul className="flex list-none">
        <li className="pr-6 pl-3  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer" ><Link to="/ngo">Home</Link></li>
        <li  className="pr-6 pl-3  hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer" ><Link to="/ngo/about">About</Link></li>
        <li className="pr-6 pl-3" >
          <Link  onMouseEnter={()=>setOpen((prev) => (!prev)) }   className=" flex justify-center items-center hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">
           <p> Services</p>
            { !open?
            (<IoMdArrowDropdown className="pb-1 " size={30}></IoMdArrowDropdown>) :(<IoMdArrowDropup className="pb-1 " size={30}></IoMdArrowDropup>)

}
            </Link>
           { open &&
          <div className=" z-50 bg-white absolute mx-2" onMouseLeave={()=>setOpen((prev) => (!prev)) } >
            <ul className="">
              <li className="hover:bg-slate-200 transition-all ease-in-out delay-100 pt-1 px-2"> <Link to="/ngo/services">service</Link></li>
              <li className="hover:bg-slate-200 transition-all ease-in-out delay-100 pt-1 px-2"><Link to="/ngo/services">service</Link></li>
              <li className="hover:bg-slate-200 transition-all ease-in-out delay-100 pt-1 px-2"><Link to="/ngo/services">service</Link></li>
              <li className="hover:bg-slate-200 transition-all ease-in-out delay-100 pt-1 px-2"><Link to="/ngo/services">service</Link></li>

            </ul>
          </div>}



          
          </li>
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer"><Link to="/ngo/events">Events</Link></li>
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer"><Link to="/ngo/contact">Contact</Link></li>
        </ul>

        </div>
        <div className="pr-2 border-2 border-orange-500 hover:bg-transparent text-white  hover:border-orange-500 hover:text-orange-500 bg-orange-500 transition delay-100 ease-in" >
          <button className=" py-2 px-5 font-medium text-xl  ">Donate Now</button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
