import React from "react";

function Section11() {
  return (
    <div className="Sec2 w-full py-[50px]">
      <div className=" flex flex-col justify-center items-center ">
        <h1 className="text-[4rem] font-[500]">Investors</h1>
        <span className="text-[#696969] text-[1.6rem] pb-4 text-center">
          We are backed by marquee investors who share our vision, passion, and
          commitment to <br /> first principles.
        </span>
        <div className="flex items-center justify-center gap-6 flex-wrap ">
          <img
            src="https://www.getonecard.app/images/team/matrix-logo.svg"
            className=" w-[180px]  md:w-[280px]"
            alt="Bank"
          />

          <img
            src="https://www.getonecard.app/images/team/sequoia-logo.svg"
            className=" w-[180px]  md:w-[280px]"
            alt="Bank"
          />

          <img
            src="https://www.getonecard.app/images/team/hummingbird-logo.svg"
            className=" w-[180px]  md:w-[280px]"
            alt="Bank"
          />
        </div>
      </div>
    </div>
  );
}

export default Section11;
