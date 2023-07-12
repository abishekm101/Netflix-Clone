import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const Faq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-black font-sans text-white text-2xl">
      <div
        className="flex justify-between w-[1000px] p-6  bg-customBackGround cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h1 className="">{question}</h1>
        <MdAdd className={`w-9 h-9 ${show && "rotate-45"}`} />
      </div>
      {show && (
        <div className=" w-[1000px] p-6 bg-customBackGround mt-[1px]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  ); 
};

export default Faq;