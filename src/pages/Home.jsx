import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import home from "../assets/home.jpg";
import misvis from "../assets/misvis.jpg";
import logo from "../assets/logo.png";

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

  const nums = [1, 1, 1, 1, 1, 1];
  return (
    <div className=" font-Poppins">
      <div className="sticky top-0 bg-white z-50">
        <Navbar />
      </div>
      {/* navbar finished */}

      {/* hero started */}
      <div
        className="p-0 h-screen  bg-cover object-cover bg-center "
        style={{
          backgroundImage: `url(${misvis})`,
        }}
      >
        <div className=" text-white absolute flex flex-col transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 font-semibold">
          <div className="text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-white pt-4 flex justify-center gap-8">
            <button className=" bg-orange-500 text-white border-2 border-orange-500 p-2 ">
              {" "}
              Become a Volunteer
            </button>
            <button className="border-2 p-2 border-orange-500 hover:bg-transparent text-white  hover:border-orange-500 hover:text-orange-500 bg-orange-500 transition delay-100 ease-in">
              Contribute for a cause
            </button>
          </div>
        </div>
      </div>
      {/* hero finished */}

      {/* about org started  */}

      <div className=" pt-16">
        {/* mission started */}
        <div className="flex justify-evenly pt-12">
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
        </div>
        {/* mission finished */}

        {/* vision started  */}
        <div className="flex justify-evenly pt-16">
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
        </div>
        {/* vision finished */}
      </div>
      {/* about org finished  */}

      {/* carousel for projects started  */}
      <div className="flex flex-col  items-center justify-center  text-6xl font-bold pt-20 font-Poppins ">
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
      </div>

      {/* carousel for projects finished  */}
      {/* blogs section starts  */}
      <div className="flex flex-col items-center bg-slate-500 pb-8 font-Poppins">
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
      </div>
      {/* blogs section finished  */}

      <Footer />
    </div>
  );
};

export default Home;
