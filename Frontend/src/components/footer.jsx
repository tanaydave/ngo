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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            minus eius explicabo debitis sapiente! Aliquid eveniet aliquam
            recusandae nostrum eligendi corrupti, quasi veritatis obcaecati esse
            suscipit eum ad, fugit ullam.
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
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link> Mission and Vision</Link></li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link> Latest News</Link></li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link> Contact Us</Link></li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link>Blogs</Link> </li>
            <li className="pt-2 hover:text-[#09b6cb] transition ease-in-out delay-100"><Link>Goals</Link> </li>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga
            reiciendis? Optio perferendis totam omnis ullam molestiae adipisci
            quis nam!
          </p>
          <div className="flex pt-6">
            <BsFillTelephoneFill className="text-xl"></BsFillTelephoneFill>
            <div className="pl-2">+000000000</div>
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