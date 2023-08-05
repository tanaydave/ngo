import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion as m } from "framer-motion";

const News = () => {
  const posts = [1, 1, 1, 1, 1];
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className=" font-Poppins bg-white "
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
        <div className="text-6xl text-center py-4 md:py-20 font-semibold text-[#09b6cb]">
          News and Press Release{" "}
        </div>
      </div>
      <div className=" py-12 flex flex-col   md:flex-row mx-16  md:mx-24 gap-2 md:gap-6">
        <div>
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg md:p-5 p-3 w-full  md:w-[27rem] border-2"
          />
        </div>
        <div>
          <div className=" hidden md:block rounded-lg p-5 w-[27rem] border-2"> All Topics</div>
        </div>
        <div>
          <div className="hidden md:block rounded-lg p-5 w-[10rem] border-2">All Time</div>{" "}
        </div>
        <div>
          <div className=" hidden md:block rounded-lg p-5 w-[18rem] border-2">
            {" "}
            News and Press Release
          </div>
        </div>
        <div>
          <div className="  rounded-lg p-3 md:hidden w-full border-2">
            {" "}
            Filters
          </div>
        </div>
        
      </div>
      <div className="flex flex-col gap-8 items-center py-4 md:py-12">
        {posts.map(() => {
          return (
            <div className="flex flex-col gap-6 items-start  w-[80vw] p-4 rounded-lg shadow-xl border-t-2 ">
              <div className="text-lg text-[#09b6cb]">topic: Lorem, ipsum dolor.</div>
              <div className="text-3xl font-medium text-[#398087]">headline : Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              <div className="text-lg">content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi soluta consequatur qui voluptates enim voluptate autem, aliquam optio ratione.</div>
              <div className="text-base">18 july , 2023</div>
            </div>
          );
        })}

        <div><button className="border-2 p-4 border-[#398087] rounded-lg">Load More</button></div>
      </div>
      <Footer />
    </m.div>
  );
};

export default News;
