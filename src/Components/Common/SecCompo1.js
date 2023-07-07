import React from "react";

function SecCompo1(props) {
  return (
    <div className={`Text flex flex-col ${props.justify} ${props.align} `}>
      <div className={`svg ${props.text}`}>
        <img src={props.svg1} className="h-auto w-[67px] max-w-full" alt="" />
      </div>

      <div className={`tet ${props.text}`}>
        <h1
          className={`text-[2rem] font-[500] ${props.text} leading-[4rem] md:text-[3.4rem] `}
        >
          {props.head}
        </h1>
        <span
          className={`${props.text} whitespace-pre-wrap  md:text-[1.6rem] text-[1.3rem] text-[#696969] text-[#000]`}
        >
          {props.sen}
        </span>
      </div>
    </div>
  );
}

export default SecCompo1;
