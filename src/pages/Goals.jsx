import {React} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

const Services = () => {
  const [transparent,setTransparent]= useState('bg-transparent');
    const addBg = ()=>{
     if(window.scrollY >=10){
       setTransparent('bg-white')
     }
     else{
       setTransparent('bg-transparent')
     }
    }
    window.addEventListener('scroll',addBg)
  
  return (
    <div className="py-6">
      <div className=" sticky top-0 transition-all ease-in z-50">
        <Navbar className={transparent}/>
      </div>
      <div className=" py-4 mx-4">
        <div className="text-4xl py-4 text-orange-500 font-semibold">Environment Protection</div>
        <p className="leading-8 text-xl">
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
      </div>
      
      <div className= 'py-4 mx-4'>
        <div className="text-4xl py-4 text-orange-500 font-semibold"> Equality</div>
        <p className="leading-8 text-xl">
          We hope to construct a framework for integrating socioeconomic and
          ecological processes, as well as their dynamic interactions, as
          essential to the success of livelihoods. Working with our partners to
          develop conservation activity that is suitable for every community and
          region while learning from them. Our society is ridden with racism and
          casteism and we hope to help people change their perspective so that
          in this 21st Century, people can be who they want and live freely.
        </p>
      </div>
      <div className= 'py-4 mx-4'>
        <div className="text-4xl py-4 text-orange-500 font-semibold"> Women empowerment</div>
        <p className="leading-8 text-xl">
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
      </div>
      <div className= 'py-4 mx-4'>
        <div className="text-4xl py-4 text-orange-500 font-semibold">End Poverty and hunger</div>
        <p className="leading-8 text-xl">
          We finally wish to aid in the lowering of poverty and hunger. Hunger
          may be anticipated, avoided, and treated. However, one in ten
          individuals are food insecure, and 75% of malnourished children lack
          access to life-saving care. Together, let's put an end to hunger.
        </p>
      </div>
      <div className="text-3xl text-center mx-14 pb-8">
        Join us in our campaign to save lives, strengthen communities, help
        nature and transform millions of families and children's lives
        throughout the world.
      </div>

      <Footer />
    </div>
  );
};

export default Services;
