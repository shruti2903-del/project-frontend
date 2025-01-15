import React from "react";
import LoggedInUserNavbar from "../components/LoggedInUserNavbar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Partnerwithus() {
    const navigate = useNavigate()
  return (
    <>
      {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />}

      <div className="container  min-vh-100">
        <div className="row text-center d-flex justify-content-center">
          <h2 className="fw-bold">Partner With Us</h2>
        </div>
        <div className="row d-flex justify-content-around g-2">
          <div className="col-md-1 col-sm-12"></div>

          <div
            className="col-md-4 col-sm-12 text-center my-5 shadow-lg p-5 mb-5 rounded py-5"
            id="content"
          >
            <div className="container">
              <img
                src="assets/images/auth/restaurantposter.avif"
                className="h-50 w-50"
              />
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  marginTop: "12px",
                  maxWidth: "100%",
                }}
              >
                Restaurant
              </h4>
              <button
                type="button"
                onClick={(e) => {
                  navigate("/restaurantlogin");
                }}
                className="btn text-white d-inline-block fw-semibold mt-2 w-100 btn-success"
               
              >
                Restaurant Login
              </button>
              <hr/>
              <p>Don't have a Restaurant Account?</p>
              <a
                href="/restaurantregister"
              className="text-decoration-none text-success fw-semibold"
              >
                Sign up
              </a>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-12 text-center my-5 shadow-lg p-5 mb-5 rounded py-5"
            id="content"
          >
            <div className="container">
              <img
                src="assets/images/auth/vendorposter.svg"
                className="h-50 w-50"
              />
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  marginTop: "12px",
                  maxWidth: "100%",
                }}
              >
                Vendor
              </h4>
              <button
                type="button"
                onClick={(e) => {
                  navigate("/Vendorlogin");
                }}
                className="btn text-white d-inline-block fw-semibold mt-2 w-100 btn-success"
               
              >
                Vendor Login
              </button>
              <hr/>
              <p>Don't have a Vendor Account?</p>
              <a
                href="/VendorRegister"
              className="text-decoration-none text-success fw-semibold"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="col-md-1 col-sm-12"></div>
        </div>
      </div>
    </>
  );
}
