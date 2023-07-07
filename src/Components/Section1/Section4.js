import React from "react";
import SecCompo1 from "../Common/SecCompo1";
import Seccompo2 from "../Common/Seccompo2";
const video = "https://www.getonecard.app/images/CardRotation_d5.mp4";
const svg1 = "https://www.getonecard.app/images/feature/metal_icon.svg";
const head = `It's metal`;
const sentence = `5X rewards on Top 2 spend categories. 
Points are credited instantly and never 
expire. Just swipe right to redeem.No more 
rounding off, get even fractional points.
`;
const text = "text-left";

function Section4() {
  return (
    <div className="Sec4 flex flex-col items-center py-[50px] px-8 md:flex-row justify-center bg-[#F2F2F2] ">
      <SecCompo1 svg1={svg1} text={text} head={head} sen={sentence} />
      <Seccompo2 video={video} />
    </div>
  );
}

export default Section4;
