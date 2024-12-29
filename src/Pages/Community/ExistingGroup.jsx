import React from 'react'
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Input from '../../components/Input'

export default function ExistingGroup() {
  return (
    <>
      {/* <div className="container-fluid ">
      <div className="row min-vh-100">
      <div className="col-md-3 col-sm-4 bg-light border-end">
            <Sidebar />
          </div>
        <h1 className="fw-bold text-secondary">Choose Your Community</h1>
      </div>

      <div className="row mt-5">
        <div
          id="carouselExampleControls"
          className="carousel mt-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-wrapper container d-flex justify-content-around">
              
                <div
                  className="card shadow"
                  style={{
                    width: "18rem",
                    perspective: "1000px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="d-flex flex-column justify-content-center align-items-center position-relative"
                    style={{
                      width: "100%",
                      height: "300px",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "rotateY(180deg)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "rotateY(0deg)")
                    }
                  >
                    <div
                      className="position-absolute w-100 h-100 bg-light d-flex justify-content-center align-items-center"
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src="/assets/images/auth/hp.jpg"
                        className="card-img"
                        alt="Card 1"
                      />
                    </div>
                    <div
                      className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="col text-center">
                      <h5 className="fw-bold text-center fst-italic">
                        Join our Himachal Pradesh Community
                      </h5>
                      <button className="btn btn-success w-75">Join</button></div>
                    </div>
                  </div>
                </div>
                
                <div
                  className="card shadow"
                  style={{
                    width: "18rem",
                    perspective: "1000px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="d-flex flex-column justify-content-center align-items-center position-relative"
                    style={{
                      width: "100%",
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "rotateY(180deg)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "rotateY(0deg)")
                    }
                  >
                    <div
                      className="position-absolute w-100 h-100 bg-light d-flex justify-content-center align-items-center"
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src="/assets/images/auth/party.avif"
                        className="card-img"
                        alt="Card 2"
                      />
                    </div>
                    <div
                      className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="col text-center">
                      <h5 className="fw-bold text-center fst-italic">
                        Join our Kitty Party Community
                      </h5>
                      <button className="btn btn-success w-75">Join</button></div>
                    </div>
                  </div>
                </div>
                  {/* <div className="card shadow-lg " style={{ width: "18rem" }}>
                    <img
                      src="/assets/images/auth/party.avif"
                      className="card-img"
                      alt="..."
                    />
                  </div> */}




      {/* <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex   justify-content-around">
                  <div className="card" style={{ width: '18rem' }}>
                    <img src="/assets/images/auth/mumbai.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src="/assets/images/auth/amritsar.jpg" style={{ height: '100%' }} className="card-img" alt="..." />
                  </div>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src="/assets/images/auth/udaipur.jpg" style={{ height: '100%' }} className="card-img" alt="..." />
                  </div>
                </div>
              </div> */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button> */}



      <div className="container-fluid">
        <div className="row min-vh-100">

          <div className="col-md-3 col-sm-4 bg-light border-end">
            <Sidebar />
          </div>

          <div className="col-md-9 col-sm-8">
            {/* {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />} */}
            <div className="container">
              <div className="row text-center d-flex justify-content-center">
                <h1 className="fw-bold mt-5">Choose your Community</h1>
              </div>
              <div className="container mt-0">
                <div className="row">

                  <div className=" mb-auto mt-5 ">


                    <div className="body">

                      <div className="row">
                        <div className="col-md-12 col-sm-12 mt-4">
                          <div className="row gx-5">
                            <div className="col-md-8  col-sm-12">
                              <div className='row'>
                              <div className='col-md-2 col-sm-12'>
                              <img src='/assets/images/auth/womensocial.avif' className='w-100 h-100' />
                              </div>
                              <div className='col-md-10 col-sm-12 text-start'>
                               <h3> Strike a Sequence</h3>
                                <p>Dames & Damsels(women only social group)</p>
                              </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mt-3">
                              <button type='button fw-semibold fs-4' className='btn btn-success w-100'>Request to Join</button>
                            </div>
                          </div>
                          <hr />
                          <div className="row gx-5">
                            <div className="col-md-8  col-sm-12">
                              <div className='row'>
                              <div className='col-md-2 col-sm-12'>
                              <img src='/assets/images/auth/coffeemeet.jpg' className='w-100 h-100' />
                              </div>
                              <div className='col-md-10 col-sm-12 text-start'>
                               <h3> Coffee Meet</h3>
                                <p>Delhi Coffee Meet up group</p>
                              </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mt-3">
                              <button type='button fw-semibold fs-4' className='btn btn-success w-100'>Request to Join</button>
                            </div>
                          </div>
                          <hr/>
                          <div className="row gx-5">
                            <div className="col-md-8  col-sm-12">
                              <div className='row'>
                              <div className='col-md-2 col-sm-12'>
                              <img src='/assets/images/auth/businessmeet.avif' className='w-100 h-100' />
                              </div>
                              <div className='col-md-10 col-sm-12 text-start'>
                               <h3>Business Networking Meet</h3>
                                <p>Growth Club-Startup Network</p>
                              </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mt-3">
                              <button type='button fw-semibold fs-4' className='btn btn-success w-100'>Request to Join</button>
                            </div>
                          </div>
                        </div>


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
  )
}
