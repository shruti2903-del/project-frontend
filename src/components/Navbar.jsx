import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">
             <img
              src="/assets/images/auth/logo.webp"
              style={{ maxWidth: "80%" }}
            />  
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
             
              <li className="nav-item">
                <a
                  className="nav-link active fw-semibold fs-5"
                  aria-current="page"
                  href="/partnerwithus"
                > Partner with Us
                  {/* <img
                    src="/assets/images/auth/housedoor.svg"
                    className="mx-1"
                    style={{ height: "30px", width: "30px" }}
                  /> */}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active  "
                  aria-current="page"
                  href="/login"
                >
                  <img
                    src="/assets/images/auth/person.svg"
                    className="mx-1"
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
