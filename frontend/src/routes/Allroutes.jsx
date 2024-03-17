import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Bmicalculation from "../pages/Bmicalculation";
import History from "../pages/Bmicalculation";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bmicalculation" element={<Bmicalculation />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
