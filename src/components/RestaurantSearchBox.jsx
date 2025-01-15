import React from 'react'

export default function RestaurantSearchBox() {
  return (
    <>
    <div className="row d-flex justify-content-center align-items-center mt-5 position-relative">
                    <div className="col-md-12 col-sm-12">
                        <section className="search-sec rounded-5 bg-white    p-4 shadow-lg position-absolute w-100" style={{ top: '60px' }}>
                            <div className="container">
                                <form action="#" method="post" noValidate="noValidate">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                    <input
                                                        type="text"
                                                        className="form-control search-slt"
                                                        placeholder="Search Restaurant"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                    {/* <select className="form-control search-slt" id="exampleFormControlSelect1" onChange={(e) => setCategory(e.target.value)}>
                                                        <option value='' disabled selected >--Select Category--</option>
                                                        <option value='Restaurant'>Restaurant</option>
                                                        <option value='Vendor'>Vendor</option>
                                                        <option value='Event'>Event</option>
                                                        <option value='Community'>Join Community</option>
                                                    </select> */}
                                                    <input
                                                        type="text"
                                                        className="form-control search-slt"
                                                        placeholder="Enter Location"
                                                    />

                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                    <button type="button" className="btn btn-primary wrn-btn fw-semibold fs-5" >
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
    </>
  )
}
