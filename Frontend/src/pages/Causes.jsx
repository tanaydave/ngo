import { React } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { motion as m } from "framer-motion";
import misvis from "../assets/misvis.jpg";
import { useNavigate } from "react-router-dom";
import { to } from "react-spring";

const Causes = () => {
  // const [transparent,setTransparent]= useState('bg-transparent');
  //   const addBg = ()=>{
  //    if(window.scrollY >=10){
  //      setTransparent('bg-slate-200')

  //    }
  //    else{
  //      setTransparent('bg-transparent')
  //    }
  //   }
  //   window.addEventListener('scroll',addBg)
  const Navigate = useNavigate();

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
      className="pb-6 font-Poppins"
    >
      <div className=" sticky top-0 transition-all ease-in z-50">
        <Navbar />
      </div>
      <div className="flex items-center justify-center text-white bg-orange-400 h-52 mb-4 text-6xl ">
        Causes For Fund Raise
      </div>
      {/* <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className=" py-16 md:mx-20 "
      >
        <div className="text-4xl py-4 text-orange-500 font-semibold flex ">
          Environment Protection
        </div>
        <div className="flex md:flex-row flex-col md:gap-20   ">
          <p className="md:leading-8 w-full text-lg md:text-xl md:w-[50rem]">
            Our goal is to protect the environment and lessen the dangers to the
            variety of life on earth. Food, climate, freshwater, wildlife,
            forests, and oceans are all areas where it operates. By repairing
            11.38 million acres of land and building 36,407 village
            institutions, we can empower 22 million people. Since the
            environment is a complex system with several components functioning
            concurrently to allow all living things of different sizes and
            behaviours to coexist, In the event that one wants to interfere in
            the system, it is crucial to comprehend how the various components
            relate to one another. Orinova wishes to adopt Environmental
            protection initiatives that begin with a knowledge of this internal
            relationship and end at a point when, despite the effect of numerous
            unfavourable forces, the overall equilibrium and internal
            relationship remain stable.
          </p>
          <img src={misvis} alt="" className="md:w-[30rem] md:h-[auto] h-auto w-full rounded-2xl " />
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="py-20 md:mx-20 "
      >
        <div className="text-4xl py-4 text-orange-500 font-semibold">
          {" "}
          Equality
        </div>
        <div className="flex md:flex-row flex-col md:gap-20">
          <p className="md:leading-8 w-full text-lg md:text-xl md:w-[50rem]">
            We hope to construct a framework for integrating socioeconomic and
            ecological processes, as well as their dynamic interactions, as
            essential to the success of livelihoods. Working with our partners
            to develop conservation activity that is suitable for every
            community and region while learning from them. Our society is ridden
            with racism and casteism and we hope to help people change their
            perspective so that in this 21st Century, people can be who they
            want and live freely.
          </p>
          <img src={misvis} alt="" className="w-[30rem] rounded-2xl " />
        </div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="py-16 md:mx-20"
      >
        <div className="text-4xl py-4 text-orange-500 font-semibold">
          {" "}
          Women empowerment
        </div>
        <div className="flex md:flex-row flex-col md:gap-20">
          {" "}
          <p className="md:leading-8 w-full text-lg md:text-xl md:w-[50rem]">
            Promoting women's engagement and involvement in governance processes
            in order to increase gender parity. Women's empowerment and
            autonomy, as well as the improvement of their social, political, and
            economic circumstances, are vitally important ends in and of
            themselves. It serves as the foundation for achieving sustainable
            development. The power dynamics that prevent women from living
            healthy and satisfying lives operate at all societal levels, from
            the profoundly private to the highly public.In order to achieve
            transformation, policy and programme initiatives are required that
            would improve women's access to stable livelihoods and economic
            resources, lessen their heavy domestic burdens, remove legal
            barriers to their participation in public life, and raise social
            awareness through efficient education and mass communication
            campaigns.
          </p>
          <img src={misvis} alt="" className="rounded-2xl w-[30rem]" />
        </div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="py-16 md:mx-20"
      >
        <div className="text-4xl py-4 text-orange-500 font-semibold">
          End Poverty and hunger
        </div>
        <div className="flex md:flex-row flex-col md:gap-20">
          <p className="md:leading-8 w-full text-lg md:text-xl md:w-[50rem]">
            We finally wish to aid in the lowering of poverty and hunger. Hunger
            may be anticipated, avoided, and treated. However, one in ten
            individuals are food insecure, and 75% of malnourished children lack
            access to life-saving care. Together, let's put an end to hunger.
          </p>
          <img src={misvis} alt="" className="rounded-2xl w-[30rem]" />
        </div>
      </m.div> */}
      <div className="flex flex-col gap-12 px-32 py-12">
        {/* causes  */}
        <div className=" border-t-2 shadow-2xl  w-full overflow-hidden">
          <div className="m-4 grid grid-cols-2 p-6 gap-8 items-center ">
            <div className=" object-cover overflow-hidden ">
              <img src={misvis} alt="" className="rounded-xl" />
            </div>
            <div className=" flex flex-col gap-6 px-4">
              <div className="text-2xl font-semibold">
                Lorem ipsum dolor sit. lorem lorem
              </div>
              <div>
                nim incidunt uia similique minima porro molestias quae dolorem
                vel explicabo, expedita molestiae voluptatum nobis minus, veniam
                dolore! Facilis error adipisci odit ipsum exercitationem.
              </div>

                {/* progress bar     */}
              <div className=" pt-4">
                <div className=" bg-orange-200 relative h-[10px] w-full rounded-2xl">
                  <div className=" bg-orange-500 absolute top-0 left-0 h-full w-[60%] rounded-2xl">
                    <span className="bg-orange-500 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                      <span className="bg-orange-500 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                      60%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex text-sm justify-center gap-8 ">
                <div className="flex flex-col pr-20  border-r-2">
                  <div>Goal :</div>
                  <div className="text-orange-500"> Rs 10000</div>
                </div>
                <div className="flex flex-col pr-20 justify-center pl-6  border-r-2">
                  <div>Raised :</div>
                  <div className="text-orange-500">Rs 10000</div>
                </div>
                <div className="flex flex-col pl-6 pr-16  ">
                  <div>To Go :</div>
                  <div className="text-orange-500">Rs 10000</div>
                </div>
              </div>
              <div>
                <button onClick={()=>{ Navigate('/Causes/SingleCause')}} className="bg-orange-500 text-white py-3 px-6 rounded-full text-sm">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 shadow-2xl  w-full overflow-hidden">
          <div className="m-4 grid grid-cols-2 p-6 gap-8 items-center ">
            <div className=" object-cover overflow-hidden ">
              <img src={misvis} alt="" className="rounded-xl" />
            </div>
            <div className=" flex flex-col gap-6 px-4">
              <div className="text-2xl font-semibold">
                Lorem ipsum dolor sit. lorem lorem
              </div>
              <div>
                nim incidunt uia similique minima porro molestias quae dolorem
                vel explicabo, expedita molestiae voluptatum nobis minus, veniam
                dolore! Facilis error adipisci odit ipsum exercitationem.
              </div>

                {/* progress bar     */}
              <div className=" pt-4">
                <div className=" bg-orange-200 relative h-[10px] w-full rounded-2xl">
                  <div className=" bg-orange-500 absolute top-0 left-0 h-full w-[60%] rounded-2xl">
                    <span className="bg-orange-500 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                      <span className="bg-orange-500 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                      60%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex text-sm justify-center gap-8 ">
                <div className="flex flex-col pr-20  border-r-2">
                  <div>Goal :</div>
                  <div className="text-orange-500"> Rs 10000</div>
                </div>
                <div className="flex flex-col pr-20 justify-center pl-6  border-r-2">
                  <div>Raised :</div>
                  <div className="text-orange-500">Rs 10000</div>
                </div>
                <div className="flex flex-col pl-6 pr-16  ">
                  <div>To Go :</div>
                  <div className="text-orange-500">Rs 10000</div>
                </div>
              </div>
              <div>
                <button onClick={()=>{ Navigate('/Causes/SingleCause')}} className="bg-orange-500 text-white py-3 px-6 rounded-full text-sm">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 shadow-2xl  w-full overflow-hidden">
          <div className="m-4 grid grid-cols-2 p-6 gap-8 items-center ">
            <div className=" object-cover overflow-hidden ">
              <img src={misvis} alt="" className="rounded-xl" />
            </div>
            <div className=" flex flex-col gap-6 px-4">
              <div className="text-2xl font-semibold">
                Lorem ipsum dolor sit. lorem lorem
              </div>
              <div>
                nim incidunt uia similique minima porro molestias quae dolorem
                vel explicabo, expedita molestiae voluptatum nobis minus, veniam
                dolore! Facilis error adipisci odit ipsum exercitationem.
              </div>

                {/* progress bar     */}
              <div className=" pt-4">
                <div className=" bg-orange-200 relative h-[10px] w-full rounded-2xl">
                  <div className=" bg-orange-500 absolute top-0 left-0 h-full w-[60%] rounded-2xl">
                    <span className="bg-orange-500 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                      <span className="bg-orange-500 absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                      60%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex text-sm justify-center gap-8 ">
                <div className="flex flex-col pr-20  border-r-2">
                  <div>Goal :</div>
                  <div className="text-orange-500"> Rs 10000</div>
                </div>
                <div className="flex flex-col pr-20 justify-center pl-6  border-r-2">
                  <div>Raised :</div>
                  <div className="text-orange-500">Rs 10000</div>
                </div>
                <div className="flex flex-col pl-6 pr-16  ">
                  <div>To Go :</div>
                  <div className="text-orange-500">Rs 10000</div>
                </div>
              </div>
              <div>
                <button onClick={()=>{ Navigate('/Causes/SingleCause')}} className="bg-orange-500 text-white py-3 px-6 rounded-full text-sm">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
