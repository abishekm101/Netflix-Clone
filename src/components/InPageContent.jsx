import React from "react";

const InPageContent = ({ title, titleContent, tImg, flexDirection }) => {
  return (
    <div className="">
      <div
        className={`${flexDirection} h-[70vh] text-white bg-black flex justify-evenly items-center`}
      >
        <div className="w-[40vw] flex flex-col justify-center">
          <div className="text-5xl font-extrabold m-5">{title}</div>
          <div className="m-5">{titleContent}</div>
        </div>
        <img className="h-80" src={tImg} alt="" />
      </div>
    </div>
  );
};

export default InPageContent;
