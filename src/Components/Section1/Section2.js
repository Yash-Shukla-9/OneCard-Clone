import React from "react";

function Section2() {
  return (
    <div className="Sec2 w-full bg-black py-6 ">
      <div className="head text-center">
        <span
          className="text-[4rem] my-[4rem] bg-clip-text fill-transparent bg-red  color-[linear-gradient(0deg, rgba(39,129,224,1) 0%]"
          style={{
            backgroundImage:
              "linear-gradient(92deg,#217ee6 3%,#3187d5 44%,#69a798 70%,#fcf2a6 95%)",
          }}
        >
          No Hidden Fees Ever.
        </span>
      </div>

      <div className="span3 flex flex-col text-center leading-[2] font-[600] flex-wrap flex text-[#fff] text-[2rem] md:text-[3rem]">
        <span className="">No Joining Fees</span>
        <span>No Annual Fees</span>
        <span>No Rewards Redemmption Fees</span>
      </div>
    </div>
  );
}

export default Section2;
