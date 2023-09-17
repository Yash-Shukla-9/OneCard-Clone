import React, { useState, memo } from "react";

import Button from "../Common/Button";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header() {
  console.log("re- render Header");

  const Link = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Careers" },
    { name: "Offers" },
    { name: "Blog" },
    { name: "FAQ" },
    { name: "Contact Us" },
  ];

  let [open, setopen] = useState(false);

  return (
    <div className="Header pt-2 w-fulls">
      <div className="Navbar md:flex md:items-center fixed top-0 bg-white z-[5] w-full justify-around">
        <div className="img-nav flex items-center justify-between px-8">
          <img
            src="https://www.getonecard.app/images/logo_black.svg"
            className="navbar-img mt-4 w-16 mcursor-pointer"
            alt=""
          />
          <div className="flex items-center md:hidden">
            <div
              className="humg flex justify-self-center self-center mr-3"
              onClick={() => {
                setopen(!open);
              }}
            >
              {open ? (
                <RxCross2 size="1.5rem" className="md:hidden " />
              ) : (
                <IoMenu size="1.5rem" className="md:hidden " />
              )}
            </div>
            <Button className={` hidden  ${open ? "hidden" : "block"}`}>
              Apply Now
            </Button>
          </div>
        </div>
        <div className="right-ul md:py-4 md:flex md:items-center">
          <ul
            className={`u-list font-[450]  md:flex md:items-center md:pb-0  absolute md:static bg-white 
        md:z-auto z-[1] w-full md:pl0 text-center md:left-0 pb-12 gap-x-9 sm:gap-x-4 overflow-hidden ${
          open
            ? "top-15"
            : "top-[-400px]  md:opacity-100 opacity-0 font-extrabold"
        } `}
          >
            {Link.map((link, index) => {
              return (
                <li className="list   md:my-0 my-4 " key={index}>
                  {link.name}
                </li>
              );
            })}
            <Button>Apply Now</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
