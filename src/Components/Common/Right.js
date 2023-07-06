import React from "react";

function Right(props) {
  return (
    <div className="right">
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

export default Right;
