import {React} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import {motion as m } from "framer-motion"
import misvis from "../assets/misvis.jpg"

const Causes = () => {
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
    < m.div initial={{opacity:0}} 
    whileInView={{ opacity:1 }}
transition={{ ease: "easeIn", duration: 1 }} className="py-6 font-Poppins">
      <div className=" sticky top-0 transition-all ease-in z-50">
        <Navbar className={transparent}/>
      </div>
      <m.div
      initial={{opacity:0}} 
      whileInView={{ opacity:1 }}
  transition={{ ease: "easeIn", duration: 1 }} className=" py-16 mx-20">
        <div className="text-4xl py-4 text-orange-500 font-semibold flex ">Environment Protection</div>
        <div className="flex gap-20  "><p className="leading-8 text-xl w-[50rem]">
          Our goal is to protect the environment and lessen the dangers to the
          variety of life on earth. Food, climate, freshwater, wildlife,
          forests, and oceans are all areas where it operates. By repairing
          11.38 million acres of land and building 36,407 village institutions,
          we can empower 22 million people. Since the environment is a complex
          system with several components functioning concurrently to allow all
          living things of different sizes and behaviours to coexist, In the
          event that one wants to interfere in the system, it is crucial to
          comprehend how the various components relate to one another. Orinova
          wishes to adopt Environmental protection initiatives that begin with a
          knowledge of this internal relationship and end at a point when,
          despite the effect of numerous unfavourable forces, the overall
          equilibrium and internal relationship remain stable.
        </p>
        <img src={misvis} alt="" className="w-[30rem] rounded-2xl "/>
        </div>
      </m.div>
      
      <m.div initial={{opacity:0}} 
      whileInView={{ opacity:1 }}
  transition={{ ease: "easeIn", duration: 1 }} className= 'py-20 mx-20'>
        <div className="text-4xl py-4 text-orange-500 font-semibold"> Equality</div>
        <div className="flex gap-20"><p className="leading-8 text-xl w-[50rem]">
          We hope to construct a framework for integrating socioeconomic and
          ecological processes, as well as their dynamic interactions, as
          essential to the success of livelihoods. Working with our partners to
          develop conservation activity that is suitable for every community and
          region while learning from them. Our society is ridden with racism and
          casteism and we hope to help people change their perspective so that
          in this 21st Century, people can be who they want and live freely.
        </p>
        <img src={misvis} alt="" className="w-[30rem] rounded-2xl " /></div>
      </m.div>
      <m.div initial={{opacity:0}} 
      whileInView={{ opacity:1 }}
  transition={{ ease: "easeIn", duration: 1 }} className= 'py-16 mx-20'>
        <div className="text-4xl py-4 text-orange-500 font-semibold"> Women empowerment</div>
        <div className="flex gap-20"> <p className="leading-8 text-xl w-[50rem]">
          Promoting women's engagement and involvement in governance processes
          in order to increase gender parity. Women's empowerment and autonomy,
          as well as the improvement of their social, political, and economic
          circumstances, are vitally important ends in and of themselves. It
          serves as the foundation for achieving sustainable development. The
          power dynamics that prevent women from living healthy and satisfying
          lives operate at all societal levels, from the profoundly private to
          the highly public.In
          order to achieve transformation, policy and programme initiatives are
          required that would improve women's access to stable livelihoods and
          economic resources, lessen their heavy domestic burdens, remove legal
          barriers to their participation in public life, and raise social
          awareness through efficient education and mass communication
          campaigns.
        </p>
        <img src={misvis} alt="" className="rounded-2xl w-[30rem]"/></div>
      </m.div>
      <m.div  
      initial={{opacity:0}} 
      whileInView={{ opacity:1 }}
  transition={{ ease: "easeIn", duration: 1 }} className= 'py-16 mx-20'>
        <div className="text-4xl py-4 text-orange-500 font-semibold">End Poverty and hunger</div>
        <div className="flex gap-20"><p className="leading-8 text-xl w-[50rem]">
          We finally wish to aid in the lowering of poverty and hunger. Hunger
          may be anticipated, avoided, and treated. However, one in ten
          individuals are food insecure, and 75% of malnourished children lack
          access to life-saving care. Together, let's put an end to hunger.
        </p>
        <img src={misvis} alt="" className="rounded-2xl w-[30rem]" />
        </div>
      </m.div>
      <div className="text-3xl text-center mx-14 py-20">
        Join us in our campaign to save lives, strengthen communities, help
        nature and transform millions of families and children's lives
        throughout the world.
      </div>

      <Footer />
    </m.div>
  );
};

export default Causes;
