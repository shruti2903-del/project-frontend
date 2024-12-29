import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoggedInUserNavbar from '../components/LoggedInUserNavbar';

function HomePage() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login/vendor')
    }
    const [category, setCategory] = useState("");

    const handleSearch = () => {
        if (category === "Restaurant") {
            window.location.href = "/restauranthome";
        } else if (category === "Vendor") {
            window.location.href = "/vendor";
        } else if (category === "Event") {
            window.location.href = "/event";
        } else if (category === "Community") {
            window.location.href = "/existingGroup";
        } else {
            alert("Please select a category before searching.");
        }
    };

    //console.log(localStorage.getItem("token"));



    return (
        <>
            {/* Navbar */}
            <LoggedInUserNavbar />
    
            {/* Main Container */}
            <div className="container">
                {/* Title Section */}
                <div className="row d-flex justify-content-center align-items-center">
                    <div className='row mb-5'>
                    <div className="col-md-12 col-sm-12">
                        <h1 className="fs-1 fw-bold mb-5 mt-5 text-center">
                            Find and book the best for any event imaginable
                        </h1>
                    </div>
                    </div>
    
                {/* Search Box Section */}
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <section className="search-sec rounded-5 bg-white p-4 shadow-lg">
                            <div className="container">
                                <form action="#" method="post" noValidate="noValidate">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                
                                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                    <input
                                                        type="text"
                                                        className="form-control search-slt"
                                                        placeholder="Enter Location"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                    <select className="form-control search-slt" id="exampleFormControlSelect1" onChange={(e) => setCategory(e.target.value)}>
                                                        <option value='' disabled selected >--Select Category--</option>
                                                        <option value='Restaurant'>Restaurant</option>
                                                        <option value='Vendor'>Vendor</option>
                                                        <option value='Event'>Event</option>
                                                        <option value='Community'>Join Community</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                    <button type="button" className="btn btn-primary wrn-btn fw-semibold fs-5" onClick={handleSearch}>
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
                </div>
            
            {/* Card Section */}
            <div className='row mt-3 d-flex justify-content-center text-center'>
                <div className='col col-lg-3  col-sm-6'>
            <div className="card rounded-5 shadow-lg hover-scale" style={{width: '18rem', cursor:'pointer'}}  onClick={() => window.location.href = "/restauranthome"}>
  <img src="/assets/images/auth/restaurant.avif" className="card-img-top rounded-top-5" alt="..."/>
  <div className="card-body">
    <p className="card-text fw-semibold text-secondary fs-5">Restaurant</p>
  </div>
</div>
</div>
<div className='col col-lg-3 col-sm-6'>
            <div className="card rounded-5 shadow-lg hover-scale" style={{width: '18rem',cursor:'pointer'}}>
  <img src="/assets/images/auth/venue.avif" className="card-img-top rounded-top-5" alt="..."/>
  <div className="card-body">
    <p className="card-text fw-semibold text-secondary fs-5">Venue</p>
  </div>
</div>
</div>
<div className='col col-lg-3 col-sm-6'>
            <div className="card rounded-5 shadow-lg hover-scale" style={{width: '18rem',cursor:'pointer'}}>
  <img src="/assets/images/auth/events.jpg" className="card-img-top rounded-top-5" alt="..."/>
  <div className="card-body">
    <p className="card-text fw-semibold text-secondary fs-5">Events</p>
  </div>
</div>
</div>
</div>
<hr className=' m-5'/>
                {/* Carousel Section */}
                <div className="row">
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
                </div><hr className='mt-5'/>
    
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
                    <div className="col-md-10 col-sm-12 shadow p-5 m-3 rounded py-5" id="content">
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