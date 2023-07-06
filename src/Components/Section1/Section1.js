import React from "react";
import Left from "../Common/Left";
import Right from "../Common/Right";
const head1 = "Say Hi to";
const onecard = "OneCard";
const cobrand = "Co-branded Card Issuers :";
const img =
  "https://www.getonecard.app/images/legal/Banking_partners_24thJan_dark__.png";
const para =
  " India's best metal credit card. Built with full-stack tech. Backed by the principles of simplicity transparency and giving back control to the user";

const Btn = "https://www.getonecard.app/images/icons/cta_apply_now.svg";

const video = "https://www.getonecard.app/images/say_hi_2x_d3_.mp4";

function Section1() {
  return (
    <div className="Container flex flex-col items-center md:justify-center py-[50px] mx-8 md:flex-row  ">
      <div className="left1">
        <Left
          name={head1}
          onecard={onecard}
          cobrand={cobrand}
          img={img}
          para={para}
          btn={Btn}
        />
      </div>
      <div className="right1 lg:ml-32 ">
        <Right video={video} />
      </div>
    </div>
  );
}

export default Section1;
