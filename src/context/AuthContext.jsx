import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), { FavMovies: [] });
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem("user", JSON.stringify(currentUser));
      setUser(JSON.parse(localStorage.getItem("user")));
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const UseAuth = () => useContext(AuthContext);
