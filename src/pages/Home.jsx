import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import home from "../assets/home.jpg";
import misvis from "../assets/misvis.jpg";
import logo from "../assets/logo.png";
import team from "../assets/team.jpg";
import {delay, motion as m, AnimatePresence  } from "framer-motion"
 
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const Home = () => {
  
  // used in carousel
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const [transparent, setTransparent] = useState("bg-transparent");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("bg-slate-200");
    } else {
      setTransparent("bg-transparent");
    }
  };
  window.addEventListener("scroll", addBg);

  const nums = [1, 1, 1, 1, 1, 1];
  
  return (
    <m.div key={1} className=" font-Poppins">
      {/* navbar finished */}

      {/* hero started */}
      <div
        className="p-0 h-screen   bg-cover object-cover bg-center "
        style={{
          backgroundImage: `url(${misvis})`,
        }}
      >
        <m.div initial={{opacity:0}}
  whileInView={{opacity:1 }} 
  
   transition={{duration:1,ease:"easeInOut"}} className=" sticky top-0 transition-all ease-in z-50">
          <Navbar className={transparent} />
        </m.div>
        <m.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 ,delay:0.5 }} className=" text-white absolute shadow-black drop-shadow-2xl flex flex-col transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 font-semibold">
          <m.div   className="text-xl  ">
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
      </div>
      {/* hero finished */}

      {/* about org started  */}

      <m.div  className=" pt-16 mb-16  ">
        {/* who we are started */}
        <m.div    className="py-8 bg-orange-500 mx-6  text-white">
          <m.div initial={{opacity:0}}
  whileInView={{opacity:1 }} 
  
   transition={{ delay:0.5,duration:1,ease:"easeInOut"}} className="flex flex-col items-center">
            <m.div  className="  text-6xl py-8 underline underline-offset-8 ">
              Who We Are 
            </m.div>
            <div className=" leading-9 pt-2 text-lg mx-20">
              The founder of Orinova, Dr. Sourabh Kumar is an experienced
              individuals who has faced the hardships of the society and has
              become a figure of respect. However, it wasn’t easy for him to
              reach this stage. He grew up in a place where even finding
              employment was a big challenge in its own. However, this didn’t
              stop him from reaching his goal. Over the years, Dr Sourabh
              engaged in networking with the people around him, his superiors
              and his team. His work brought him in contact with the people of
              our country who were suffering from poverty and hunger. He
              witnessed first-hand the increasing damage to our environment when
              he travelled for work. Determined to once and for all take charge
              to help his country develop and grow, he came to create Orinova.
            </div>
          </m.div>
          <m.div initial={{opacity:0}}
  whileInView={{opacity:1 }} 
  
   transition={{ delay:0.5,duration:1,ease:"easeInOut"}} className="flex flex-col items-center py-8  text-slate-800">
          <div className="  text-6xl py-8 underline underline-offset-8 pl-12">
            Our Team
          </div>
          <div className=" leading-9 pt-2 text-lg px-12 flex justify-center gap-40">
            <p className=" max-w-2xl font-semibold">
              We in Orinova, believe that in order to create a better world,
              communities must take the reins of change. We are aware that our
              biggest asset is the strength of our staff. We place a high
              importance on work-life balance and create chances for everyone to
              develop professionally. At Orinova, diversity and inclusion are
              top priorities, and a multi-year programme is now under way to
              achieve racial justice and equity both locally and worldwide.
            </p>
            <img src={team} className="h-72"></img>
          </div>

          </m.div>
        </m.div>
        

        {/* who we are finished  */}
        {/* mission started */}
        {/* <div className="flex justify-evenly pt-12">
          <div className=" text-base text-orange-400 font-semibold flex flex-col ">
            <div> About us</div>
            <div className=" text-6xl font-semibold  text-black pt-4">
              Our Mission
            </div>
            <p className=" w-80 pt-4 text-black text-base font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              similique nostrum, eaque asperiores nisi sunt iusto excepturi
              deleniti aliquid. Atque!
            </p>
          </div>

          <img
            src={misvis}
            className=" h-60 w-auto rounded-3xl ring-2 ring-gray-400"
          ></img>
        </div> */}
        {/* mission finished */}

        {/* vision started  */}
        {/* <div className="flex justify-evenly pt-16">
          <img
            src={misvis}
            className="h-60 w-auto rounded-3xl ring-2 ring-gray-400"
          ></img>
          <div className=" text-base text-orange-400 font-semibold flex flex-col">
            <div>What we Do</div>
            <div className=" text-6xl font-semibold text-black pt-4">
              Our Vision{" "}
            </div>
            <p className=" w-80 pt-4 text-black text-base font-normal ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatum sint eaque in aliquid assumenda ab sequi magni atque
              quasi.
            </p>
          </div>
        </div> */}
        {/* vision finished */}
      </m.div>
      {/* about org finished  */}

      {/* carousel for projects started  */}
      {/* <div className="flex flex-col  items-center justify-center  text-6xl font-bold pt-20 font-Poppins ">
        Ongoing Projects
        <div className=" max-w-lg  overflow-hidden relative text-center pt-12 pb-8">
          <div
            className="flex gap-0 transition-transform ease-out duration-500 "
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((s) => {
              return <img className=" w-fit h-5/6"  src={s} />;
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4  ">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-slate-400 text-gray-800 hover:bg-white"
            >
              <BiChevronLeft size={40}></BiChevronLeft>
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow  bg-slate-400 text-gray-800 hover:bg-white"
            >
              <BiChevronRight size={40}></BiChevronRight>
            </button>
          </div>
          <div className="absolute bottom-12 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, id) => (
                <div
                  className={`transition-all w-3 h-3  bg-white rounded-full ${
                    curr === id ? "p-2" : " bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* carousel for projects finished  */}
      {/* blogs section starts  */}
      {/* <div className="flex flex-col items-center bg-slate-500 pb-8 font-Poppins">
        <div className="text-6xl font-semibold p-6"> Our Blogs </div>
        <div className="grid grid-cols-3 gap-x-40 gap-y-20  ">
          {nums.map(() => (
            <div className="  h-80 w-80 border-2 p-4 flex flex-col overflow-y-scroll no-scrollbar ">
              <img src={misvis} className="object-contain pb-2"></img>
              {" "}
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium consequuntur mollitia ea! Iure, aspernatur eius. Rem
              dolorum officia, iusto minima, unde explicabo enim sunt ullam
              assumenda eaque voluptatibus sint? Rem ipsam tempora corrupti
              provident sed, nesciunt quisquam natus. Enim, vitae.
           </p>  
           <div className="flex pt-3">read more <BiChevronRight size={30}></BiChevronRight></div>
           </div>
          ))}
        </div>
      </div> */}
      {/* blogs section finished  */}

      <Footer />
    </m.div>
   
  ); 
};

export default Home;
