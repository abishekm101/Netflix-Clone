import React from "react";
import { useNetflixContext } from "../context/Context";

const Footer = () => {
  const { footerContent } = useNetflixContext();
  return (
    <>
      <p className="py-3">
        Questions? Call <a href="hv">000-800-919-1694</a>
      </p>
      <div className="grid place-content-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 p-2">
        {footerContent.map((link) => (
          <a key={link} href="h" className="underline text-sm font-normal">
            {link}
          </a>
        ))}
      </div>
        <select className=" w-32 h-8 bg-transparent border-2 border-gray-300 rounded-md">
          <option label="English" value="">
            English
          </option>
          <option label="हिंदी" value="">
            हिंदी
          </option>
        </select>
      <p className="p-2">Netflix India</p>
    </>
  );
};

export default Footer;
