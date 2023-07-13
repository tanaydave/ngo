import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion as m } from "framer-motion";
import home from "../assets/home.jpg"

const Gallery = () => {
    const images= [1,1,1,1,1,1,1,1,1]
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      <div>
        <div
          className="text-6xl bg-orange-500 text-white py-12 h-[20vh] flex justify-center items-center
            "
        >
          Gallery
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-20 py-16">
            {images.map(()=>{
                return(
                    <div className=" relative">
                    <img src={home} alt="" className="md:h-full h-56" />
                    <m.div  className=" absolute flex flex-col items-center justify-end h-full gap-3  duration-500 transition w-full top-[0.1rem] bg-black text-orange-500 opacity-0 hover:opacity-80 "> 
                    <div className="font-semibold text-center mx-4">event details Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div><button className="border-2 duration-100 ease-in rounded-lg border-orange-500 mb-4 p-2 bg-orange-500 hover:bg-transparent hover:text-orange  text-white"> View all photos</button></div>
                    </m.div>
                  </div>
                )
            })}

        </div>
      </div>
      <Footer />
    </m.div>
  );
};

export default Gallery;
