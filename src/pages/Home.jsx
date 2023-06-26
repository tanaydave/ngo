import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import home from "../assets/home.jpg";
import misvis from "../assets/misvis.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const Home = () => {
   
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ]


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
          <div className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="text-white pt-4 flex justify-center gap-8">
            <button className=" bg-orange-500 text-white border-2 border-orange-500 p-2 ">
              {" "}
              About our Organization
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
      <div className="flex flex-col  items-center justify-center">
        Ongoing Projects 
        <div className=" max-w-lg  overflow-hidden relative text-center">
        <div className="flex ">{slides.map((s)=>{
          return(
            <img src={s}/>
          )
        })}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full shadow bg-slate-400 text-gray-800 hover:bg-white">
          <BiChevronLeft size= {40}></BiChevronLeft>
        </button>
        <button className="p-1 rounded-full shadow  bg-slate-400 text-gray-800 hover:bg-white">
          <BiChevronRight size={40}></BiChevronRight>
        </button>
        </div>
        </div>

      </div>
      {/* usestate tobe used  */}





      {/* carousel for projects finished  */}

      <Footer />
    </div>
  );
};

export default Home;
