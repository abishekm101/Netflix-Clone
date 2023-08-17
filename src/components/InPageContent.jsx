import React from "react";

const InPageContent = ({
  title,
  titleContent,
  tImg,
  flexDirection,
  video1,
  video2,
}) => {
  return (
    <div className="">
      <div
        className={`${flexDirection} h-[70vh] text-white bg-black flex justify-evenly items-center`}
      >
        <div className="w-[40vw] flex flex-col justify-center">
          <div className="text-5xl font-extrabold m-5">{title}</div>
          <div className="m-5">{titleContent}</div>
        </div>
        <div className="">
          <div className="">
            {/* {video1 ? (
              <video className="absolute h-48 right-48 w-80" controls loop autoPlay mute>
                <source src={video1} type="video/mp4" />
              </video>
            ) : (
              ""
            )} */}
          </div>
          <img className="h-80" src={tImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InPageContent;
