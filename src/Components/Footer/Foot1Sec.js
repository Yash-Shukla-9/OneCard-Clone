import React from "react";
import Onecardfoot from "./Onecardfoot";
import ImpLinks from "./ImpLinks";
import Company from "./Company";
function Foot1Sec() {
  return (
    <div className="foot1 w-full flex justify-between flex-col items-center py-[50px]">
      <div className="box flex justify-center items-center flex-col">
        <img
          src="https://www.getonecard.app/images/logo_white.svg"
          className="w-[65px] py-2"
          alt=""
        />
        <img
          src="https://www.getonecard.app/images/icons/crafted_with_love.svg"
          alt=""
          className="my-[20px] w-[350px]"
        />
        <span className="text-[#0093F7] text-[2.5rem] py-4">
          We are all ears!
        </span>

        <div className="text-center py-4 text-white text-[1.25rem]">
          We are a new kid on the block, eager to learn. <br /> All ideas and
          suggestions are welcome.
        </div>

        <img
          src="https://www.getonecard.app/images/icons/cta_apply_now.svg"
          className="w-[200px] h-[50px] my-[20px]"
          alt=""
        />
        <div className="text-white text-[1.2rem] my-[10px]">Follow Us On</div>

        {/* Social icons of Footer ------------------ */}

        <div className="social flex items-center gap-6">
          <img
            src="https://www.getonecard.app/images/icons/footer-social-facebook.svg"
            className="w-[35px]"
            alt="fb"
          />
          <img
            src="https://www.getonecard.app/images/icons/footer-social-twitter.svg"
            className="w-[35px]"
            alt="Tweeet"
          />
          <img
            src="https://www.getonecard.app/images/icons/footer-social-instagram.svg"
            className="w-[35px]"
            alt="insta"
          />
          <img
            src="https://www.getonecard.app/images/icons/footer-social-linkedin.svg"
            className="w-[35px]"
            alt="linkdn"
          />
          <img
            src="https://www.getonecard.app/images/icons/footer-social-youtube.svg"
            className="w-[45px]"
            alt="Youtube"
          />
        </div>
      </div>
      <div className="line flex md:flex-row flex-col gap-[4rem] md:gap-[10rem] md:mx-6 justify-between mt-[8rem] ">
        <Onecardfoot />
        <ImpLinks />
        <Company />
      </div>
      <div className="Last mt-[6rem]">
        <img
          src="https://www.getonecard.app/images/legal/Banking_partners_28Feb.png"
          alt=""
          className="md:w-[450px] w-[300px]"
        />

        <div className="the my-[30px] items-center justify-center flex gap-2">
          <img
            src="https://www.getonecard.app/images/about/das-iso27001.jpg"
            className="w-[50px]"
            alt=""
          />
          <img
            src="https://www.getonecard.app/images/about/visa_service_provider.png"
            className="w-[50px]"
            alt=""
          />
          <img
            src="https://www.getonecard.app/images/about/pci_dss.jpg"
            className="w-[50px]"
            alt=""
          />
        </div>
        <span className="text-center text-[0.9rem] md:text-[1.3rem] text-white">
          Copyright © 2023 OneConsumer Services Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}

export default Foot1Sec;
