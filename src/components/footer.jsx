import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import{IoMdMail} from "react-icons/io"
import { FaTwitter } from "react-icons/fa";
import {BiLogoLinkedin} from "react-icons/bi"
import logo from "../assets/logo.png";



const Footer = () => {
  return (
    <div className=" bg-neutral-900 text-slate-200 font-Poppins pb-4">
      <div className="ml-60 pb-12  pt-12 flex justify-between">
        <img className=" h-32 w-60"  src={logo}></img>
        <div className="mt-6 mr-12   ">
          <button className=" py-2 px-8 border-2 text-white  hover:text-orange-500  border-orange-500 font-medium bg-orange-500  hover:bg-white transition-all delay-100 ease-in-out ">
            Donate Now
          </button>
        </div>
      </div>
      <div className=" grid ml-60 gap-4 grid-cols-4 justify-items-center list-none">
        <li>
          <div className="text-orange-500 text-xl font-medium  ">About</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            minus eius explicabo debitis sapiente! Aliquid eveniet aliquam
            recusandae nostrum eligendi corrupti, quasi veritatis obcaecati esse
            suscipit eum ad, fugit ullam.
          </p>
        </li>
        <li>
          <div className="list-disc">
            <div className="text-orange-500 text-xl font-medium ">Services</div>
            <li className="pt-2">service 1</li>
            <li className="pt-2">service 2</li>
            <li className="pt-2">service 3</li>
            <li className="pt-2">service 4</li>
            <li className="pt-2">service 5</li>
          </div>
        </li>

        <li>
          <div className="text-orange-500 text-xl font-medium">Contact Us</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga
            reiciendis? Optio perferendis totam omnis ullam molestiae adipisci
            quis nam!
          </p>
          <div className="flex pt-6">
            <BsFillTelephoneFill className="text-xl"></BsFillTelephoneFill>
            <div className="ml-2">+000000000</div>
          </div>
          <div className="flex pt-6">
            <IoMdMail  className="text-xl"></IoMdMail>
           
            <div className="ml-2"> ngo@gmail.com</div>


          </div>
        </li>
        <li>
          <div>
            <div className="text-orange-500 text-lg font-medium"> Follow Us at</div>
            <div className="flex text-2xl gap-6 pt-6 ">
              <ImFacebook className="hover:text-orange-500"></ImFacebook>
              <FaTwitter className="hover:text-orange-500"></FaTwitter>
              <AiFillInstagram className="hover:text-orange-500"></AiFillInstagram>
              <BiLogoLinkedin className="hover:text-orange-500"></BiLogoLinkedin>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Footer;
