import React from "react";

const navbar = () => {
  return (
    <div className=" pb-4  ">
      <div className="flex justify-around items-center pt-6 text-lg">
        <img src="#" className="">
        </img>
        <div className=" pr-12 font-Poppins font-medium justify-evenly ml-6 text-gray-600">
          <ul className="flex list-none">
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">Home</li>
        <li  className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">About</li>
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">Services</li>
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">Events</li>
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">Blogs</li>
        <li className="pr-6 pl-3 hover:text-orange-500 transition-all delay-100 ease-in cursor-pointer">Contact us</li>
        </ul>

        </div>
        <div className="pr-2 border-2 border-orange-500 hover:bg-transparent text-white  hover:border-orange-500 hover:text-orange-500 bg-orange-500 transition delay-100 ease-in" >
          <button className=" py-2 px-5 font-medium text-xl  ">Donate Now</button>
        </div>
      </div>

    </div>
  );
};

export default navbar;
