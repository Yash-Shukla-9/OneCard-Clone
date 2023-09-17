import React from "react";
import SecCompo1 from "../Common/SecCompo1";
import Seccompo2 from "../Common/Seccompo2";
const video = "https://www.getonecard.app/images/feature/rewards.mp4";
const svg1 = "https://www.getonecard.app/images/feature/rewards_icon.svg";
const head = `5X rewarxds on your \n top
spends `;
const sentence = `A co-branded credit card that is exclusive,
 and exquisitely crafted with metal,
 because you deserve only the best. Why
 settle for plastic cards anymore?`;
const text = "text-left";
function Section6() {
  return (
    <div>
      <div className="Sec4 flex flex-col items-center py-[50px] px-8 md:flex-row justify-evenly bg-[#F2F2F2] ">
        <SecCompo1 svg1={svg1} text={text} head={head} sen={sentence} />
        <Seccompo2 video={video} />
        <p>{`Hi,\nCurtis!`}</p>
      </div>
    </div>
  );
}

export default Section6;
