import React, { useState ,useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import home from "../assets/home.jpg";
import misvis from "../assets/misvis.jpg";
import logo from "../assets/logo.png";
import team from "../assets/team.jpg";
import { delay, motion as m, AnimatePresence } from "framer-motion";
import Counter from "../components/Counter"
import { useInView } from "framer-motion"
import { useRef } from "react";
import{ PiTargetLight} from "react-icons/pi"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RiEmotionHappyLine } from "react-icons/ri";
import {BsPeople} from "react-icons/bs"


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

  // counter function
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const counting =( limit)=>{
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
              }, 100);
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

  }
  
  
  

  useEffect( counting, [count]);
  

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
          className=" font-semibold text-3xl w-[90vw] border-b-4 border-b-[#09b6cb] pt-8 ml-16  text-[#09b6cb]"
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

      {/* events started */}

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center pb-12   "
      >
        <div className="flex flex-col  pb-8 font-Poppins w-full bg-stone-900">
          <div className=" pt-12 text-3xl text-orange-500 font-semibold py-6 border-b-4 w-[90vw] border-b-orange-500 pb-1 ml-16">
            {" "}
            Upcoming Events{" "}
          </div>
          <div className="grid grid-cols-3 gap-x-24 pt-16 px-16 mr-8  ">
            {nums.map(() => (
              <div className="  h-[60vh] w-[25vw] border-2 hover:border-0 rounded-lg overflow-hidden flex flex-col hover:scale-110 transition   mx-8 ease-in-out duration-500 delay-100 text-white hover:bg-[#09b6cb] ">
                <div className="relative top-[14rem] h-16 w-16 bg-orange-500  text-center pl-1 text-white font-medium z-20">
                  <p>18</p> JUL
                </div>
                <img
                  src={misvis}
                  className="object-contain relative bottom-[3.6rem] "
                ></img>{" "}
                <p className=" pl-2 ">Mumbai,Maharashtra</p>
                <p className="pt-2 pl-2">headline</p>
                <p className="h-[7rem] pt-2 pl-2 overflow-hidden  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium consequuntur mollitia ea! Iure, aspernatur eius.
                  Rem dolorum officia, iusto minima, unde explicabo enim sunt
                  ullam assumenda eaque voluptatibus sint? Rem ipsam tempora
                  corrupti provident sed, nesciunt quisquam natus. Enim, vitae.
                </p>
                <span className="pl-2">....</span>
                <div className="flex pt-3 pl-2">
                  read more <BiChevronRight size={30}></BiChevronRight>
                </div>
              </div>
            ))}
          </div>
        </div>
      </m.div>
      {/* events finished */}

      {/* blog started  */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pb-16 pt-8 "
      >
        <div className=" font-semibold text-3xl w-[90vw] border-b-4 border-b-[#09b6cb] pt-8 ml-16  text-[#09b6cb]">
          Latest Blog
        </div>

        <div className="grid grid-cols-5 gap-8 justify-center w-[80vw] mx-20   rounded-lg  mt-12">
          <div className=" col-span-2 overflow-hidden w-[33vw] h-[40vh] mt-12 rounded-lg m-3 flex items-center ">
            {" "}
            <img
              src={misvis}
              alt=""
              className="h-[40vh]  transition duration-[2s] rounded-lg  ease-in-out  hover:scale-110 overflow-hidden"
            />
          </div>
          <div className=" col-span-2 ">
            <div className="flex flex-col pt-8 gap-6 border-l-4 border-l-orange-500 h-[45vh]  pl-8 ml-6 mt-[2rem] ]">
              <p className=" text-3xl">title</p>
              <p className="">date</p>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates a nisi magni iusto delectus? Minima quis eos itaque,
                sint, suscipit velit nihil provident, vel nobis explicabo fuga
                veniam deserunt ex voluptate eveniet harum soluta dolor.
                Consequatur quo dolorem deserunt quasi alias. Ex alias,
                dignissimos optio corrupti accusantium molestias dicta rerum.
                Praesentium harum reprehenderit placeat fuga quidem alias vero
                repudiandae iusto.
              </p>
              <p>
                <button className="bg-orange-500 rounded-md p-2">
                  read more
                </button>
              </p>
            </div>
          </div>
          <div className="pt-2 flex flex-col items-start justify-center gap-6">
            {nums.map(() => {
              return (
                <div className="grid grid-cols-3 gap-2 border-4 rounded-lg w-[25rem] duration-500 hover:scale-105 bg-slate-200">
                  <div className="col-span-1">
                    <img src={misvis} alt="" className="pt-3 h-32" />
                  </div>
                  <div className="col-span-2 flex gap-2 flex-col text-sm">
                    <div>date</div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Blanditiis nostrum officiis nisi corrupti, accusamus sit
                      laboriosam illum quo alias sunt!
                    </div>
                    <div>
                      <button className="text-orange-500">read more</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </m.div>

      {/* blog finished */}

      {/* counters started */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black text-white"
        
      >
        <div className="text-center text-4xl py-4">Our Impact</div>
        <div ref={counterRef} className="flex justify-around pb-12 text-2xl">
          <div className="flex flex-col items-center gap-4">
            <div><RiEmotionHappyLine size={60}/></div>
            <div>Happy Donators</div>
            <div onClick={counting(5000)}><Counter  value={count} limit={3000}/></div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div><PiTargetLight size={60}/></div>
            <div>Successful Missions</div>
            <div><Counter value={count} limit={100}/></div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div><BsPeople size={60}/></div>
            <div>Volunteers</div>
            <div><Counter value={count} limit={1500}/></div>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <div></div>
            <div>States Reached</div>
            <div ><Counter value={count} limit={20}/></div>
          </div>
        </div>

      </m.div>
      {/* counters finished */}
      {/* carousel code  */}
      <div>

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
      </div> */}</div>

      {/* carousel for projects finished  */}

      {/*  started  */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pb-16 pt-8 "
      >
        <div className=" pt-12 text-3xl text-orange-500 font-semibold py-6 border-b-4 w-[90vw] border-b-orange-500 pb-1 ml-16">
          {" "}
          Gallery{" "}
        </div>
      </m.div>
      {/*  finished */}

      <Footer />
    </m.div>
  );
};

export default Home;
