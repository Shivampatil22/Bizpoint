import React from "react";
import Home_ourServices from "../components/Home_ourServices";
import Carousel from "../components/Carousal";
import OurProcess from "../components/OurProcess";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="md:h-[30rem] h-64  flex">
        <Carousel />
      </div>
      <div
        className="text-slate-50 flex w-full justify-center pt-4 text-3xl font-semibold 
        border-solid border-b-[1px] border-emerald-50 mt-16"
      >
        <span className=" border-solid border-b-4 border-[rgb(0,8,255)]">
          OUR SERVICES
        </span>
      </div>
      <Home_ourServices />
      <div
        className="text-slate-50 flex w-full justify-center pt-4 text-3xl font-semibold 
        border-solid border-b-[1px] border-emerald-50 mt-8"
      >
        <span className=" border-solid border-b-4 border-[rgb(0,8,255)]">
          OUR PROCESS
        </span>
      </div>
      <OurProcess />
    </div>
  );
};

export default Home;
