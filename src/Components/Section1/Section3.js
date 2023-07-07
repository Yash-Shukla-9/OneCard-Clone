import React from "react";

import SecCompo1 from "../Common/SecCompo1";
import Seccompo2 from "../Common/Seccompo2";
const video = "https://www.getonecard.app/images/feature/control.mp4";
const svg1 = "https://www.getonecard.app/images/feature/control_app_icon.svg";
const head = `Powerful mobile\n
 app`;
const sen = `Control all aspects of your co-branded
 credit card from the powerful OneCard app 
 - transaction limit, domestic/international 
 use, online/offline use, contactless 
 payments and much more.`;
const text = "text-right";
const justify = "justify-end";
const align = "items-end";
function Section3() {
  return (
    <div className="Sec3 flex flex-col items-center  py-[20px] mx-8 md:flex-row justify-evenly ">
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

export default Section3;
