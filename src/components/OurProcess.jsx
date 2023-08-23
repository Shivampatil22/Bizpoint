import React from "react";

const OurProcess = () => {
  return (
    <div className="flex w-full justify-center py-5">
      <div className="flex md:w-[90%] w-[95%] md:justify-around justify-center h-full rounded-xl bg-[#2d2d2d] flex-wrap     ">
        <div className="flex flex-col items-center p-5 h-max w-max">
          <span
            className="w-10 h-10 flex justify-center items-center font-semibold 
          text-2xl bg-slate-50 text-[#151515] rounded-full"
          >
            1
          </span>
          <span className="flex justify-center items-center w-52 h-52 rounded-full bg-[#006fff] mt-9 circle">
            <span className="text-white text-3xl font-semibold absolute circle-title ">
              PLANNING
            </span>
            <span className="circle-content pl-5 text-slate-50 font-semibold text-xl flex justify-center items-center w-full h-full">
              Project Analysis and Consultation
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center p-5 h-full w-max">
          <span
            className="w-10 h-10 flex justify-center items-center font-semibold 
          text-2xl bg-slate-50 text-[#151515] rounded-full"
          >
            2
          </span>
          <span className="flex justify-center items-center w-52 h-52 rounded-full bg-[#006fff] mt-9 circle">
            <span className="text-white text-3xl font-semibold absolute circle-title ">
              DESIGN
            </span>
            <span className="circle-content pl-5 text-slate-50 font-semibold text-xl flex justify-center items-center w-full h-full">
              Wireframe,Design Concepts,Revisions &Finalisation
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center p-5 h-full w-max">
          <span
            className="w-10 h-10 flex justify-center items-center font-semibold 
          text-2xl bg-slate-50 text-[#151515] rounded-full"
          >
            3
          </span>
          <span className="flex justify-center items-center w-52 h-52 rounded-full bg-[#006fff] mt-9 circle">
            <span className="text-white text-3xl font-semibold absolute circle-title ">
              Development
            </span>
            <span className="circle-content pl-5 text-slate-50 font-semibold text-md flex justify-center items-center w-full h-full">
              XHTML/ CSS, Content Integration ,Programming code for custom
              requirments
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center p-5 h-full w-max">
          <span
            className="w-10 h-10 flex justify-center items-center font-semibold 
          text-2xl bg-slate-50 text-[#151515] rounded-full"
          >
            4
          </span>
          <span className="flex justify-center items-center w-52 h-52 rounded-full bg-[#006fff] mt-9 circle">
            <span className="text-white text-3xl font-semibold absolute circle-title flex items-center justify-center ">
              TESTING
            </span>
            <span className="circle-content pl-5 text-slate-50 font-semibold text-xl flex justify-center items-center w-full h-full">
              Testing
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center p-5 h-full w-max">
          <span
            className="w-10 h-10 flex justify-center items-center font-semibold 
          text-2xl bg-slate-50 text-[#151515] rounded-full"
          >
            5
          </span>
          <span className="flex justify-center items-center w-52 h-52 rounded-full bg-[#006fff] mt-9 circle ">
            <span className="text-white text-3xl font-semibold absolute circle-title flex pl-5">
              DELIVERY & SUPPORT
            </span>
            <span className="circle-content pl-5 text-slate-50 font-semibold text-xl flex justify-center items-center w-full h-full">
              Delivery & Support
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
