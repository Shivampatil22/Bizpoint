import React from "react";
import OurServices from "../components/OurServices";
const ContactUs = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <div
        className="flex items-center md:pl-40 pl-10 w-full text-slate-50 
      lg:h-[40vh] md:h-[30vh] h-40 lg:pt-0 md:pt-6 pt-12 banner font-bold md:text-[5.5rem] text-[3rem]"
      >
        <span>Contact Us</span>
      </div>
      <div className="flex w-full md:px-10 px-3 py-5">
        <div className="flex md:flex-row flex-col w-full p-5 px-8  bg-[#2d2d2d] rounded-xl">
          <OurServices />
          <div className="flex flex-col justify-start items-start mt-4 w-full md:ml-6 md:px-5 px-1 py-1 content">
            <span className="text-slate-100 font-bold text-[2.5rem] ">
              Contact Us
            </span>
            <span className="text-[#006fff] mt-3 text-xl font-semibold mb-5 ">
              E-Brand Promotech
            </span>
            <div className="flex w-full flex-wrap">
              <span className="text-slate-50 font-semibold text-xl">
                Moblie:
              </span>
              <span className="text-slate-50 font-light  text-xl mx-3">
                +91 9891044661, 9868987745{" "}
              </span>
            </div>
            <div className="flex w-full flex-wrap my-3">
              <span className="text-slate-50 font-semibold text-xl">
                Email:
              </span>
              <span className="text-slate-50 font-light  text-xl mx-3">
                ebrandindia@gmail.com, arun@ebrandindia.com
              </span>
            </div>
            <div className="flex w-full flex-wrap my-3">
              <span className="text-slate-50 font-semibold text-xl">
                Office Address
              </span>
              <span className="text-slate-50 font-light  text-xl mx-3">
                229, Matrix Tower, Sector 132, Noida, 201301
              </span>
            </div>
            <div className="flex w-full flex-wrap my-3">
              <span className="text-slate-50 font-semibold text-xl">
                Website:
              </span>
              <span className="text-slate-50 font-light  text-xl mx-3">
                www.ebrandindia.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
