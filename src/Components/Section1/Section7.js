import React from "react";
import Seccompo2 from "../Common/Seccompo2";
import SecCompo1 from "../Common/SecCompo1";
const video = "https://www.getonecard.app/images/feature/emi.mp4";
const svg1 = "https://www.getonecard.app/images/feature/emi.svg";
const head = `OneCard EMI`;
const sen = `Shop in full, pay in parts. No calls, no emails, 
no documentation. Get points on EMI 
transactions, repay EMIs with reward 
points. Manage EMIs from the EMI 
Dashboard.`;
const text = "text-right";
const justify = "justify-end";
const align = "items-end";

function Section7() {
  return (
    <div className="Sec7 flex flex-col items-center  py-[20px] mx-8 md:flex-row justify-evenly">
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

export default Section7;
