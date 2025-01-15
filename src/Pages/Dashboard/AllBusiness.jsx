import React, { useState, useEffect } from "react";
import DashSideBar from "../../components/DashSideBar";
import DashNavbar from "../../components/DashNavbar";
import axios from "axios";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

export default function AllBusiness() {
  const [businesses, setBusinesses] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
    const id = localStorage.getItem('id');
       
        const token = localStorage.getItem("token");
        const response = await axios.post(`${process.env.REACT_APP_API_URL}business/getbusinessbyid`,{id}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.data)
        
        setBusinesses(response.data.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching business data:", error);
        setError("Failed to load businesses");
        setLoading(false); 
      }
    };

    fetchBusinessData();
  }, 
  []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  const filteredBusinesses = businesses.filter((business) => {
    const query = searchQuery.toLowerCase();
    return (
      (business.businessName && business.businessName.toLowerCase().includes(query)) ||
      (business.businessType && business.businessType.toLowerCase().includes(query))
    );
  });
  const handleEdit = (businessId) => {
    navigate('/loggedin/editbusiness', { state: { businessId } }); 
  };

  return (
    <>
      <div id="wrapper">
        <DashSideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <DashNavbar />

            <div className="container-fluid">
              <h1 className="h2 text-center mb-4 text-dark fw-bold">All Business</h1>

              <div className="mb-4">
                <Input
                  type="text"
                  className="form-control "
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
              </div>

              <div className="card shadow-lg ">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered-secondary" id="dataTable" cellSpacing="0">
                      <thead>
                        <tr>
                          <th>Business Name</th>
                          <th>Business Type</th>
                          <th>Description</th>
                          <th>Business Address</th>
                          <th>Country</th>
                          <th>Contact Person</th>
                          <th>Email</th>
                          <th>Contact Number</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredBusinesses.length > 0 ? (
                          filteredBusinesses.map((business) => (
                            <tr key={business._id}>
                              <td>{business.businessName}</td>
                              <td>{business.businessType}</td>
                              <td>{business.description}</td>
                              <td>{business.businessAddress}</td>
                              <td>{business.country}</td>
                              <td>{business.contactPerson}</td>
                              <td>{business.email}</td>
                              <td>{business.phoneNumber}</td>
                              <td className="d-flex">
                                <button className="btn btn-outline-primary shadow me-3" onClick={() => handleEdit(business)}><i className="fas fa-pen-to-square"></i></button>
                                <button className="btn btn-outline-danger shadow"><i className="fas fa-trash"></i></button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="9" className="text-center">
                              No results found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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
