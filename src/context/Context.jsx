import React, { createContext, useState } from "react";
import { useContext } from "react";

export const NetflixContext = createContext(null);

const NetflixContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favourite, setFavourite] = useState([]);
  const footerContent = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <NetflixContext.Provider
      value={{
        footerContent,
        email,
        setEmail,
        password,
        setPassword,
        favourite,
        setFavourite
      }}
    >
      {children}
    </NetflixContext.Provider>
  );
};
export default NetflixContextProvider;

export const useNetflixContext = () => useContext(NetflixContext);
