import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import{IoMdMail} from "react-icons/io"
import { FaTwitter } from "react-icons/fa";
import {BiLogoLinkedin} from "react-icons/bi"
import ngo from "../assets/ngo.png";
import {Link} from "react-router-dom"



const Footer = () => {
  return (
    <div className=" bg-neutral-200   text-slate-200 font-Poppins pb-12">
      <div className="md:mx-40 mx-8   flex  justify-between">
        <img className=" md:h-60 h-40  "  src={ngo}></img>
        <div className="md:mt-24 md:mr-12 mt-16   ">
          <button className=" md:py-2 md:px-8 px-4 py-2 border-2 text-white rounded-lg hover:text-orange-500  border-orange-500 font-medium bg-orange-500  hover:bg-transparent transition-all delay-100 ease-in-out ">
            Donate Now
          </button>
        </div>
      </div>
      <div className=" grid md:mx-40 gap-12 md:grid-cols-4 justify-center  list-none text-slate-950">
        
        <li>
          <div className="text-orange-500 text-2xl font-medium  ">About</div>
          <p>
          Orinova Foundation, is an influential NGO that aims to build a just and
            equitable society where everyone can live with dignity and in good
            health
          </p>
          <div className="flex text-2xl gap-6 pt-6 md:pb-0 mb-8 ">
              <ImFacebook className="hover:text-[#09b6cb] transition ease-in-out delay-100"></ImFacebook>
              <FaTwitter className="hover:text-[#09b6cb] transition ease-in-out delay-100"></FaTwitter>
              <AiFillInstagram className="hover:text-[#09b6cb] transition ease-in-out delay-100"></AiFillInstagram>
              <BiLogoLinkedin className="hover:text-[#09b6cb] transition ease-in-out delay-100"></BiLogoLinkedin>
            </div>
        </li>
        <li>
          <div className="list-disc md:pl-12">
            <div className="text-orange-500 text-2xl font-medium ">Quick Links</div>
            <ul>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link to='/AboutOF' > About Us</Link></li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link to='/NewsRoom' > Latest News</Link></li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link to='/Contact' > Contact Us</Link></li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link to='/Blogs' >Blogs</Link> </li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link to='/Causes' >Causes</Link> </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <div className="text-orange-500 text-2xl font-medium">Get Involved</div>
            <ul>
              <li className="pt-4 hover:text-[#09b6cb] transition ease-in-out delay-100">Donate Now</li>
              <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100">Become a Volunteer</li>
              <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100">Become a Partner</li>
            </ul>
           
          </div>
        </li>


        <li>
          <div className="text-orange-500 text-2xl font-medium">Contact Us</div>
          <p>
          301 , Siddhi vinayak Apartment, Yarpur Khagul Road, Yarpur, Patna -800001
          </p>
          <div className="flex gap-4 flex-col pt-6">
            <div className="flex"><BsFillTelephoneFill className="text-xl"></BsFillTelephoneFill>
            <div className="pl-2">9152898940</div>
            </div>
            <div className="flex"><BsFillTelephoneFill className="text-xl"></BsFillTelephoneFill>
            <div className="pl-2"> 8210400672</div>
            </div>
          </div>
          <div className="flex pt-6">
            <IoMdMail  className="text-xl"></IoMdMail>
           
            <div className="pl-2"> ngo@gmail.com</div>


          </div>
        </li>
       
      </div>
    </div>
  );
};

export default Footer;
