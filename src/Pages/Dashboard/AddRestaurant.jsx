import React, { useState } from "react";
import DashSideBar from "../../components/DashSideBar";
import DashNavbar from "../../components/DashNavbar";
import Input from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddRestaurant() {
  const [media, setmedia] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    description: "",
    contactPerson: "",
    phoneNumber: "",
    email: "",
    businessAddress:"",
    city:"",
    state:"",
    country: "India",
    zipCode: "",
    fssai: null,
    gst: null,
    pancard: null,
    websiteurl: "",
    socialmedialinks: [{ name: "", link: "" }],
    openingdate: "",
    openingHour: "",
    closingHour: "",
    cuisineType: "",
    priceRange: "",
    licenseNumber: "",
    seatingCapacity: "",
    reservationPolicy: "",
    takeoutavailability: "",
    paymentMethod: "",
    parkingOptions: "",
    date: "",
    media: [],
    mediaPreviews: []
  });

  const [errors, setErrors] = useState({});

  const addSocialMediaLink = () => {
    setFormData((prevData) => ({
      ...prevData,
      socialmedialinks: [...prevData.socialmedialinks, { name: "", link: "" }],
    }));
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;

    if (name === "name" || name === "link") {
      const updatedLinks = [...formData.socialmedialinks];
      updatedLinks[index][name] = value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        socialmedialinks: updatedLinks,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({ ...prev, [name]: "Only PDF files are allowed." }));
      return;
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName)
      newErrors.businessName = "Business Name is required.";
    if (!formData.businessType)
      newErrors.businessType = "Business Type is required.";
    if (!formData.contactPerson)
      newErrors.contactPerson = "Contact Person is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is required.";
    if (!formData.fssai) newErrors.fssai = "FSSAI document is required.";
    if (!formData.gst) newErrors.gst = "GST document is required.";
    if (!formData.pancard) newErrors.pancard = "PANCARD document is required.";
    if (!formData.licenseNumber)
      newErrors.licenseNumber = "License or Registration Number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateOperatingHours = () => {
    const { openingHour, closingHour } = formData;

    if (!openingHour || !closingHour) return "N/A"; // Handle incomplete data

    const [openHour, openMinute] = openingHour.split(":").map(Number);
    const [closeHour, closeMinute] = closingHour.split(":").map(Number);

    const openTime = openHour * 60 + openMinute; // Convert to minutes
    const closeTime = closeHour * 60 + closeMinute;

    const totalMinutes =
      closeTime >= openTime
        ? closeTime - openTime
        : 1440 - openTime + closeTime; // Handle overnight hours

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`;
  };

  const formatOperatingTime = () => {
    const { openingHour, closingHour } = formData;

    if (!openingHour || !closingHour) return "N/A"; // Handle missing data

    return `${openingHour} - ${closingHour}`; // Format as "HH:mm - HH:mm"
  };

  const handleMediaChange = (event) => {
    const newFiles = Array.from(event.target.files); // Convert the FileList to an array
    setFormData((prev) => ({
      ...prev,
      media: [...prev.media, ...newFiles], // Append new files to the existing ones
    }));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setmedia((prevFiles) => [...prevFiles, ...selectedFiles]);
    setSelectedFiles([]);
  };

  const handleRemoveFile = (fileName) => {
    setmedia((prevFiles) =>
      prevFiles.filter(({ file }) => file.name !== fileName)
    );
  };

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();

    const submitData = {

      businessDetails: {
        Website_URL: formData.websiteurl,

        Social_Media_Links: formData.socialmedialinks,
        Opening_Date: formData.openingdate,
        Operating_Hours: calculateOperatingHours(),
        Operating_time: formatOperatingTime(),
        Cuisine_Type: formData.cuisineType,
        Price_Range: formData.priceRange,
        License_or_Registration_no: formData.licenseNumber,
        Seating_Capacity: formData.seatingCapacity,
        Reservation_Policy: formData.reservationPolicy,
        Availability: formData.takeoutavailability,
        Payment_Methods_Accepted: formData.paymentMethod,
        Parking_Options: formData.parkingOptions,
      },
      business: {
      userid: localStorage.getItem("id"),

        businessName: formData.businessName,
        businessType: formData.businessType,
        description: formData.description,
        businessAddress: formData.businessAddress,
        city: formData.city,
        state: formData.state,        
        country: formData.country,
        zipCode: formData.zipCode,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        isVendor: "false"

      },
      fssai: formData.fssai,
      gst: formData.gst,
      pancard: formData.pancard,
      media: formData.media,
    };
   
    const business = JSON.parse(JSON.stringify(submitData.business));
    const businessDetails = JSON.parse(JSON.stringify(submitData.businessDetails));

    const media = submitData.media.map(file => ({
      file: file
    }));

    const fssaiFile = submitData.fssai ? {
      file: submitData.fssai,
    } : null;

    const gstFile = submitData.gst ? {
      file: submitData.gst,
    } : null;

    const pancardFile = submitData.pancard ? {
      file: submitData.pancard,
    } : null;

    // Log the final structure
    console.log({
      businessDetails: businessDetails,
      business: business,
      fssai: fssaiFile,
      gst: gstFile,
      pancard: pancardFile,
      media: media,  // Media as an array of objects with metadata
    });

    // Continue with FormData and submission (as you already have)
    const formDataObj = new FormData();

    // Append businessDetails and business as JSON
    formDataObj.append("businessDetails", JSON.stringify(businessDetails));
    formDataObj.append("business", JSON.stringify(business));

    // Append the file fields (fssai, gst, pancard)
    if (fssaiFile) formDataObj.append("fssai", fssaiFile.file);
    if (gstFile) formDataObj.append("gst", gstFile.file);
    if (pancardFile) formDataObj.append("pancard", pancardFile.file);

    // Append the media files directly under 'media' key
    if (media.length > 0) {
      media.forEach((file) => {
        formDataObj.append("media", file.file);
      });
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}business/createbusinesswithrestro`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      if (
        response.data.statusCode === 200 ||
        response.data.statusCode === 201 ||
        response.data.status === "success"
      ) {
        console.log("Restaurant added successfully!", response.data.data);
        navigate('/loggedin/allbusiness')
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <>
      <div id="wrapper">
        <DashSideBar />
        <div id="content-wrapper">
          <div id="content">
            <DashNavbar />
            <div className="container-fluid">
              <div className="align-items-center mb-4">
                <h1 className="h2 text-center text-dark fw-bold">
                  Add Restaurant
                </h1>
              </div>

              <div className="row justify-content-center mb-4">
                <form onSubmit={handleSubmit}>
                  <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded mb-4">
                      <div className="card-body p-4">
                        <h5 className="fs-4 fw-bold mb-0 text-primary">
                          General Information
                        </h5>
                        <hr className="border border-dark border-2" />
                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Business Name</label>
                            <Input
                              type="text"
                              name="businessName"
                              placeholder="Enter your Business Name"
                              value={formData.businessName}
                              onChange={(event) => handleChange(null, event)}
                            />
                            {errors.businessName && (
                              <div className="text-danger">
                                {errors.businessName}
                              </div>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Business Type</label>
                            <select
                              className="form-select"
                              name="businessType"
                              value={formData.businessType}
                              onChange={(event) => handleChange(null, event)}
                            >
                              <option className="text-secondary" value="">
                                --Select Category--
                              </option>
                              <option value="Restaurant">Restaurant</option>
                              <option value="Vendor">Vendor</option>
                              <option value="Spa Manager">Spa Manager</option>
                            </select>
                            {errors.businessType && (
                              <small className="text-danger">
                                {errors.businessType}
                              </small>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Description</label>
                            <textarea
                              className="form-control"
                              placeholder="Describe your business"
                              onChange={(event) => handleChange(null, event)}
                              value={formData.description}
                              name="description"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Contact Person</label>
                            <Input
                              type="text"
                              placeholder="Enter Name"
                              name="contactPerson"
                              value={formData.contactPerson}
                              onChange={(event) => handleChange(null, event)}
                            />
                            {errors.contactPerson && (
                              <div className="text-danger">
                                {errors.contactPerson}
                              </div>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Phone Number</label>
                            <Input
                              type="text"
                              placeholder="Enter your Phone Number"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={(event) => handleChange(null, event)}
                            />
                            {errors.phoneNumber && (
                              <div className="text-danger">
                                {errors.phoneNumber}
                              </div>
                            )}
                          </div>

                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Email</label>
                            <Input
                              type="text"
                              placeholder="Enter your Email"
                              name="email"
                              value={formData.email}
                              onChange={(event) => handleChange(null, event)}
                            />
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Address</label>
                            <Input
                              type="text"
                              placeholder="Lane/Street/Appartment"
                              name="businessAddress"
                              value={formData.businessAddress}
                              onChange={(event) => handleChange(null, event)}
                            />
                            {errors.country && (
                              <div className="text-danger">
                                {errors.country}
                              </div>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">City</label>
                            <Input
                              type="text"
                              name="city"
                              placeholder="Enter your City"
                              value={formData.city}
                              onChange={(event) => handleChange(null, event)}
                            />
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">State</label>
                            <Input
                              type="text"
                              name="state"
                              placeholder="Enter your State"
                              value={formData.state}
                              onChange={(event) => handleChange(null, event)}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Country</label>
                            <Input
                              type="text"
                              placeholder="Enter your Country"
                              name="country"
                              value={formData.country}
                              onChange={(event) => handleChange(null, event)}
                            />
                            {errors.country && (
                              <div className="text-danger">
                                {errors.country}
                              </div>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Zip Code</label>
                            <Input
                              type="text"
                              name="zipCode"
                              placeholder="Enter your Zip Code"
                              value={formData.zipCode}
                              onChange={(event) => handleChange(null, event)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded mb-4">
                      <div className="card-body p-4">
                        <h5 className="fs-4 fw-bold mb-0 text-primary">
                          Documents Upload
                        </h5>
                        <hr className="border border-dark border-2" />
                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">FSSAI</label>
                            <Input
                              type="file"
                              className="form-control"
                              name="fssai"
                              onChange={handleFileChange}
                            />
                            {errors.fssai && (
                              <div className="text-danger">{errors.fssai}</div>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">GST</label>
                            <Input
                              type="file"
                              className="form-control"
                              name="gst"
                              onChange={handleFileChange}
                            />
                            {errors.gst && (
                              <div className="text-danger">{errors.gst}</div>
                            )}
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">PANCARD</label>
                            <Input
                              type="file"
                              className="form-control"
                              name="pancard"
                              onChange={handleFileChange}
                            />
                            {errors.pancard && (
                              <div className="text-danger">
                                {errors.pancard}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded mb-4">
                      <div className="card-body p-4">
                        <h5 className="fs-4 fw-bold mb-0 text-primary">
                          Business Details
                        </h5>
                        <hr className="border border-dark border-2" />

                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Website URL</label>
                            <Input
                              type="text"
                              name="websiteurl"
                              placeholder="Enter your website URL"
                              value={formData.websiteurl}
                              onChange={(event) => handleChange(null, event)}
                            />
                          </div>

                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Opening Date</label>
                            <Input
                              type="date"
                              name="openingdate"
                              value={formData.openingdate}
                              onChange={(event) => handleChange(null, event)}
                            />
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">
                              License or Registration Number
                            </label>
                            <Input
                              type="text"
                              placeholder="Enter License or Registration Number"
                              value={formData.licenseNumber}
                              onChange={(event) => handleChange(null, event)}
                              name="licenseNumber"
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <div className="row">
                              <div className="col">
                                <label className="fs-6 fw-medium">
                                  Opening Hours
                                </label>
                                <Input
                                  type="time"
                                  name="openingHour"
                                  value={formData.openingHour}
                                  onChange={(event) =>
                                    handleChange(null, event)
                                  }
                                />
                              </div>
                              <div className="col">
                                <label className="fs-6 fw-medium">
                                  Closing Hours
                                </label>
                                <Input
                                  type="time"
                                  value={formData.closingHour}
                                  name="closingHour"
                                  onChange={(event) =>
                                    handleChange(null, event)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Cuisine Type(s)</label>
                            <select
                              className="form-select"
                              value={formData.cuisineType}
                              onChange={(event) => handleChange(null, event)}
                              name="cuisineType"
                            >
                              <option className="text-secondary" value="">
                                --Select Category--
                              </option>
                              <option value="Veg">Veg</option>
                              <option value="Non-Veg">Non-Veg</option>
                              <option value="Both">Both</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Price Range</label>

                            <Input
                              type="number"
                              onChange={(event) => handleChange(null, event)}
                              value={formData.priceRange}
                              name="priceRange"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded mb-4">
                      <div className="card-body p-4">
                        <h5 className="fs-4 fw-bold mb-0 text-primary">
                          Operational Details
                        </h5>
                        <hr className="border border-dark border-2" />

                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">
                              Seating Capacity
                            </label>
                            <Input
                              type="number"
                              value={formData.seatingCapacity}
                              onChange={(event) => handleChange(null, event)}
                              name="seatingCapacity"
                            />
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">
                              Reservation Policy
                            </label>
                            <Input
                              type="text"
                              placeholder="Enter your Reservation Policy"
                              value={formData.reservationPolicy}
                              onChange={(event) => handleChange(null, event)}
                              name="reservationPolicy"
                            />
                          </div>

                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">
                              Takeout/Delivery Availability
                            </label>
                            <select
                              className="form-select"
                              name="takeoutavailability"
                              value={formData.takeoutavailability}
                              onChange={(event) => handleChange(null, event)}
                            >
                              <option className="text-secondary" value="">
                                --Select Category--
                              </option>
                              <option value="Takeout">Takeout</option>
                              <option value="Delivery">Delivery</option>
                              <option value="Both">Both</option>
                            </select>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">
                              Payment Methods Accepted
                            </label>
                            <select
                              className="form-select"
                              value={formData.paymentMethod}
                              name="paymentMethod"
                              onChange={(event) => handleChange(null, event)}
                            >
                              <option className="text-secondary" value="">
                                --Select Category--
                              </option>
                              <option value="Cash On Delivery">
                                Cash On Delivery
                              </option>
                              <option value="UPI">UPI</option>
                              <option value="Net Banking">Net Banking</option>
                              <option value="All">All</option>
                            </select>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Parking Options</label>
                            <div className="row ms-3">
                              <div className="col">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="flexRadioDefault1"
                                  value="Yes"
                                  defaultChecked={
                                    formData.parkingOptions === "Yes"
                                  }
                                  name="parkingOptions"
                                  onChange={(event) =>
                                    handleChange(null, event)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="col">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="parkingOptions"
                                  value="No"
                                  defaultChecked={
                                    formData.parkingOptions === "No"
                                  }
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded mb-4">
                      <div className="card-body p-4">
                        <h5 className="fs-4 fw-bold mb-0 text-primary">
                          Social Media Links
                        </h5>
                        <hr className="border border-dark border-2" />
                        <div className="col-md-6 col-sm-12">
                          <label className="fw-medium">
                            Social Media Links
                          </label>
                          {formData.socialmedialinks.map(
                            (socialMedia, index) => (
                              <div className="row mb-2" key={index}>
                                <div className="col-md-4">
                                  <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={socialMedia.name || ""}
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    } // Handle social media changes
                                  />
                                </div>
                                <div className="col-md-6">
                                  <Input
                                    type="text"
                                    name="link"
                                    placeholder="Link"
                                    value={socialMedia.link || ""}
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    } // Handle social media changes
                                  />
                                </div>
                                {index ===
                                  formData.socialmedialinks.length - 1 && (
                                    <div className="col-md-4">
                                      <button
                                        className="btn btn-primary"
                                        onClick={addSocialMediaLink}
                                      >
                                        Add More
                                      </button>
                                    </div>
                                  )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded mb-4">
                      <div className="card-body p-4">
                        <h5 className="fs-4 fw-bold mb-4 text-primary">
                          Add Media
                        </h5>
                        <hr className="border border-dark border-2" />

                        {/* File Upload Input */}
                        <div className="mb-3">
                          <label className="fw-medium">Upload Media</label>
                          <Input
                            type="file"
                            className="form-control"
                            name="media"
                            multiple
                            onChange={handleMediaChange}
                          />
                        </div>

                        {/* Display uploaded files */}
                        <div className="row">
                          {formData.media &&
                            formData.media.length > 0 &&
                            formData.media.map((file, index) => (
                              <div
                                key={index}
                                className="col-md-3 col-sm-4 mb-3 position-relative"
                              >
                                {/* Display image thumbnails or video previews */}
                                {file.type.startsWith("image") ? (
                                  <img
                                    src={URL.createObjectURL(file)} // Generate object URL for image
                                    alt={file.name}
                                    className="img-fluid img-thumbnail rounded-3 w-75 h-75"
                                    style={{ objectFit: "cover" }}
                                  />
                                ) : (
                                  <video
                                    className="img-fluid img-thumbnail rounded-3 w-75 h-75"
                                    style={{ objectFit: "cover" }}
                                    controls
                                  >
                                    <source
                                      src={URL.createObjectURL(file)}
                                      type={file.type}
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                )}

                                {/* Remove button */}
                                <button
                                  className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-circle"
                                  style={{ zIndex: 1 }}
                                  onClick={() => handleRemoveFile(file.name)}
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                            ))}
                        </div>

                        {/* Upload button */}
                        <button
                          className="btn btn-primary"
                          onClick={handleUpload}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-12 col-sm-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-success mt-3 w-25"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
