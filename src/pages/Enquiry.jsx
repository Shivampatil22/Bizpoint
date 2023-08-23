import React, { useRef } from "react";
import OurServices from "../components/OurServices";
const Enquiry = () => {
  const company = useRef();
  const requirment = useRef();
  const email = useRef();
  const phone = useRef();
  const address = useRef();
  const spam = useRef();

  const reset = () => {
    company.current.value = "";
    requirment.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    address.current.value = "";
    spam.current.value = "";
  };
  return (
    <div className="flex w-full h-full flex-col">
      <div
        className="flex items-center md:pl-40 pl-10 w-full text-slate-50 lg:h-[40vh] 
      md:h-[30vh] h-40 lg:pt-0 md:pt-6 pt-12 banner font-bold md:text-[5.5rem] text-[2.5rem]"
      >
        <span>Send Enquiry</span>
      </div>
      <div className="flex w-full md:px-10 px-3 py-5">
        <div className="flex md:flex-row flex-col w-full p-5 px-8  bg-[#2d2d2d] rounded-xl">
          <OurServices />
          <div className="flex flex-col  w-full md:ml-6 md:px-5 px-1 py-1 content">
            <div className="flex w-full text-slate-50 justify-start text-3xl font-semibold">
              Send Enquiry
            </div>
            <form
              target="_blank"
              action="https://formsubmit.co/shivampatil222004@gmail.com"
              method="POST"
              className="flex justify-start flex-col lg:w-[40%] md:[60%] w-full md:mx-0 mx-2 mt-5"
            >
              <span className="text-slate-50 font-medium text-lg mb-2">
                Please describe your requirement
              </span>
              <textarea
                name="requirments"
                ref={requirment}
                className="h-24 rounded-lg bg-[#5c5b5b] p-2 text-white outline-none 
              font-normal text-lg overflow-auto glow"
                required
              ></textarea>
              <span className="text-slate-50 font-medium text-lg my-4 ">
                Company
              </span>
              <input
                name="Company_name"
                ref={company}
                placeholder="Enter the Company"
                type="text"
                required
                className="h-12  rounded-lg bg-[#5c5b5b] p-2 text-white outline-none font-normal text-lg glow"
              ></input>
              <span className="text-slate-50 font-medium text-lg my-4 ">
                Email Id
              </span>
              <input
                name="email"
                type="email"
                ref={email}
                placeholder="Email"
                required
                className="h-12 rounded-lg bg-[#5c5b5b] p-2 text-white outline-none font-normal text-lg glow"
              ></input>
              <span className="text-slate-50 font-medium text-lg my-4 ">
                Phone no.
              </span>
              <input
                name="phoneNo."
                placeholder=" Phone no."
                ref={phone}
                required
                className="h-12 rounded-lg bg-[#5c5b5b] p-2 text-white outline-none font-normal text-lg glow"
              ></input>
              <span className="text-slate-50 font-medium text-lg my-3">
                Address
              </span>
              <textarea
                name="address"
                ref={address}
                placeholder="Enter the address"
                required
                className="h-24 rounded-lg bg-[#5c5b5b] p-2 text-white outline-none font-normal 
                text-lg overflow-auto glow"
              ></textarea>
              <span className="text-slate-50 font-medium text-lg my-4 ">
                Fill Anti Spam Code
              </span>
              <input
                name="anti_spam_code"
                ref={spam}
                type="text"
                required
                className="h-12 rounded-lg bg-[#5c5b5b] p-2 text-white 
              outline-none font-normal text-lg glow"
              ></input>
              <span
                className="h-10 w-max px-5 flex items-center justify-center rounded-md 
              text-xl my-4 bg-[#fafbfa] text-[#101010] "
              >
                Eg46Gh
              </span>
              <div className="my-8 flex w-full justify-between flex-wrap ">
                <button
                  type="submit"
                  className="bg-slate-50 text-[#151515] font-semibold text-xl mb-5 px-8 py-2 rounded-3xl
                   hover:bg-[#006fff] hover:text-slate-50 hover:scale-110 duration-500 "
                >
                  Submit
                </button>
                <button 
                onClick={()=>{reset()}}
                className="bg-green-500 text-white font-semibold text-xl mb-5  px-8 py-2 rounded-3xl mr-5 ">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
