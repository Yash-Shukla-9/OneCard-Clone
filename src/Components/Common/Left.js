import React from "react";

function Left(props) {
  return (
    <div className="left-div">
      <div className="info flex flex-col ">
        <span className="text-3xl font-medium">{props.name}</span>
        <span className="md:text-[3.5rem]  text-[2.8rem] font-bold  font-extrabold  text-[rgba(24,147,247,1)]">
          {props.onecard}
        </span>
        <div className="brnd px-2 py-2">
          <span className=" text-[#1892F7;] font-medium md:font-bold text-[18px]">
            {props.cobrand}
          </span>
        </div>
        <div className="img">
          <img
            src={props.img}
            className="align-middle w-[290px] md:w-[335px]"
            alt=""
          />
        </div>

        <div className="para  text-left w-[20rem] md:w-[25rem] my-5">
          <span className="text-[#696969;] text-[1.rem] md:text-[1.2rem] leading-[1.5rem] ">
            {props.para}
          </span>
        </div>
        <img src={props.btn} className="w-[225px] mx-auto md:mx-0" alt="" />
      </div>
    </div>
  );
}

export default Left;
