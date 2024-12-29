import React, { useState } from "react";
import LoggedInUserNavbar from "../../components/LoggedInUserNavbar";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Sidebar from "../../components/Sidebar";

export default function EditProfile() {
  const [image, setImage] = useState(
    "http://bootdey.com/img/Content/avatar/avatar1.png"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        alert("File size must be less than 500 KB.");
        return;
      }
      const imageData = URL.createObjectURL(file);
      setImage(imageData);
      localStorage.setItem("userImage", imageData);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
         
          <div className="col-md-3 col-sm-4 bg-light border-end">
            <Sidebar />
          </div>
  
          <div className="col-md-9 col-sm-8 mt-3">
            {/* {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />} */}
            <div className="container">
              <div className="row text-center d-flex justify-content-center">
                <h1 className="fw-bold">Edit Your Profile</h1>
              </div>
              <div className="container-xl mt-3">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card mb-4 shadow">
                      <div className="card-header bg-success text-white fw-bold text-center fs-4">Account Details</div>
                      <div className="card-body">
                        <form>
                          <div className="row">
                            <div className="col-md-8 col-sm-12 mt-4">
                              <div className="row gx-3 mb-1">
                                <div className="col-md-6 col-sm-12">
                                  <label
                                    className="small fw-bold mb-1"
                                    htmlFor="inputFirstName"
                                  >
                                    First Name
                                  </label>
                                  <Input
                                    id="inputFirstName"
                                    type="email"
                                    placeholder="First Name"
                                  />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <label
                                    className="small fw-bold mb-1"
                                    htmlFor="inputLastName"
                                  >
                                    Last Name
                                  </label>
                                  <Input
                                    id="inputLastName"
                                    type="text"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
  
                              <div className="row gx-3">
                                <div className="col-md-6 col-sm-12">
                                  <label
                                    className="small fw-bold mb-1"
                                    htmlFor="inputAddress1"
                                  >
                                    Address Line 1
                                  </label>
                                  <Input
                                    id="inputAddress1"
                                    type="text"
                                    placeholder="Apt, suite, etc."
                                  />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <label
                                    className="small fw-bold mb-1"
                                    htmlFor="inputAddress2"
                                  >
                                    Address Line 2
                                  </label>
                                  <Input
                                    id="inputAddress2"
                                    type="text"
                                    placeholder="Street Address"
                                  />
                                </div>
                              </div>
                            </div>
  
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center text-center">
                              <div className="w-75 shadow p-3 rounded-3 my-3">
                                <img
                                  className="img-account-profile rounded-circle mb-1"
                                  src={image}
                                  alt="Profile"
                                  style={{
                                    height: "80px",
                                    width: "80px",
                                  }}
                                />
                                <div className="small font-italic text-muted">
                                  <p style={{ fontSize: "12px" }}>
                                    JPG or PNG no larger than 500 KB
                                  </p>
                                </div>
                                <input
                                  type="file"
                                  id="image-upload"
                                  className="d-none"
                                  accept="image/jpeg, image/png"
                                  onChange={handleImageChange}
                                />
                                <button
                                  type="button"
                                  className="btn mt-1 fw-semibold text-white bg-success"
                                  
                                  onClick={() =>
                                    document.getElementById("image-upload").click()
                                  }
                                >
                                  Upload your image
                                </button>
                              </div>
                            </div>
                          </div>
  
                          <div className="row gx-3 mb-1">
                            <div className="col-md-6">
                              <label
                                className="small fw-bold mb-1"
                                htmlFor="inputCity"
                              >
                                City
                              </label>
                              <Input
                                id="inputCity"
                                type="text"
                                placeholder="Enter your City"
                              />
                            </div>
  
                            <div className="col-md-6">
                              <label
                                className="small fw-bold mb-1"
                                htmlFor="inputState"
                              >
                                State
                              </label>
                              <Input
                                id="inputState"
                                type="text"
                                placeholder="Enter your state"
                              />
                            </div>
                          </div>
  
                          <div className="mb-1">
                            <label
                              className="small fw-bold mb-1"
                              htmlFor="inputSocialLink"
                            >
                              Social Media Link (Optional)
                            </label>
                            <Input
                              id="inputSocialLink"
                              type="text"
                              placeholder="Enter link"
                            />
                          </div>
  
                          <div className="row gx-3 mb-1">
                            <div className="col-md-6">
                              <label
                                className="small fw-bold mb-1"
                                htmlFor="inputPinCode"
                              >
                                Pin Code
                              </label>
                              <Input
                                id="inputPinCode"
                                type="tel"
                                placeholder="Enter your pin code"
                              />
                            </div>
  
                            <div className="col-md-6">
                              <label
                                className="small fw-bold mb-1"
                                htmlFor="inputBirthday"
                              >
                                Birthday
                              </label>
                              <Input
                                id="inputBirthday"
                                type="date"
                                name="birthday"
                                placeholder="Enter your birthday"
                              />
                            </div>
                          </div>
  
                          <button
                            type="submit"
                            className="btn mt-3 w-100 fw-semibold text-white bg-success"
                          >
                            Save Changes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
