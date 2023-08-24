import React from 'react'
import services_data from '../data/Ourservices_data';

const Home_ourServices = () => {
  return (
    <div className="flex  flex-wrap w-full justify-around my-5">
      {
        services_data.map((service,index)=>{
          const {img,title,content}=service
          return (
            <div className="card my-5 " key={index}>
              <div className="flex w-full justify-center items-center flex-col">
                <img src={img} className=" h-18 w-18  object-contain  "></img>
                <p className="card-title">{title}</p>
              </div>
              <p className="small-desc ">
                {content}
              </p>
              <span className='read_more'>Read more</span>
            </div>
          );
        })
      }

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