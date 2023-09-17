import React from "react";

function Section10() {
  console.log("re- render section 10");

  return (
    <div className="Sec2 w-full bg-[#F2F2F2] py-[50px]">
      <div className=" flex flex-col justify-center items-center ">
        <h1 className="md:text-[4rem] text-[2.8rem] font-[500]">
          Banking Partners
        </h1>
        <span className="text-[#696969] text-[1.6rem] pb-4 text-center">
          OneCard is a co-branded credit card issued by RBI approved Banks and
          Financial <br /> Institutions in partnership with OneCard
        </span>
        <img
          src="https://www.getonecard.app/images/legal/Banking_partners_24thJan_dark__.png"
          className="w-[250px] md:w-[400px]"
          alt="Bank"
        />
      </div>
    </div>
  );
}

export default Section10;
