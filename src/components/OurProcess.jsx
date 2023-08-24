import React from "react";
import process_data from "../data/OurProcess_data";

const OurProcess = () => {
  return (
    <div className="flex w-full justify-center py-5">
      <div className="flex md:w-[90%] w-[95%] md:justify-around justify-center h-full rounded-xl bg-[#2d2d2d] flex-wrap  ">
        {process_data.map((processs, index) => {
          const { title, content } = processs;
          return (
            <div
              className="flex flex-col items-center p-5 h-full w-max"
              key={index}
            >
              <span
                className="w-10 h-10 flex justify-center items-center font-semibold 
          text-2xl bg-slate-50 text-[#151515] rounded-full"
              >
                {index + 1}
              </span>
              <span className="flex justify-center items-center w-52 h-52 rounded-full bg-[#006fff] mt-9 circle">
                <span className="text-white text-3xl font-semibold absolute circle-title p-3">
                  {title}
                </span>
                <span className="circle-content pl-5 text-slate-50 font-semibold 
                text-md flex justify-center items-center w-full h-full text-lg text-clip ">
                  {content}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProcess;
