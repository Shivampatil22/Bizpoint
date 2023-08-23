import React from "react";
import OurServices from "../components/OurServices";
const AboutUs = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <div
        className="flex items-center md:pl-40 pl-10 w-full text-slate-50 
      lg:h-[40vh] md:h-[30vh] h-40 lg:pt-0 md:pt-6 pt-12 banner font-bold md:text-[5.5rem] text-[3rem]"
      >
        <span>About Us</span>
      </div>
      <div className="flex w-full md:px-10 px-3 py-5">
        <div className="flex md:flex-row flex-col w-full p-5 px-8  bg-[#2d2d2d] rounded-xl">
          <OurServices />
          <div className="flex flex-col mt-4 w-full md:ml-6 md:px-5 px-1 py-1 content">
            <span className="text-slate-100 font-bold text-3xl ">
              Website Designing
            </span>
            <span className="text-[#006fff] mt-8 text-lg font-semibold ">
              Custom Website Designing
            </span>
            <p className="text-[#9e9e9e] text-md font-normal mt-3">
              Mixing creativity and intellect, our designers create a custom
              website design. First impression is the last impression to draw
              the attention of the net surfer. Am impressive web site is the
              main reason behind the success story. We are one of the leading
              web designing company in Delhi offering web designing service to a
              wide variety of clients.
            </p>
            <p className="text-[#9e9e9e] text-md font-normal my-1">
              You just tell us about your business and target audience. We will
              visualize your dreams into reality and you will get the best
              custom design from us.
            </p>
            <span className="text-[#006fff] mt-8 text-lg font-semibold ">
              Website Development
            </span>
            <p className="text-[#9e9e9e] text-md font-normal mt-3">
              Designing a professional website is the last process of our
              solutions. We offer an extensive range of website design and web
              development services to suit every need and requirement. From
              basic website designing to advanced e-commerce web design, we are
              there to assist you. We offer all the resources you may need to
              create a cost effective, visually appealing, and successful web
              presence. Always, our goal is to deliver only the highest quality
              services in a responsive manner and at a competitive prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
