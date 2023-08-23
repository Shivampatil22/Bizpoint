import React from 'react'
import img1 from"../assets/E-catalog-design.png"
import img2 from "../assets/Google_award.png"
import img3 from "../assets/e-com-develop.png";
import img4 from "../assets/logo-design.png"
import img5 from "../assets/media_optimization.png";
import img6 from "../assets/resp_desgin.png"
import img7 from "../assets/search_engine.png"
import img8 from "../assets/web_design.png";

const Home_ourServices = () => {
  return (
    <div className="flex  flex-wrap w-full justify-around my-5">
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img1} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">E-CATALOG DESIGN</p>
        </div>
        <p className="small-desc ">
          We also design e-catalog for our customers. It would be in PDF format
          with light weight to sent it trough email.
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img2} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">GOOGLE ADWORDS</p>
        </div>
        <p className="small-desc ">
          If you wants traffic & business leads from first day of website
          launch, you can go for Google Adwords.
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img3} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">E-COMMERCE DEVELOPMENT</p>
        </div>
        <p className="small-desc ">
          Today's trend is online sale. We understand the market requirement.
          E-Commerce is a best platform to sale anything online .
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img4} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">LOGO DESIGN</p>
        </div>
        <p className="small-desc ">
          Logo design is a creative work. It is the identification sign of the
          company. We create it with creative mind
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img5} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">SOCIAL MEDIA OPTIMIZATION</p>
        </div>
        <p className="small-desc ">
          Social Media a platform where you can get unlimited visitor on your
          business page. It's a easy way for branding
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img6} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">RESPONSIVE DESIGN</p>
        </div>
        <p className="small-desc ">
          Now a days everybody is using smart phones so we develop website
          browser compatible. Browser friendly website eas
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img7} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">SEARCH ENGINE OPTIMIZATION</p>
        </div>
        <p className="small-desc ">
          Marketing of websites are too important. SEO is best way to attact new
          unknown customer from all over world.
        </p>
      </div>
      <div className="card my-5 ">
        <div className="flex w-full justify-center items-center flex-col">
          <img src={img8} className=" h-18 w-18  object-contain  "></img>
          <p className="card-title">WEBSITE DESIGNING</p>
        </div>
        <p className="small-desc ">
          We create ideas from our creative mind to design a website for your
          company according to client's requirement. 
        </p>
      </div>
    </div>
  );
}

export default Home_ourServices




{/* <div classNameName="card mx-20 my-5 pb-5">
        <div classNameName="icon">
          <img src={img1} classNameName=" h-18 w-18  object-contain  "></img>
          <div classNameName="text-[#006fff] text-2xl font-semibold my-2 title">
            E-CATALOG DESIGN
          </div>
        </div>
        <div classNameName="content">
          <p classNameName="px-2 font-normal text-slate-50 text-md">
            We also design e-catalog for our customers. It would be in PDF
            format with light weight to sent it trough email.{" "}
          </p>
          <div classNameName="cursor-pointer font-semibold hover:scale-[1.2] my-2 duration-500 ">
            Read More
          </div>
        </div>
      </div> */}