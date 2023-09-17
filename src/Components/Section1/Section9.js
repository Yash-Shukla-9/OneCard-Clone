import React from "react";
import Card from "../Common/Card";

function Section9() {
  console.log("re- render section 9");

  return (
    <div className="Sec9 py-[50px]">
      <div className="Blog text-center my-4 text-[3.5rem] font-[500]">
        <span className="text-[#2C2C2C]">
          From Our <span className="text-[#0092F7]">Blog</span>{" "}
        </span>
      </div>
      <div className="Sec9right ">
        <div className="explore ml-[14rem] "> Explore Latest</div>
        <Card />
        <div className="flex justify-center ">
          <button className="  bg-[#0069D9] flex justify-center items-center  py-3 px-8 text-white rounded-md font-semibold ">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section9;
