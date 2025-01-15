import React, { useEffect, useState } from "react";
import DashSideBar from "../../components/DashSideBar";
import DashNavbar from "../../components/DashNavbar";
import Input from "../../components/Input";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function BusinessEdit() {
  const [businesses, setBusinesses] = useState([]);
  const { state } = useLocation();
  // console.log(state);
  const navigate = useNavigate();
  const [media, setmedia] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const addSocialMediaLink = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialmedialinks: [
        ...prevFormData.socialmedialinks,
        { name: "", link: "" },
      ],
    }));
  };

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    description: "",
    contactPerson: "",
    phoneNumber: "",
    email: "",
    businessAddress: "",
    city: "",
    state: "",
    country: "India",
    zipCode: "",
    fssai: null,
    gst: null,
    pancard: null,
    previousPancard: null,
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
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
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
  useEffect(() => {
    const fetchbusiness = async () => {
      try {
        const token = localStorage.getItem("token");

        // Ensure the ID is valid before making the API call
        if (!state || !state.businessId) {
          setErrors("Business ID is missing.");
          setIsLoading(false);
          return;
        }

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}business/getbusinesswithrestrobyid`,
          { businessid: state.businessId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.data.data) {
          const businessData = response.data.data.business || {};
          const restroData = response.data.data.restroDetails || {};

          setFormData((prevFormData) => ({
            ...prevFormData,
            businessName: businessData.businessName || "",
            businessType: businessData.businessType || "",
            description: businessData.description || "",
            contactPerson: businessData.contactPerson || "",
            phoneNumber: businessData.phoneNumber || "",
            email: businessData.email || "",
            businessAddress: businessData.businessAddress || "",
            city: businessData.city || "",
            state: businessData.state || "",
            country: businessData.country || "India",
            zipCode: businessData.zipCode || "",
            fssai: businessData.fssai || null,
            gst: businessData.gst || null,
            pancard: businessData.pancard || null,
            openingdate: restroData.Opening_Date || "",
            openingHour: restroData.openingHour || "",
            closingHour: restroData.closingHour || "",
            media: restroData.media || [],
            websiteurl: restroData.Website_URL || "",
            socialmedialinks: restroData.Social_Media_Links || [
              { name: "", link: "" },
            ],
            Operating_Hours: calculateOperatingHours(),
            Operating_time: formatOperatingTime(),
            cuisineType: restroData.Cuisine_Type || "",
            priceRange: restroData.Price_Range || "",
            licenseNumber: restroData.License_or_Registration_no || "",
            seatingCapacity: restroData.Seating_Capacity || "",
            reservationPolicy: restroData.Reservation_Policy || "",
            takeoutavailability: restroData.Availability || "",
            paymentMethod: restroData.Payment_Methods_Accepted || "",
            parkingOptions: restroData.Parking_Options || "",
          }));
        } else {
          setErrors("No business data found.");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching business data:", errors);
        setErrors("Error fetching business data.");
        setIsLoading(false);
      }
    };

    fetchbusiness();
  }, [state]);

  // const handleChange = (index, event) => {
  //   const { name, value } = event.target;
  //   if (name === "name" || name === "link") {
  //     const updatedLinks = [...formData.socialmedialinks];
  //     updatedLinks[index][name] = value;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       socialmedialinks: updatedLinks,
  //     }));
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleDeleteImage = (index) => {
    const updatedMedia = formData.media.filter((_, i) => i !== index);
    setFormData({ ...formData, media: updatedMedia });
  };

  const getFileUrl = (filePath) => {
    if (Array.isArray(filePath)) {
      return filePath.map((item) => {
        if (typeof item === "string") {
          return `${process.env.REACT_APP_API_URL}${item.replace(/\\/g, "/")}`;
        } else if (item && item.path) {
          return `${process.env.REACT_APP_API_URL}${item.path.replace(
            /\\/g,
            "/"
          )}`;
        }
        return "";
      });
    } else if (typeof filePath === "string") {
      return `${process.env.REACT_APP_API_URL}${filePath.replace(/\\/g, "/")}`;
    } else if (filePath && filePath.path) {
      return `${process.env.REACT_APP_API_URL}${filePath.path.replace(
        /\\/g,
        "/"
      )}`;
    }
    return "";
  };

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;
  //   const file = files[0];

  //   if (file && file.type !== "application/pdf") {
  //     setErrors((prev) => ({ ...prev, [name]: "Only PDF files are allowed." }));
  //     return;
  //   }

  //   setErrors((prev) => ({ ...prev, [name]: "" }));
  //   setFormData((prev) => ({ ...prev, [name]: file }));

  //   const newFiles = Array.from(event.target.files); // Convert FileList to array
  //   setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  // };

  const handleFileDelete = (fileField) => {
    setFormData((prev) => ({
      ...prev,
      [fileField]: null,
    }));
  };

  const handleFileChange = (e) => {
    // Handle file input changes
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files,
    }));
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
    // if (!formData.zipCode) newErrors.zipCode = "Zip Code is required.";
    // if (!formData.fssai) newErrors.fssai = "FSSAI document is required.";
    // if (!formData.gst) newErrors.gst = "GST document is required.";
    // if (!formData.pancard) newErrors.pancard = "PANCARD document is required.";
    if (!formData.licenseNumber)
      newErrors.licenseNumber = "License or Registration Number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMediaChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFormData((prev) => ({
      ...prev,
      media: [...prev.media, ...newFiles],
    }));
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (selectedFiles.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        media: [...prevFormData.media, ...selectedFiles], // Add selected files to media
      }));

      setSelectedFiles([]); // Clear the selected files after uploading
    }
  };

  const handleRemoveFile = (fileIndex) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      media: prevFormData.media.filter((_, index) => index !== fileIndex), // Remove file by index
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (!validateForm()) {
      setErrors("Please fix the validation errors.");
      return; // Stop if there are validation errors
    }

    try {
      // Ensure the business ID is available
      if (!state || !state.businessId || !state.businessId._id) {
        setErrors("Business ID is missing.");
        return;
      }

      const businessId = state.businessId._id;

      // Prepare the business data payload
      const business = {
        businessName: formData.businessName,
        businessType: formData.businessType,
        description: formData.description,
        contactPerson: formData.contactPerson,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        businessAddress: formData.businessAddress,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipCode: formData.zipCode,
        fssai: formData.fssai,
        gst: formData.gst,
        pancard: formData.pancard,
      };

      // Prepare the business details payload
      const businessDetails = {
        Opening_Date: formData.openingdate,
        openingHour: formData.openingHour,
        closingHour: formData.closingHour,
        media: formData.media,
        Website_URL: formData.websiteurl,
        Social_Media_Links: formData.socialmedialinks,
        Cuisine_Type: formData.cuisineType,
        Price_Range: formData.priceRange,
        License_or_Registration_no: formData.licenseNumber,
        Seating_Capacity: formData.seatingCapacity,
        Reservation_Policy: formData.reservationPolicy,
        Availability: formData.takeoutavailability,
        Payment_Methods_Accepted: formData.paymentMethod,
        Parking_Options: formData.parkingOptions,
        Operating_Hours: calculateOperatingHours(),
        Operating_time: formatOperatingTime(),
      };

      const token = localStorage.getItem("token");
      if (!token) {
        setErrors("Authorization token is missing.");
        return;
      }

      // Create a new FormData instance
      const formDataToSend = new FormData();

      formDataToSend.append("id", businessId);
      formDataToSend.append("business", JSON.stringify(business));
      formDataToSend.append("businessDetails", JSON.stringify(businessDetails));

      // Append files to FormData if they exist and are not null
      if (formData.previousMedia && Array.isArray(formData.previousMedia)) {
        formData.previousMedia.forEach((file, index) => {
          formDataToSend.append(`existingMedia[${index}]`, file); // Retain existing media
          console.log(`Appending existing media: ${file.name}`);
        });
      }

      if (formData.media && Array.isArray(formData.media)) {
        formData.media.forEach((file, index) => {
          if (file instanceof File) {
            formDataToSend.append(`media[${index}]`, file); // Append new media files
            console.log(`Appending new media: ${file.name}`);
          }
        });
      }

      // Handle Pancard files (retain previous if no new file)
      if (formData.previousPancard) {
        formDataToSend.append("existingPancard", formData.previousPancard); // Retain existing pancard if no new file
        console.log(`Retaining existing pancard: ${formData.previousPancard.name}`);
      }

      if (formData.pancard && formData.pancard[0] instanceof File) {
        formDataToSend.append("pancard", formData.pancard[0]); // Append new pancard file
        console.log(`Appending new pancard: ${formData.pancard[0].name}`);
      }

      // Handle FSSAI files (retain previous if no new file)
      if (formData.previousFssai) {
        formDataToSend.append("existingFssai", formData.previousFssai); // Retain existing fssai if no new file
        console.log(`Retaining existing fssai: ${formData.previousFssai.name}`);
      }

      if (formData.fssai && formData.fssai[0] instanceof File) {
        formDataToSend.append("fssai", formData.fssai[0]); // Append new fssai file
        console.log(`Appending new fssai: ${formData.fssai[0].name}`);
      }

      // Handle GST files (retain previous if no new file)
      if (formData.previousGst) {
        formDataToSend.append("existingGst", formData.previousGst); // Retain existing gst if no new file
        console.log(`Retaining existing gst: ${formData.previousGst.name}`);
      }

      if (formData.gst && formData.gst[0] instanceof File) {
        formDataToSend.append("gst", formData.gst[0]); // Append new gst file
        console.log(`Appending new gst: ${formData.gst[0].name}`);
      }

      // Debug: Log FormData to check if the files are correctly appended
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      // Send the PUT request to update the business
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}business/updatebusinesswithrestro`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensuring the content type is set for form data
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if the response is successful
      if (response.status === 200 && response.data.status === "success") {
        // Optionally update the local state or refetch the list of businesses
        setBusinesses((prevBusinesses) =>
          prevBusinesses.map((business) =>
            business._id === response.data.data[0]._id
              ? response.data.data[0]
              : business
          )
        );

        navigate("/loggedin/allbusiness");
        console.log("Business updated successfully!", response.data.data);
      } else {
        console.error("Error in response:", response.data);
        setErrors(response.data.message || "Error updating the business.");
      }
    } catch (error) {
      console.error(
        "Error updating business:",
        error.response?.data || error.message
      );
      setErrors("An error occurred while updating the business.");
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
                  Edit Business Details
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
                              value={formData.businessName || ""}
                              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  businessType: e.target.value,
                                })
                              }
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
                              value={formData.description || ""}
                              onChange={(e) =>
                                setFormData((prev) => ({ ...prev, description: e.target.value }))
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  contactPerson: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phoneNumber: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  businessAddress: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">State</label>
                            <Input
                              type="text"
                              name="state"
                              placeholder="Enter your State"
                              value={formData.state}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  state: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  country: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  zipCode: e.target.value,
                                })
                              }
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
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  fssai: e.target.files[0],
                                }));
                              }}
                            />
                            {errors.fssai && (
                              <div className="text-danger">{errors.fssai}</div>
                            )}
                            {formData.fssai ? (
                              <div className="mt-1">
                                <strong>Previous Uploaded File: </strong>
                                <a
                                  href={getFileUrl(formData.fssai)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-secondary ms-1"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <div className="col mt-2">
                                  <embed
                                    src={getFileUrl(formData.fssai)}
                                    type="application/pdf"
                                    width="200px"
                                  />
                                </div>
                                {/* <button
                                  type="button"
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() => handleFileDelete()}
                                >
                                  Delete
                                </button> */}
                              </div>
                            ) : (
                              <p>No file uploaded</p>
                            )}
                          </div>

                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">GST</label>
                            <Input
                              type="file"
                              className="form-control"
                              name="gst"
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  gst: e.target.files[0],
                                }));
                              }}
                            />
                            {errors.gst && (
                              <div className="text-danger">{errors.gst}</div>
                            )}
                            {formData.fssai ? (
                              <div className="mt-1">
                                <strong>Previous Uploaded File: </strong>
                                <a
                                  href={getFileUrl(formData.gst)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-secondary ms-1"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <div className="col mt-2">
                                  <embed
                                    src={getFileUrl(formData.gst)}
                                    type="application/pdf"
                                    width="200px"
                                  />
                                </div>
                                {/* <button
                                  type="button"
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() => handleFileDelete()}
                                >
                                  Delete
                                </button> */}
                              </div>
                            ) : (
                              <p>No file uploaded</p>
                            )}
                          </div>

                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Pancard</label>
                            <Input
                              type="file"
                              className="form-control"
                              name="pancard"
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  pancard: e.target.files[0],
                                }));
                              }}
                            />
                            {errors.pancard && (
                              <div className="text-danger">
                                {errors.pancard}
                              </div>
                            )}
                            {formData.pancard ? (
                              <div className="mt-1">
                                <strong>Previous Uploaded File: </strong>
                                <a
                                  href={getFileUrl(formData.pancard)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-secondary ms-1"
                                >
                                  <i className="fas fa-eye"></i>
                                </a>
                                <div className="col mt-2">
                                  <embed
                                    src={getFileUrl(formData.pancard)}
                                    type="application/pdf"
                                    width="200px"
                                  />
                                </div>
                                {/* <button
                                  type="button"
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() => handleFileDelete()}
                                >
                                  Delete
                                </button>  */}
                              </div>
                            ) : (
                              <p>No file uploaded</p>
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  websiteurl: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="col-md-4 col-sm-12">
                            <label className="fw-medium">Opening Date</label>
                            <Input
                              type="date"
                              name="openingdate"
                              value={formData.openingdate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  openingdate: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  licenseNumber: e.target.value,
                                })
                              }
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
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      openingHour: e.target.value,
                                    })
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
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      closingHour: e.target.value,
                                    })
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  cuisineType: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  priceRange: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  seatingCapacity: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  reservationPolicy: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  takeoutavailability: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  paymentMethod: e.target.value,
                                })
                              }
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
                                  id="parkingYes"
                                  value="Yes"
                                  checked={formData.parkingOptions === "Yes"}
                                  name="parkingOptions"
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      parkingOptions: e.target.value,
                                    })
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="parkingYes"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="col">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  id="parkingNo"
                                  value="No"
                                  checked={formData.parkingOptions === "No"}
                                  name="parkingOptions"
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      parkingOptions: e.target.value,
                                    })
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="parkingNo"
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
                          <label className="fw-medium">Social Media Links</label>
                          {formData.socialmedialinks?.map((socialMedia, index) => (
                            <div className="row mb-2" key={index}>
                              <div className="col-md-4">
                                <Input
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  value={socialMedia.name || ""}
                                  onChange={(e) => {
                                    const updatedLinks = [...formData.socialmedialinks];
                                    updatedLinks[index] = {
                                      ...updatedLinks[index],
                                      name: e.target.value,
                                    };
                                    setFormData((prev) => ({
                                      ...prev,
                                      socialmedialinks: updatedLinks,
                                    }));
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <Input
                                  type="text"
                                  name="link"
                                  placeholder="Link"
                                  value={socialMedia.link || ""}
                                  onChange={(e) => {
                                    const updatedLinks = [...formData.socialmedialinks];
                                    updatedLinks[index] = {
                                      ...updatedLinks[index],
                                      link: e.target.value,
                                    };
                                    setFormData((prev) => ({
                                      ...prev,
                                      socialmedialinks: updatedLinks,
                                    }));
                                  }}
                                />
                              </div>
                              {index === formData.socialmedialinks.length - 1 && (
                                <div className="col-md-4">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={addSocialMediaLink}
                                  >
                                    Add More
                                  </button>
                                </div>
                              )}
                            </div>
                          ))}
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
                        <div className="row">
                          <div className="col-md-12 col-sm-12">
                            {formData.media.length > 0 &&
                              formData.media
                                .filter((file) => [".jpg", ".png", ".jpeg"])
                                .map((file, index) => (
                                  <div
                                    key={index}
                                    className="d-inline-block position-relative me-3 mb-3"
                                  >
                                    <img
                                      src={getFileUrl(file)}
                                      key={index}
                                      alt="Restaurant Media"
                                      height="200px"
                                      width="200px"
                                      className="me-5 mb-3 rounded"
                                    />
                                    <button
                                      className="btn btn-danger btn-sm position-absolute mt-2 top-0 start-100 translate-middle"
                                      style={{ zIndex: 1 }}
                                      onClick={() => handleDeleteImage(index)}
                                    >
                                      <i className="fas fa-trash"></i>
                                    </button>
                                  </div>
                                ))}
                          </div>
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
