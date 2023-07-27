import { React } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect} from "react";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import { motion as m } from "framer-motion";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // const [transparent,setTransparent]= useState('bg-transparent');
  // const addBg = ()=>{
  //  if(window.scrollY >=10){
  //    setTransparent('bg-slate-200')
  //  }
  //  else{
  //    setTransparent('bg-transparent')
  //  }
  // }
  // window.addEventListener('scroll',addBg)
  
  return (
    <div className=" font-Poppins">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" sticky top-0 transition-all ease-in z-50"
      >
        <Navbar />
      </m.div>
      <m.div
        initial={{ opacity: 0, x: "200%" }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col md:h-[100vh]  pb-20 md:pb-48 items-start justify-center"
      >
        <div className="  text-4xl md:text-8xl text-orange-500 md:text-black  font-bold md:after:absolute md:after:content-[''] md:after:items-center md:after:w-96 md:after:h-2 md:after:top-40 pb-12 md:after:left-80 md:after:bg-orange-500   md:pl-60">
          Our Mission
        </div>
        <div className="flex md:flex-row flex-col  md:items-center md:w-5/6 pb-8 text-lg md:text-xl md:px-20 md:gap-44 leading-7 md:leading-relaxed">
          <p className="w-full mx-1 md:mx-0">
            Orinova, is an influential NGO that aims to build a just and
            equitable society where everyone can live with dignity and in good
            health. Our influence extends beyond just allocating funds to the
            most in need areas; it also involves putting communities in control
            of change and redistributing power in order to completely alter the
            way philanthropy and assistance are delivered. We as a care-oriented
            organization, keep an eye on the problems arising in society. We are
            working to monitor the issues that are emerging in society. We
            simply work to improve society and the nation as a whole.
          </p>
          <img src={mission} className=" md:block w-full md:w-auto md:h-[40vh] "></img>
        </div>
      </m.div>
      <m.div
        
        className="flex flex-col  md:items-end justify-center pb-12 md:pb-32 md:h-[40vh]"
        initial={{ opacity: 0, x: "200%" }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className=" text-4xl pb-12 text-orange-500 md:text-black md:text-8xl font-bold md:after:absolute md:after:content-[''] md:after:items-center md:after:mb-8 md:after:w-80 md:after:h-2 md:after:bottom-[24.5rem] md:after:right-64 md:after:mr-2 md:pr-48 after:bg-orange-500 md:pb-[5.3rem]  md:pl-60">
          Our Vision
        </div>
        <div className="flex md:flex-row flex-col  md:items-center md:w-5/6 text-lg  md:text-xl md:pr-20 leading-7 md:leading-relaxed md:gap-32 ">
          <img src={vision} className="hidden md:block"></img>
          <p className=" w-full mx-1 md:mx-0">
            Orinova's primary goal is to protect the environment and mitigate
            threats to biodiversity.The organization also emphasizes
            coordinating local and international efforts to manage shared
            natural resources using a commons approach.Integrating socioeconomic
            and ecological processes is a key aspect of their work, considering
            it vital for successful livelihoods.Promoting women's engagement in
            governance processes is another important focus, aimed at achieving
            gender parity.Additionally, Orinova aims to alleviate poverty and
            hunger, emphasizing the anticipation, prevention, and treatment of
            hunger.In conclusion, Orinova invites others to join their campaign
            to save lives, strengthen communities, protect nature, and transform
            the lives of millions of families and children worldwide.
          </p>
          <img src={vision} className=" md:hidden"></img>

        </div>
      </m.div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
