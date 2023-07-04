import {React } from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useState } from "react";
import mission from '../assets/mission.jpg'
import vision from '../assets/vision.jpg'
import {motion as m} from "framer-motion"




const About = () => {
  const [transparent,setTransparent]= useState('bg-transparent');
    const addBg = ()=>{
     if(window.scrollY >=10){
       setTransparent('bg-slate-200')
     }
     else{
       setTransparent('bg-transparent')
     }
    }
    window.addEventListener('scroll',addBg)
  return (
    <div className=" font-Poppins">
      <m.div  initial={{opacity:0}}
  whileInView={{opacity:1 }} 
  
   transition={{duration:1,ease:"easeInOut"}} className=" sticky top-0 transition-all ease-in z-50">
        <Navbar className={transparent}/>
      </m.div>
      <m.div  initial={{opacity:0 ,x:"200%"}}
  whileInView={{opacity:1 }} animate={{x:0}} 
  
   transition={{duration:1.5,ease:"easeInOut"}} className="flex flex-col h-[100vh] pb-48 items-start justify-center">
        <div className="text-8xl  font-bold after:absolute after:content-[''] after:items-center after:w-96 after:h-2 after:top-44 pb-24 after:left-80 after:bg-orange-500   pl-60">Our Mission</div>
        <div className="flex  items-center w-5/6 pb-8 text-xl px-20 gap-44 leading-relaxed">
          <p>
            Orinova, is an influential NGO that aims to build a just and
            equitable society where everyone can live with dignity and in good
            health.{" "}
          
        
            Our influence extends beyond just allocating funds to the most in
            need areas; it also involves putting communities in control of
            change and redistributing power in order to completely alter the way
            philanthropy and assistance are delivered.
          
        
            We as a care-oriented organization, keep an eye on the problems
            arising in society. We are working to monitor the issues that are
            emerging in society. We simply work to improve society and the
            nation as a whole.
          </p>
          <img src={mission} className=" h-[40vh] "></img>
        </div>
      </m.div>
      <m.div  initial={{opacity:0 ,x:"-200%"}}
  whileInView={{opacity:1 }} animate={{x:0}} 
  
   transition={{ duration:1.5,ease:"easeInOut"}} className="flex flex-col  items-end justify-center pb-32 h-[40vh]">
        <div className="text-8xl font-bold after:absolute after:content-[''] after:items-center after:mb-8 after:w-80 after:h-2 after:bottom-[23.5rem] after:right-64 after:mr-2 pr-48 after:bg-orange-500 pb-20  pl-60">Our Vision</div>
        <div className="flex  items-center w-5/6  text-xl pr-20 leading-relaxed gap-32 ">
        <img src={vision}></img>
          <p>
          Orinova's primary goal is to protect the environment and mitigate threats to biodiversity.The organization also emphasizes coordinating local and international efforts to manage shared natural resources using a commons approach.Integrating socioeconomic and ecological processes is a key aspect of their work, considering it vital for successful livelihoods.Promoting women's engagement in governance processes is another important focus, aimed at achieving gender parity.Additionally, Orinova aims to alleviate poverty and hunger, emphasizing the anticipation, prevention, and treatment of hunger.In conclusion, Orinova invites others to join their campaign to save lives, strengthen communities, protect nature, and transform the lives of millions of families and children worldwide.

          </p>
          
        </div>
      </m.div>
<div className="pt-20">
      <Footer /></div>
    </div>
  );
};

export default About;
