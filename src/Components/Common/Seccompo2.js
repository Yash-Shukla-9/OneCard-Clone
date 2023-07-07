import React from "react";

function Seccompo2(props) {
  return (
    <div className="Video">
      <video
        autoPlay="autoplay"
        loop="loop"
        muted="muted"
        className="w-[500px] max-w-full h-auto"
        src={props.video}
      ></video>
    </div>
  );
}

export default Seccompo2;
