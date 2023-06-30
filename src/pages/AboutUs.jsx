import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className=" font-poppins">
      <Navbar />
      <div className="flex flex-col py-4 items-start justify-center">
        <div className="text-6xl font-bold after:absolute after:content-[''] after:items-center after:w-56 after:h-2 after:top-56 after:left-80 after:bg-orange-500 pt-2 pl-60">Our Mission</div>
        <div className="flex flex-col items-center w-5/6 py-8 text-xl px-60 leading-relaxed">
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
        </div>
      </div>
      <div className="flex flex-col py-8 items-end justify-center">
        <div className="text-6xl font-bold after:absolute after:content-[''] after:items-center after:mb-8 after:w-56 after:h-2 after:bottom-72 after:right-52 after:mr-2 pr-48 after:bg-orange-500 pt-2 pl-60">Our Vision</div>
        <div className="flex flex-col items-center w-5/6 py-8 text-xl px-20 leading-relaxed">
          <p>
          Orinova's primary goal is to protect the environment and mitigate threats to biodiversity.The organization also emphasizes coordinating local and international efforts to manage shared natural resources using a commons approach.Integrating socioeconomic and ecological processes is a key aspect of their work, considering it vital for successful livelihoods.Promoting women's engagement in governance processes is another important focus, aimed at achieving gender parity.Additionally, Orinova aims to alleviate poverty and hunger, emphasizing the anticipation, prevention, and treatment of hunger.In conclusion, Orinova invites others to join their campaign to save lives, strengthen communities, protect nature, and transform the lives of millions of families and children worldwide.

          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
