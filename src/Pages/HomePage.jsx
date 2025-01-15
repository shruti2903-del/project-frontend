import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoggedInUserNavbar from '../components/LoggedInUserNavbar';
import RestaurantSearchBox from '../components/RestaurantSearchBox';

function HomePage() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login/vendor')
    }
    const [category, setCategory] = useState("");

    const handleSearch = () => {
        if (category === "Restaurant") {
            window.location.href = "/loggedin/restauranthome";
        } else if (category === "Vendor") {
            window.location.href = "/loggedin/vendorhome";
        } else if (category === "Event") {
            window.location.href = "/event";
        } else if (category === "Community") {
            window.location.href = "/loggedin/existingGroup";
        } else {
            alert("Please select a category before searching.");
        }
    };

    //console.log(localStorage.getItem("token"));



    return (
        <>
            {/* Navbar */}
            {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />}
    
            {/* Main Container */}
            <div className="container">
                {/* <div className='row rounded shadow d-flex justify-content-center text-center position-relative'>
                    <div className='col-md-6 col-sm-12 shadow p-4 mb-5 rounded' >
                        <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                        Restaurant
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        Restaurant
                    </div>
                </div>
                </div>
                </div> */}

                
    
                {/* Carousel Section */}
                <div className="row mt-5">
                    <h2 className="text-center fw-semibold fs-1">Discover top event spaces across India</h2>
                    <div id="carouselExampleControls" className="carousel mt-4 slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card-wrapper container-sm d-flex justify-content-around">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="/assets/images/auth/delhi.jpg" className="card-img" alt="Delhi" />
                                    </div>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="/assets/images/auth/agra.jpg" style={{ height: "100%" }} className="card-img" alt="Agra" />
                                    </div>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="/assets/images/auth/bengaluru.jpg" className="card-img" alt="Bengaluru" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card-wrapper container-sm d-flex justify-content-around">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="/assets/images/auth/mumbai.jpg" className="card-img" alt="Mumbai" />
                                    </div>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="/assets/images/auth/amritsar.jpg" style={{ height: "100%" }} className="card-img" alt="Amritsar" />
                                    </div>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="/assets/images/auth/udaipur.jpg" style={{ height: "100%" }} className="card-img" alt="Udaipur" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev rounded-circle bg-secondary d-flex justify-content-center align-items-center"
                            style={{ width: "3rem", height: "3rem", top: "50%", transform: "translateY(-50%)" }}
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next rounded-circle bg-secondary d-flex justify-content-center align-items-center"
                            style={{ width: "3rem", height: "3rem", top: "50%", transform: "translateY(-50%)" }}
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <hr className='mt-5'/>
    
                {/* Brand Logos Section */}
                <h3 className="mt-5 text-center fw-semibold fs-1">Global brands and 1M+ users trust Tagvenue</h3>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-auto">
                        <img src="/assets/images/auth/googlebrand.svg" alt="Google" />
                    </div>
                    <div className="col-auto">
                        <img src="/assets/images/auth/facebookbrand.svg" alt="Facebook" />
                    </div>
                    <div className="col-auto">
                        <img src="/assets/images/auth/p&g.svg" alt="P&G" />
                    </div>
                    <div className="col-auto">
                        <img src="/assets/images/auth/ebay.svg" alt="eBay" />
                    </div>
                    <div className="col-auto">
                        <img src="/assets/images/auth/netflix.svg" alt="Netflix" />
                    </div>
                    <div className="col-auto">
                        <img src="/assets/images/auth/visa.svg" alt="Visa" />
                    </div>
                </div>
    
                {/* Venue Listing Section */}
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-10 col-sm-12 shadow p-5 mb-3 rounded py-5" id="content">
                        <div className="row my-5">
                            <div className="col-md-6 col-sm-12">
                                <img src="/assets/images/auth/list-your-venue.svg" alt="List your venue" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h2 className="fw-bolder fs-1">List your venue for free and get more bookings!</h2>
                                <p className="my-5">
                                    We are the world's fastest-growing online marketplace for venue hire, giving you direct access to the right customers.
                                </p>
                                <button
                                    type="submit"
                                    className="btn mt-3 fs-4 fw-semibold"
                                    onClick={handleSubmit}
                                    style={{ background: "#ff5b65", color: "white", display: "inline-block", width: "100%" }}
                                >
                                    List your Venue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
    
    
    
}

export default HomePage