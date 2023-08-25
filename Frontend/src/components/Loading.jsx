import React from "react";
import ngo from "../assets/ngo.png";

const Loading = () => {
  return (
    <div className=" h-screen">
      <div className="flex flex-col items-center  ">
        <img src={ngo} alt="" className="w-[40vw] mt-12 text-center " />
        <div className="bottom-40 left-14 relative flex flex-col items-center">
        <div className="w-32 h-32 border-t-8 border-b-8 border-orange-500 rounded-full animate-spin"></div>
        <div>Loading</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
