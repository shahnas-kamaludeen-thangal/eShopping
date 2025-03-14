import { useAuth0 } from "@auth0/auth0-react";
import { LOGIN_PAGE_IMAG } from "../assets/Images/images";

import React from "react";
import Home from "./Home";

const Login = () => {
  const { loginWithPopup, loginWithRedirect, logout, isAuthenticated, user } =
    useAuth0();
  return (
    <div className="bg-orange-100 h-screen flex items-center w-full ">
      <div className="w-[580px] relative bg-white shadow-md rounded border-2 border-slate-100 m-auto items-center justify-center">
        <img
          src={LOGIN_PAGE_IMAG}
          className="rounded m-10  w-[420px] h-[400px]"
        />

        <div className="absolute top-16  m-20 w-[400px] ">
          <h1 className="text-3xl m-5 text-red-700">Welcome to E-Shopping!</h1>
          <button
            onClick={loginWithPopup}
            className="bg-blue-200 m-2 p-2 text-xl rounded-md shadow hover:transform transition-transform duration-300 hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={loginWithRedirect}
            className="bg-yellow-200 m-2 p-2 text-xl rounded-md shadow hover:transform transition-transform duration-300 hover:scale-105"
          >
            Redirect
          </button>
        </div>

        {isAuthenticated && <Home />}
      </div>
    </div>
  );
};

export default Login;
