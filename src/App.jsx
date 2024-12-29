import React, { useEffect, useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import OtpPage from "./Pages/OtpPage";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./components/Footer";
import UserLogin from "./Pages/User/UserLogin";
import UserSignup from "./Pages/User/UserRegister";
import ResetPassword from "./Pages/User/ResetPassword";
import ProtectedRoute from "./Pages/ProtectedRoutes";
import CommunityHome from "./Pages/Community/CommunityHome";
import EditProfile from "./Pages/User/EditProfile";
import VendorHome from "./Pages/Vendor/VendorHome";
import VendorRegister from "./Pages/Vendor/VendorRegister";
import Vendorlogin from "./Pages/Vendor/Vendorlogin";
import UserHome from "./Pages/User/UserHome";
import UserDash from "./Pages/Dashboard/UserDash";
import ExistingGroup from "./Pages/Community/ExistingGroup";
import Restauranthome from "./Pages/Restaurant/Restauranthome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, []);

  return (
    <>
      <>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/otpverify" element={<OtpPage />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/VendorRegister" element={<VendorRegister />} />
          <Route path="/login/vendor" element={<Vendorlogin />} />
          <Route path="/error" element={<PageNotFound />} />

          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/restauranthome" element={<Restauranthome />} />
          <Route path="existingGroup" element={<ExistingGroup />} />



          {/* Protected Routes */}
          <Route
            path="/loggedin/*"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {role === "user" ? (
                  <Routes>
                    {/* <Route path="" element={<UserHome />} /> */}
                    <Route path="communityhome" element={<CommunityHome />} />
                    {/* <Route path="editprofile" element={<EditProfile />} /> */}
                    {/* <Route path="existingGroup" element={<ExistingGroup />} /> */}
                    <Route path="UserDash" element={<UserDash />} />
                  </Routes>
                ) : (
                  <Routes>
                    <Route index element={<VendorHome />} />
                  </Routes>
                )}
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </>
    
   

    </>
  );
}

export default App;
