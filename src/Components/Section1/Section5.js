import React from "react";
import Seccompo2 from "../Common/Seccompo2";
import SecCompo1 from "../Common/SecCompo1";
const video = "https://www.getonecard.app/images/feature/kyc.mp4";
const svg1 = "https://www.getonecard.app/images/feature/kyc_icon.svg";
const head = `Seamless 
On-boarding`;
const sen = `Get started using a completely digital on-
boarding process, and activate your 
OneCard in less than 5 minutes.`;
const text = "text-right";
const justify = "justify-end";
const align = "items-end";

function Section5() {
  return (
    <div className="Sec5 flex flex-col items-center  py-[20px] mx-8 md:flex-row justify-evenly ">
      <Seccompo2 video={video} />
      <SecCompo1
        svg1={svg1}
        head={head}
        sen={sen}
        text={text}
        justify={justify}
        align={align}
      />
    </div>
  );
}

export default Section5;
