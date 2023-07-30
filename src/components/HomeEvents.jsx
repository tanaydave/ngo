import React from 'react'
import { motion as m } from "framer-motion";
import bg from '../assets/eventsBG.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import misvis from "../assets/misvis.jpg";


const HomeEvents = () => {
    const carImgs = [
        {
          id: 1,
          tagline:
            "It is not how much we give but how much love we put into giving",
          button: "Donate Now",
          img:  bg,
        },
        {
          id: 2,
          tagline:
            "It is not how much we give but how much love we put into giving",
          button: "Become a Volunteer",
          img:  bg,
        },
        {
          id: 3,
          tagline:
            "It is not how much we give but how much love we put into giving",
          button: "Become a Partner",
          img: bg,
        },
      ];
    const renderSlides = () =>
    carImgs.map((image) => (
      <m.div className=" border-2 rounded-3xl overflow-hidden   ">
        <div className='flex'>
        <img src={misvis} alt="" className='h-[50vh] w-[50%]' />

            <div className='flex flex-col justify-center items-start px-12  gap-4     '>
                <div className='text-3xl font-bold'>Headline: Lorem ipsum dolor sit amet.</div>
                <div className='text-gray-500'> July 31 ,2023  @12pm onwards , Mumbai</div>
                <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div><button className="py-5 mt-5 px-10 rounded-full bg-orange-500 transition-all transform origin-left hover:bg-blue-950 text-white font-semibold">Read More</button></div>
                

            </div>

            </div>

        
        
      </m.div>));
  return (
    <m.div className="pt-32 pb-20 flex flex-col gap-8 items-center   z-0" >
    <div className="text-[#09b6cb] text-lg italic"> Upcoming Events</div>
    <div className="text-6xl font-[Yeseva-One] font-bold">  Our Events</div>


    <div className=' w-[75vw] h-[40vh] mb-32'>
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


    </m.div>
  )
}

export default HomeEvents