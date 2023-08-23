import React from 'react'
import img1 from "../assets/webdesign.jpg"
import img2 from "../assets/promotion.jpg"
import img3 from "../assets/hosting.jpg"
import img4 from "../assets/domain.jpg"
const OurServices = () => {
  return (
    <div className="flex flex-col">
      <span className="text-xl text-slate-50 font-bold my-2  ml-0">OUR SERVICES</span>
      <div className="flex md:flex-col flex-wrap md:justify-around justify-start">
        <span className="my-2 mx-1 boxshadow">
          <img
            src={img1}
            className=" md:w-56 w-32  rounded-lg bg-slate-50 object-contain"
          ></img>
        </span>
        <span className="my-2 mx-1 boxshadow">
          <img
            src={img2}
            className=" md:w-56 w-32 rounded-lg bg-slate-50 object-contain"
          ></img>
        </span>
        <span className="my-2 mx-1 boxshadow">
          <img
            src={img3}
            className=" md:w-56 w-32  rounded-lg bg-slate-50 object-contain"
          ></img>
        </span>
        <span className="my-2 mx-1 boxshadow">
          <img
            src={img4}
            className=" md:w-56 w-32 rounded-lg bg-slate-50 object-contain"
          ></img>
        </span>
      </div>
    </div>
  );
}

export default OurServices
