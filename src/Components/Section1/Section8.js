import React from "react";
import SecCompo1 from "../Common/SecCompo1";

import Svg from "../Common/Svg";
const Svg1 =
  "https://www.getonecard.app/images/feature/website_familycard_64c.gif";
const svg1 =
  "https://www.getonecard.app/images/feature/Family_icon_for_web.png";
const head = `MyFamily`;
const sentence = `Share limit with your family. They get their 
own co-branded OneCard with separate 
offers while you keep track and control of 
their spending. .
`;
const text = "text-left";

function Section8() {
  return (
    <div className="Sec8 flex flex-col items-center py-[50px] px-8 md:flex-row justify-evenly bg-[#F2F2F2] ">
      <SecCompo1 svg1={svg1} text={text} head={head} sen={sentence} />
      <Svg Svg1={Svg1} />
    </div>
  );
}

export default Section8;
