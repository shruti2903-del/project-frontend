import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import ExistingGroup from "./Pages/Community/ExistingGroup";
import Restauranthome from "./Pages/Restaurant/Restauranthome";
import Notification from "./Pages/User/Notification";
import Order from "./Pages/User/Order";
import Rewards from "./Pages/User/Rewards";
import Eventhome from "./Pages/Events/Eventhome";
import RestaurantRegister from "./Pages/Restaurant/RestaurantRegister";
import DocumentUpload from "./Pages/Restaurant/DocumentUpload";
import PaymentPage from "./Pages/Restaurant/PaymentPage";
import RestaurantLogin from "./Pages/Restaurant/RestaurantLogin";
import Partnerwithus from "./Pages/Partnerwithus";
import AllRestaurant from "./Pages/Restaurant/AllRestaurant";
import UserDocumentUpload from "./Pages/Restaurant/UserDocumentUpload";
import UserDash from "./Pages/Dashboard/UserDash";
import AddRestaurant from "./Pages/Dashboard/AddRestaurant";
import AllBusiness from "./Pages/Dashboard/AllBusiness";
import BusinessEdit from "./Pages/Dashboard/BusinessEdit";

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
          <Route path="/Vendorlogin" element={<Vendorlogin />} />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="/restaurantregister" element={<RestaurantRegister />} />
          <Route path="/documentupload" element={<DocumentUpload />} />
          <Route path="/partnerwithus" element={<Partnerwithus />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/userdocumentupload" element={<UserDocumentUpload />} />

          <Route path="/restaurantlogin" element={<RestaurantLogin />} />

          {/* Protected Routes */}
          <Route
            path="/loggedin/*"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {role === "user" ? (
                  <Routes>
                    <Route path="" element={<UserHome />} />
                    <Route path="communityhome" element={<CommunityHome />} />
                    <Route path="editprofile" element={<EditProfile />} />
                    <Route path="existingGroup" element={<ExistingGroup />} />
                    <Route path="vendorhome" element={<VendorHome />} />
                    <Route path="notification" element={<Notification />} />
                    <Route path="order" element={<Order />} />
                    <Route path="rewards" element={<Rewards />} />
                    <Route path="eventhome" element={<Eventhome />} />
                  </Routes>
                ) : role === "restaurant" ? ( 
                  <Routes>
                    <Route path="userdash" element={<UserDash />} />
                    <Route path="allrestaurant" element={<AllRestaurant />} />
                    <Route path="addrestaurant" element={<AddRestaurant />} />
                    <Route path="allbusiness" element={<AllBusiness />} />
                    <Route path="editbusiness" element={<BusinessEdit />} />
                  </Routes>
                ):null}
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
