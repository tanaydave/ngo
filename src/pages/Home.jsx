import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import home from "../assets/home.jpg";
import misvis from "../assets/misvis.jpg";
import logo from "../assets/logo.png";
import team from "../assets/team.jpg";
import { delay, motion as m, AnimatePresence } from "framer-motion";
import Counter from "../components/Counter";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PiTargetLight } from "react-icons/pi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../assets/carousel1.jpg";
import volunteer from "../assets/volunteer.jpg";
import partner from "../assets/partner.jpg";
import { Link } from "react-router-dom";
import offwhite from '../assets/offwhite.jpeg'
import {lazy,Suspense} from "react"


import Slider from "react-slick";

import Volunteer from "../components/Volunteer";
import HomeEvents from "../components/HomeEvents";
const Campaigns = lazy(()=>import( "../components/Campaigns"));

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const Home = () => {
  // used in carousel
  // const [curr, setCurr] = useState(0);
  // const prev = () =>
  //   setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  // const next = () =>
  //   setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  // const [transparent, setTransparent] = useState("bg-transparent");
  // const addBg = () => {
  //   if (window.scrollY >= 10) {
  //     setTransparent("bg-slate-200");
  //   } else {
  //     setTransparent("bg-transparent");
  //   }
  // };
  // window.addEventListener("scroll", addBg);

  const nums = [1, 1, 1];

  // counter function
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const counting = (limit) => {
    {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const interval = setInterval(() => {
                setCount((prevCount) => {
                  if (prevCount >= limit) {
                    clearInterval(interval);
                    return prevCount;
                  }
                  return prevCount + 1;
                });
              }, 200);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }
  };

  useEffect(counting, [count]);
  const images = [1, 1, 1, 1];
  const carImgs = [
    {
      id: 1,
      tagline:
        "It is not how much we give but how much love we put into giving",
      button: "Donate Now",
      img: carousel1,
    },
    {
      id: 2,
      tagline:
        "It is not how much we give but how much love we put into giving",
      button: "Become a Volunteer",
      img: volunteer,
    },
    {
      id: 3,
      tagline:
        "It is not how much we give but how much love we put into giving",
      button: "Become a Partner",
      img: partner,
    },
  ];

  // carousel function
  const renderSlides = () =>
    carImgs.map((image) => (
      <m.div className="text-center relative left-0 overflow-hidden bg-black ">
        <div className=" opacity-50"><img
          src={image.img}
          alt=""
          className="h-[80vh] w-[100vw] object-cover bg-black z-10 on hover:scale-110 duration-[5s]"
        /></div>
        <div className="absolute flex flex-col items-center gap-12 w-[50vw]   transform -translate-x-2/4 -translate-y-2/4 top-[45vh] left-1/2">
          <div className="text-5xl text-white font-semibold drop-shadow-2xl shadow-black">
            {image.tagline}
          </div>
          <button className=" font-semibold border-2 py-3 px-4 rounded-full ring-1 ring-amber-700 border-orange-500 hover:bg-transparent text-white  hover:border-orange-500 hover:text-orange-500 bg-orange-500 transition delay-100 ease-in text-xl">
            {image.button}
          </button>
        </div>
      </m.div>
    ));

  return (
    <m.div className=" font-Titillium pb-12">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="  transition-all ease-in z-50"
        //removed sticky and top-0
      >
        <Navbar />
      </m.div>
      {/* navbar finished */}

      {/* hero started */}
      {/* <div
        className="p-0 h-[80vh]   bg-cover object-cover bg-center "
        style={{
          backgroundImage: `url(${misvis})`,
        }}
      >
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-white absolute shadow-black drop-shadow-2xl flex flex-col transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 font-semibold"
        >
          <m.div className="text-xl  ">
            It is not how much we give but how much love we put into giving
          </m.div>
          <div className="text-white pt-4 flex justify-center gap-8">
            <button className=" bg-orange-500 ring-1 ring-amber-700 text-white border-2 rounded-lg border-orange-500 p-2 ">
              {" "}
              Become a Volunteer
            </button>
            <button className="border-2 p-2 rounded-lg ring-1 ring-amber-700 border-orange-500 hover:bg-transparent text-white  hover:border-orange-500 hover:text-orange-500 bg-orange-500 transition delay-100 ease-in">
              Contribute for a cause
            </button>
          </div>
        </m.div>
      </div> */}
      {/* carousel  */}

      <div className=" w-[98.9vw] ">
        <Slider
          dots={true}
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplaySpeed={4000}
          infinite={true}
          arrows={false}
        >
          {renderSlides()}
        </Slider>
      </div>

      {/* hero finished */}

      {/* get involved started  */}
      {/* get involved finished   */}

      {/* who we are started  */}
      <m.div className=" py-12 mt-10 bg-slate-200 "
      whileInView={{scale:1,opacity:1}}
      transition={{duration:1,ease:"easeInOut"}}
      initial={{scale:0,opacity:0}}>
        {/* who we are started */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=" text-2xl font-medium font-Poppins md:pl-8 md:text-4xl w-[90vw]  pt-8 md:ml-16 ml-6 text-[#09b6cb]"
        >
          Who We Are
        </m.div>
        <m.div className="my-8 py-8 md:w-[90vw] w-[90vw] ml-4 pl-4 bg-orange-500 md:mx-16  text-white">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col items-center  "
          >
            {/* <m.div className=" bg-white text-6xl py-8 ml-16 underline underline-offset-8 text-[#09b6cb]">
              Who We Are
            </m.div> */}
            <div className=" md:leading-9 pt-2 sm:text-base sm:pl-6 md:text-xl md:mx-20">
            Founded with an unwavering commitment to catalyzing positive change, Orinova Foundation is a non-profit, non-governmental organisation that stands as a beacon of hope and progress. Our inception in [Year of Establishment] marked the dawn of a transformative journey aimed at uplifting marginalized communities and nurturing a sense of shared responsibility for the planet we call home.
            </div>
          </m.div>
        </m.div>
      </m.div>
      {/* who we are finished  */}

      {/* events started */}

      
      {/* events finished */}

      {/* campaign started  */}
      {/* <m.div
      
        initial={{ opacity: 1,scale:1,y:"-100%" }}
        viewport={{once:true}}
        whileInView={{ opacity: 1,scale:1,}}
        animate={{y:0}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="py-16 "
      >
        <div className="flex flex-col items-center">
          <p className="md:text-6xl font-extrabold md:py-6 font-[Yeseva-One]">Current Campaigns</p>
          <div className="flex gap-8 justify-center px-12">
            <div className="w-[22vw]   h-[72vh] hover:shadow-2xl border-2 rounded-3xl  overflow-hidden">
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
                <button className="border-2 rounded-full p-3 mt-2 w-32 hover:text-white hover:bg-orange-500 transition">
                  Read More
                </button>
               
                
              </div>
            </div>
            <div className="w-[22vw] hover:shadow-2xl border-2 h-[72vh]    rounded-3xl  overflow-hidden">
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
                <button className="border-2 rounded-full p-3 mt-2 w-32 hover:text-white hover:bg-orange-500 transition">
                  Read More
                </button>
               
                
              </div>
            </div>
            <div className="w-[22vw]   h-[72vh] hover:shadow-2xl border-2 rounded-3xl  overflow-hidden">
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
                <button className="border-2 rounded-full p-3 mt-2 w-32 hover:text-white hover:bg-orange-500 transition">
                  Read More
                </button>
               
                
              </div>
            </div>
          </div>
        </div>
      </m.div> */}
      <Suspense>
      <Campaigns/>
      </Suspense>
      {/* campaign finished  */}

      

      {/* blog started  */}
      {/* <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="pb-16 pt-8  "

      >
        <div className=" md:pl-8 font-medium text-2xl md:text-4xl font-Poppins w-[90vw]  pt-8 md:ml-16 ml-6  text-[#09b6cb]">
          Latest Blog
        </div>

        <div className="md:grid md:grid-cols-5 md:gap-2 md:justify-center md:w-[80vw]  md:mx-10  md:rounded-lg  md:mt-4">
          <div className=" col-span-2 overflow-hidden  h-[40vh] mt-12 rounded-lg  flex items-center ">
            {" "}
            <img
              src={misvis}
              alt=""
              className="h-[40vh]  transition duration-[2s] rounded-lg  ease-in-out  hover:scale-110 overflow-hidden"
            />
          </div>
          <div className=" md:col-span-2 pl-4 md:pl-0">
            <div className="flex flex-col pt-8 gap-6 border-r-4 border-r-orange-500  md:h-[50vh]  pl-4  mt-[2rem] ]">
              <p className=" text-3xl">title</p>
              <p className="">date</p>
              <p className=" ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur delectus at voluptate? Repellat, odio pariatur. Minima aspernatur labore tempora quod ipsum laborum molestiae incidunt eius culpa, veniam debitis aperiam.
              </p>
              <p>
                <button className="bg-orange-500 rounded-md p-2 hover:bg-transparent hover:text-orange-500 transition-all hover:font-medium border-2 border-orange-500">
                 <Link to="/Blogs"> read more</Link>
                </button>
              </p>
            </div>
          </div>
          <div className=" hidden md:pt-2 md:flex md:flex-col md:items-start md:justify-center md:gap-6 ">
            {nums.map(() => {
              return (
                <div className="grid grid-cols-3 gap-2 border-4 rounded-lg w-[25rem] duration-500 hover:scale-[1.02] bg-slate-200">
                  <div className="col-span-1">
                    <img src={misvis} alt="" className="pt-3 pl-3 h-32" />
                  </div>
                  <div className="col-span-2 flex gap-2 flex-col text-sm">
                    <div>date</div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Blanditiis nostrum officiis nisi corrupti, accusamus sit
                      laboriosam illum quo alias sunt!
                    </div>
                    <div>
                      <button className="text-orange-500 ">read more</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" text-center pt-8 md:hidden">
            <button className=" border-2 border-orange-500 text-orange-500 p-4 rounded-2xl"><Link to ='blogs' >View all Blogs</Link></button>
          </div>
        </div>
      </m.div> */}
      {/* <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" "
      >
        new blog section
      </m.div> */}

      {/* blog finished */}

      {/*  Gallery started  */}
      {/* <m.div

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="pb-16 pt-8 px-12"
      >
        <div className=" pt-12 md:pl-8  text-2xl md:text-4xl text-orange-500 font-semibold   w-[90vw] pb-1 ml-6 md:ml-16">
         <p className=" font-medium font-Poppins">Gallery</p> {" "}
          {" "}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-2 py-4 md:mx-12 justify-between relative">
          {images.map(()=>{
            return(
              <div className=" relative">
                <img src={misvis} alt="" className=" md:h-auto md:w-full h-40" />
                <m.div  className=" absolute flex flex-col items-center justify-end  top-0 md:h-full gap-3  duration-500 transition  md:w-full md:-[0.1rem]  bg-black text-orange-500 opacity-0 hover:opacity-80 "> 
                <div className="font-semibold text-center text-xs pt-2 h-20">event details Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div><button className="border-2 duration-100 ease-in rounded-lg border-orange-500 mb-4 p-1 mt-4 md:p-2 bg-orange-500 hover:bg-transparent hover:text-orange  text-white"> <Link to="/ngo/gallery">Gallery</Link> </button></div>
                </m.div>
              </div>
            )
          }
            
              
            )
          }
          
        </div>
      </m.div> */}
      {/*  Galleryfinished */}
     
     {/* testimonials  */}
      {/* <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" bg-[#faede7] font-Libre  mx-12 my-8 "
      >
        <div className="flex flex-col items-center pb-12">
        <div className="py-12 text-4xl w-80 text-center font-Libre font-semibold"> What People Say About Us</div>
        <div className="flex justify-center gap-4">
          <div className="flex flex-col w-[18vw] bg-white transition-all border-2 hover:border-black rounded-xl p-4 gap-6">
            <p className="text-sm pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, earum. Aspernatur mollitia suscipit, iste ad nihil maxime quod vitae expedita.</p>
            <div className="flex justify-center gap-6 pb-4">
              <img src={misvis} alt=""  className="rounded-full h-[4.5rem] w-[4.5rem]"/>
              <div className="flex flex-col pt-2">
                <div className="font-semibold">john doe</div>
                <div className="text-sm">Donor</div>
                </div>
            </div>
          </div>
          <div className="flex flex-col w-[18vw] bg-white transition-all border-2 hover:border-black rounded-xl p-4 gap-6">
            <p className="text-sm pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, earum. Aspernatur mollitia suscipit, iste ad nihil maxime quod vitae expedita.</p>
            <div className="flex justify-center gap-6 pb-4">
              <img src={misvis} alt=""  className="rounded-full h-[4.5rem] w-[4.5rem]"/>
              <div className="flex flex-col pt-2">
                <div className="font-semibold">john doe</div>
                <div className="text-sm">Donor</div>
                </div>
            </div>
          </div>
          <div className="flex flex-col w-[18vw] bg-white transition-all border-2 hover:border-black rounded-xl p-4 gap-6">
            <p className="text-sm pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, earum. Aspernatur mollitia suscipit, iste ad nihil maxime quod vitae expedita.</p>
            <div className="flex justify-center gap-6 pb-4">
              <img src={misvis} alt=""  className="rounded-full h-[4.5rem] w-[4.5rem]"/>
              <div className="flex flex-col pt-2">
                <div className="font-semibold">john doe</div>
                <div className="text-sm">Donor</div>
                </div>
            </div>

          </div>
          <div className="flex flex-col w-[18vw] bg-white transition-all border-2 hover:border-black rounded-xl p-4 gap-6">
            <p className="text-sm pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, earum. Aspernatur mollitia suscipit, iste ad nihil maxime quod vitae expedita.</p>
            <div className="flex justify-center gap-6 pb-4">
              <img src={misvis} alt=""  className="rounded-full h-[4.5rem] w-[4.5rem]"/>
              <div className="flex flex-col pt-2">
                <div className="font-semibold">john doe</div>
                <div className="text-sm">Donor</div>
                </div>
            </div>

          </div>

          


        </div>
        <p className="py-8 text-2xl">Trusted By More Than 500 donors !</p>

        </div>
      </m.div> */}
      {/* mission  */}
      <m.div 
      className="flex h-[65vh] items-center w-full overflow-hidden mt-8 gap-24 px-20 justify-center">
        
          <div className="flex flex-col gap-12">
            <div className="text-6xl font-[Yeseva-One] font-extrabold">Our Mission.</div>
            <div className="w-[31rem] font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis reprehenderit asperiores nisi aliquam laudantium porro et, amet ratione quis sapiente dolorem adipisci unde ex laboriosam odit officia iusto aspernatur.</div>
            <div><button className="py-5 px-10 rounded-full bg-orange-500 transition-all transform origin-left hover:bg-blue-950 text-white font-semibold">Read More</button></div>


          </div>
          <div className="flex gap-2">
            <m.img src={misvis}  alt="" className=" w-[17rem] h-[25rem] rounded-3xl"
            whileInView={{scale:1,opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
            initial={{scale:0,opacity:0}}
            />
            <m.img src={misvis} alt="" className="w-[17rem] h-[25rem] rounded-3xl"
            whileInView={{scale:1,opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
            initial={{scale:0,opacity:0}} />

          </div>

        


      </m.div>
      {/* vision  */}
      <m.div 
      className="flex h-[50vh] mb-16 w-full overflow-hidden items-center  gap-24 px-20 justify-center">
        <div className="">
            <m.img src={misvis} alt="" className=" w-[34rem] h-[25rem] rounded-3xl object-cover"
            whileInView={{scale:1,opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
            initial={{scale:0,opacity:0}}/>
          </div>
        
          <div className="flex flex-col gap-12 mt-2">
            <div className="text-6xl font-[Yeseva-One] font-extrabold">Our Vision.</div>
            <div className="w-[31rem] font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis reprehenderit asperiores nisi aliquam laudantium porro et, amet ratione quis sapiente dolorem adipisci unde ex laboriosam odit officia iusto aspernatur.</div>
            <div><button className="py-5 px-10 rounded-full bg-orange-500 transition-all transform origin-left   hover:bg-blue-950 text-white font-semibold">Read More</button></div>


          </div>
          

        


      </m.div>


      <m.div className="h-[60vh] text-white my-32  bg-sky-950 flex flex-col gap-8  items-center justify-center">
        <div className="text-6xl font-[Yeseva-One] font-bold">How Can You Help ?</div>
        <div className="w-[25rem] text-center"> Your donation will help us save and improve lives with research, education and emergency care.</div>
        <div className="flex gap-4 mt-4">
          <button className="bg-orange-500 py-5 px-8 rounded-full">Donate Now</button>
          <button className="bg-[#09b6cb] py-5 px-8 rounded-full">Join Us Now</button>
        </div>



      </m.div>


      <Volunteer/>
      
      <HomeEvents/>
      {/* counters started */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" bg-sky-950 text-white h-[40vh] mt-16 mb-32 font-[Yeseva-One]"
      >
        <div
          ref={counterRef}
          className="flex justify-center gap-16 py-24 text:lg md:text-2xl"
        >
          <div className="flex flex-col items-center gap-4">
            {/* <div>
              <RiEmotionHappyLine size={60} />
            </div> */}
            <div className="border-r-2 pr-16">
             <div className="text-8xl text-amber-500 font-semibold"> <Counter value={count} limit={300} /></div>
              
            </div>
            <div className="pr-10 text-center text-gray-300 text-lg ">Happy Donators</div>
            
          </div>
          <div className="flex flex-col gap-4 items-center">
            {/* <div>
              <PiTargetLight size={60} />
            </div> */}
            <div className="border-r-2 pr-16">
             <div className="text-8xl text-sky-400 font-semibold"> <Counter value={count} limit={50} /></div>
            </div>
            <div className="pr-10 text-center text-gray-300 text-lg">Successful Missions</div>
            
          </div>
          <div className="flex flex-col gap-4 items-center">
            {/* <div>
              <BsPeople size={60} />
            </div> */}
            <div className="border-r-2 pr-16" >
             <div className="text-8xl text-yellow-300 font-semibold"> <Counter value={count} limit={200} /></div>
              
            </div>
            <div className="pr-10 text-gray-300 text-center text-lg ">Volunteers</div>
            
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <div>
             <div className="text-8xl text-violet-600 font-semibold"> <Counter value={count} limit={10} /></div>
              
            </div>
            <div className="pl-2 text-center text-gray-300 text-lg">Awards Won</div>
            
          </div>
        </div>
      </m.div>
      {/* counters finished */}


      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{  duration: 0.5, ease: "easeInOut" }}
        className=""
      >
        <div className="flex flex-col  pb-8 font-Poppins w-full px-40 ">
          <div className="flex justify-between">
            <div className="text-6xl font-bold font-[Yeseva-One]">Latest Articles</div>
            <button className="py-5 px-10 rounded-full bg-orange-500 transition-all transform origin-left   hover:bg-blue-950 text-white font-semibold">All Articles</button>
          </div>
          <div className="flex gap-8 w-full py-16 px-8">
            <div className="p-12 border-2 rounded-3xl transition-all hover:shadow-2xl w-[35rem]">
            <div className="overflow-hidden w-full  h-[70vh] flex flex-col rounded-3xl">
              <img src={misvis} alt="" className="h-72 w-full rounded-3xl" />
             
              <div className=" px-8 pt-16 text-2xl font font-medium">Lorem ipsum dolor sit amet consect adiping.</div>
              <div className="px-8 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vitae!</div>
            <div className="px-8 pt-6"><button className="  py-5 px-10 rounded-full bg-orange-500 transition-all transform origin-left   hover:bg-blue-950 text-white font-semibold">Read More</button></div>
              
              
              <div className="flex justify-between">
                

              </div>

            </div>
            </div>
            <div className="w-[35rem] bg-slate-100 flex flex-col justify-around rounded-3xl">
              <div className="p-10 flex justify-center items-start gap-6 border-b-2 mx-4">
                <div><img src={misvis} alt="" className="w-64 rounded-3xl"/></div>
                <div className="pt-4">
                  <div>July 31 , 2023</div>
                  <div className="pt-4"> Lorem ipsum dolor sit amet lorem lorem</div>
                </div>

              </div>
              <div className="p-10 flex justify-center items-start gap-6 border-b-2 mx-4">
                <div><img src={misvis} alt="" className="w-64 rounded-3xl"/></div>
                <div className="pt-4">
                  <div>July 31 , 2023</div>
                  <div className="pt-4"> Lorem ipsum dolor sit amet lorem lorem</div>
                </div>

              </div>
              <div className="p-10 flex justify-center items-start gap-6 mx-4 ">
                <div><img src={misvis} alt="" className="w-64 rounded-3xl"/></div>
                <div className="pt-4">
                  <div>July 31 , 2023</div>
                  <div className="pt-4"> Lorem ipsum dolor sit amet lorem lorem</div>
                </div>

              </div>
            </div>

          </div>
          
          
        </div>
      </m.div>

      

      <Footer />
    </m.div>
  );
};

export default Home;
