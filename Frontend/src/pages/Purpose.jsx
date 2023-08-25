import { React } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect} from "react";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import { motion as m } from "framer-motion";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Purpose = () => {
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
      
      <m.div>
        <div>Our Purpose</div>
        <p>Driven by the essence of benevolence and fortified by the indomitable human spirit, Orinova Foundation embarks on multifaceted endeavours to address pressing global challenges. We channel our unwavering determination and boundless enthusiasm into key areas that reflect our core beliefs:</p>
      <div className="grid grid-cols-3 gap-8 py-12">
        <div className="flex flex-col items-center justify-center">
          <div>Nurturing Minds, Illuminating Futures: </div>
          <div>Education is the cornerstone of empowerment, and we believe in empowering minds through the gift of knowledge. Our initiatives strive to bring quality education to the underserved, unlocking doors to opportunities that transcend barriers.</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Healing Lives, Enkindling Hope </div>
          <div>Health is not merely the absence of disease; it is the embodiment of well-being. At Orinova, we endeavor to improve healthcare access, eradicate preventable illnesses, and bolster maternal and child health to ensure a healthier world for all.</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Preserving Nature, Securing Tomorrow </div>
          <div>In an age of environmental challenges, we embrace our role as guardians of nature. Our conservation efforts seek to safeguard ecosystems, champion sustainable practices, and raise consciousness about environmental stewardship.</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Empowering Communities, Fostering Resilience </div>
          <div>Through community-driven initiatives, we strive to uplift and embolden local populations. Our projects span livelihood development, skill enhancement, women's empowerment, and community mobilisation, cultivating resilience and self-reliance.</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Extending Hands, Nurturing Humanity</div>
          <div>In times of crisis, we extend our hands to those in dire need. Our emergency relief efforts bring timely aid and succour to communities ravaged by disasters, offering a glimmer of hope in their darkest hours.</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Our Endeavor, Your Impact:</div>
          <div>At Orinova Foundation, we believe in the collective strength of unity and the magic of human generosity. Together, we can transform lives and shape destinies. By volunteering, contributing, or simply raising awareness, you can be an architect of positive change.</div>
        </div>
       

      </div>
      
      </m.div>




      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Purpose;
