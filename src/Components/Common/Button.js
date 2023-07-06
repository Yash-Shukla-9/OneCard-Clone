import React from "react";

function Button(props) {
  return (
    <div className="bg-[#0069D9] md:flex w-24 py-1 px-2 text-white rounded-md font-semibold md:ml-6 ">
      {props.children}
    </div>
  );
}

export default Button;
