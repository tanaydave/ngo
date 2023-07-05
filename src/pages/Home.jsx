import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import home from "../assets/home.jpg";
import misvis from "../assets/misvis.jpg";
import logo from "../assets/logo.png";
import team from "../assets/team.jpg";
import { delay, motion as m, AnimatePresence } from "framer-motion";

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

  return (
    <m.div className=" font-Poppins pb-12">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      {/* navbar finished */}

      {/* hero started */}
      <div
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
      </div>
      {/* hero finished */}

      {/* who we are started  */}
      <m.div className=" py-16 mb-16 bg-slate-200 ">
        {/* who we are started */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className=" font-semibold text-3xl w-[90vw] border-b-2 border-b-[#09b6cb] pt-8 ml-16  text-[#09b6cb]"
        >
          Who We Are
        </m.div>
        <m.div className="my-8 py-8 w-[90vw] bg-orange-500 mx-16  text-white">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            className="flex flex-col items-center  "
          >
            {/* <m.div className=" bg-white text-6xl py-8 ml-16 underline underline-offset-8 text-[#09b6cb]">
              Who We Are
            </m.div> */}
            <div className=" leading-9 pt-2 text-xl mx-20">
              The founder of Orinova, Dr. Sourabh Kumar is an experienced
              individual who has faced the hardships of the society and has
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
        </m.div>
      </m.div>
      {/* who we are finished  */}

      {/* news started */}

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center pb-12   "
      >
        <div className="flex flex-col  pb-8 font-Poppins w-full bg-stone-900">
          <div className=" pt-12 text-3xl text-orange-500 font-semibold py-6 border-b-2 w-[90vw] border-b-orange-500 pb-1 ml-16">
            {" "}
            Daily News{" "}
          </div>
          <div className="grid grid-cols-3 gap-x-24 pt-16  ">
            {nums.map(() => (
              <div className="  h-[60vh] w-[25vw] border-2 hover:border-0 rounded-lg p-4 flex flex-col hover:scale-110 transition   mx-8 ease-in-out duration-500 delay-100 text-white hover:bg-[#09b6cb] o">
                <img src={misvis} className="object-contain pb-2"></img>{" "}
                <p className="pt-2 ">Mumbai,Maharashtra</p>
                <p className="pt-2">headline</p>
                <p className="h-[6.8rem] pt-2 overflow-hidden  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium consequuntur mollitia ea! Iure, aspernatur eius.
                  Rem dolorum officia, iusto minima, unde explicabo enim sunt
                  ullam assumenda eaque voluptatibus sint? Rem ipsam tempora
                  corrupti provident sed, nesciunt quisquam natus. Enim, vitae.
                </p>
                <span>....</span>
                <div className="flex pt-3">
                  read more <BiChevronRight size={30}></BiChevronRight>
                </div>
              </div>
            ))}
          </div>
        </div>
      </m.div>
      {/* news finished */}

      {/* blog started  */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="py-8"
      >
        <div className=" font-semibold text-3xl w-[90vw] border-b-2 border-b-[#09b6cb] pt-8 ml-16  text-[#09b6cb]">
          Latest Blog
        </div>

        <div className="flex  justify-center w-[80vw]">
          <div> <img src="" alt="" /></div>
          <div className="flex flex-col">
            <p>date</p>
            <p>title</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque, doloremque deleniti quisquam dicta ad sequi nulla, autem reprehenderit harum omnis vero, odit eveniet id nostrum natus recusandae eaque aliquam magnam dolorum. Ea nesciunt voluptate accusamus beatae quas quia culpa nisi consequuntur eum. Inventore molestiae commodi, porro reiciendis laboriosam necessitatibus?</p>

          </div>

        </div>
      </m.div>

      {/* blog finished */}

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

      <Footer />
    </m.div>
  );
};

export default Home;
