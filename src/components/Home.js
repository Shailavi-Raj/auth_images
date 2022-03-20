import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OtpMob from "../Pages/OtpMob";
import Password from "../Pages/Password";
import ResetPassword from "../Pages/ResetPassword";
import ResetPasswordOtp from "../Pages/ResetPasswordOtp";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/OtpMob" element={<OtpMob />} />
        <Route path="/password" element={<Password />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/reset_password_otp" element={<ResetPasswordOtp />} />
      </Routes>
    </div>
  );
};

export default Home;
