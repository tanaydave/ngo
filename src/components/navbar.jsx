import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import {AiFillCloseCircle} from 'react-icons/ai'
import {motion as m} from "framer-motion"
import ngo from "../assets/ngo.png"
import {AiOutlineMenu} from "react-icons/ai"
import{IoMdMail} from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs";
import {BsFillCartFill} from "react-icons/bs"
const navs= ['Home','About','Causes','Events','Contact','NewsRoom','Gallery','Blogs']



const Navbar = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [openDrop1, setOpenDrop1] = useState(false);
  const [openDrop2, setOpenDrop2] = useState(false);
  const [openDrop3, setOpenDrop3] = useState(false);

  const pathname = useLocation();
  const path = pathname.pathname
  // console.log(path)
  
  return (
    <div  className=" bg-white border-b-[#09b6cb] border-b-4 ">
      <div className="h-12 bg-sky-950 text-gray-300 flex justify-end px-20 gap-12 py-3">
        <div className="flex justify-center items-center gap-2"> <IoMdMail  className="text-xl text-orange-500"></IoMdMail> <div>gmail@gmail.com</div></div>
            
        <div className="flex justify-center items-center gap-2"> <BsFillTelephoneFill className="text-xl text-orange-500"></BsFillTelephoneFill> <div>9999999999</div></div>

      </div>
      <div className="flex  justify-around items-center py-4 text-lg  ">
        <Link  to="/"><img
          src={ngo}
          className=" h-16 w-40 lg:h-24 lg:w-[13rem] xl:w-[18rem]  2xl:h-24 2xl:w-[19rem]  bg-contain object-cover bg-center"
        ></img></Link>
        <div className=" pr-12 font-Titillium font-semibold   justify-evenly ml-6 text-black  ">
          <ul className="md:flex lg:gap-x-3 xl:gap-4 2xl:gap-0 md:items-center  hidden list-none text-sm">
            <li className="relative after:content-[''] pb-2 after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/')? "change":""} to="/">Home</Link>
            </li>
            <li className="relative after:content-[''] pb-2 after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Causes')? "change":""} to="/Causes">Causes</Link>
            </li>
            {/* <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Causes')? "change":""} to="/Causes">Our Purpose</Link>
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Causes')? "change":""} to="/Causes">Our Programs</Link>
            </li>
            <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/About')? "change":""} to="/About">About</Link>
            </li> */}
            <li
              className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 transition-all ease-in "
              onMouseEnter={() => setOpenDrop1((prev) => !prev)}
              onMouseLeave={() => setOpenDrop1((prev) => !prev)}
            >
              <Link
                
                className=" flex"
              >
                <p className={(path=== '/Events' || path==='/Blog' || path==='/NewsRoom')? "change":""}>Our Program</p>
                { !openDrop1?
            (<IoMdArrowDropdown className="pb-1 " size={28}></IoMdArrowDropdown>) :(<IoMdArrowDropup className="pb-1 " size={28}></IoMdArrowDropup>)}
              </Link>
              { openDrop1 &&
          <div className=" z-50   bg-white absolute   transition-all ease-in-out delay-500" >
           <div className="flex flex-col w-40 justify-center relative bg-white  text-base">
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Skill Development</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Adult Education</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Health Care</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Environment Protection</Link></div>


           </div>
          </div>
          }
            </li>
            <li
              className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 transition-all ease-in "
              onMouseEnter={() => setOpenDrop2((prev) => !prev)}
              onMouseLeave={() => setOpenDrop2((prev) => !prev)}
            >
              <Link
                
                className=" flex"
              >
                <p className={(path=== '/Events' || path==='/Blog' || path==='/NewsRoom')? "change":""}>Our Purpose</p>
                { !openDrop2?
            (<IoMdArrowDropdown className="pb-1 " size={28}></IoMdArrowDropdown>) :(<IoMdArrowDropup className="pb-1 " size={28}></IoMdArrowDropup>)}
              </Link>
              { openDrop2 &&
          <div className=" z-50   bg-white absolute   transition-all ease-in-out delay-500" >
           <div className="flex flex-col w-40 justify-center relative bg-white  text-base">
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Educate the Future</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Adult Education</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Women & Child Welfare</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/'>Skill Development</Link></div>


           </div>
          </div>
          }
            </li>
            <li
              className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 transition-all ease-in "
              onMouseEnter={() => setOpenDrop3((prev) => !prev)}
              onMouseLeave={() => setOpenDrop3((prev) => !prev)}
            >
              <Link
                
                className=" flex"
              >
                <p className={(path=== '/Events' || path==='/Blog' || path==='/NewsRoom')? "change":""}>About Us</p>
                { !openDrop3?
            (<IoMdArrowDropdown className="pb-1 " size={28}></IoMdArrowDropdown>) :(<IoMdArrowDropup className="pb-1 " size={28}></IoMdArrowDropup>)}
              </Link>
              { openDrop3 &&
          <div className=" z-50   bg-white absolute   transition-all ease-in-out delay-500" >
           <div className="flex flex-col w-40 justify-center relative bg-white  text-base">
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/AboutOF'>About OF</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/NewsRoom'>Our Financials</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/BLogs'>Awards and Approvals</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/Events'>Annual Reports</Link></div>


           </div>
          </div>
          }
            </li>
            <li
              className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3 transition-all ease-in "
              onMouseEnter={() => setOpenDrop((prev) => !prev)}
              onMouseLeave={() => setOpenDrop((prev) => !prev)}
            >
              <Link
                
                className=" flex"
              >
                <p className={(path=== '/Events' || path==='/Blog' || path==='/NewsRoom')? "change":""}>Events & NewsLetter</p>
                { !openDrop?
            (<IoMdArrowDropdown className="pb-1 " size={28}></IoMdArrowDropdown>) :(<IoMdArrowDropup className="pb-1 " size={28}></IoMdArrowDropup>)}
              </Link>
              { openDrop &&
          <div className=" z-50   bg-white absolute   transition-all ease-in-out delay-500" >
           <div className="flex flex-col w-40 justify-center relative bg-white  text-base">
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/Events'>Our Events</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/NewsRoom'>News And Press Release</Link></div>
            <div className="border-b-2 px-4 py-2 hover:bg-orange-500 hover:text-white transition-all duration-500"><Link to='/BLogs'>Our Blogs</Link></div>


           </div>
          </div>
          }
            </li>
            {/* <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Events')? "change":""} to="/Events">Events</Link>
            </li> */}
            
            {/* <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/NewsRoom')? "change":""} to="/NewsRoom">NewsRoom</Link>
              
            </li> */}
            <li className="relative after:content-[''] after:block after:h-[4px] pb-2 after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Gallery')? "change":""} to="/Gallery">Gallery</Link>
            </li>
            {/* <li className="relative after:content-[''] after:block after:h-[4px] after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100 pr-6 pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Blogs')? "change":""} to="/Blogs">Blogs</Link>
            </li> */}
            <li className="relative after:content-[''] after:block after:h-[4px] pb-2 after:w-[100%] after:bg-orange-400 after:scale-x-0 after:origin-left after:ease-in-out after:duration-300 after:hover:scale-x-100  2xl:pr-6 2xl:pl-3  transition-all delay-100 ease-in cursor-pointer">
              <Link className={(path=== '/Contact')? "change":""} to="/Contact">Contact</Link>
            </li>
            <li className="mb-4">
           <Link className="hover:text-orange-500 transition-all"> <BsFillCartFill size={20}/></Link>
            </li>
            <li>
            <Link to='/Donations'><button className=" md:py-2 md:mb-4 2xl:ml-6 lg:px-1 2xl:px-6  px-4 py-2 border-2 text-white rounded-2xl hover:text-orange-500  border-orange-500 font-medium bg-orange-500  hover:bg-transparent transition-all delay-100 ease-in-out ">
            Donate Now
          </button></Link>
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
