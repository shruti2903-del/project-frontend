import React from 'react'
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar'
import Navbar from '../../components/Navbar'

export default function Vendorlogin() {
  return (
    <>
            {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />}
      
      <div className='container   min-vh-100'>
        <div className="row text-center d-flex justify-content-center">

          <h1 className='fw-bold'>
            <img src='/assets/images/auth/venuehome.svg' style={{ height: '48px', width: '48px', marginRight: '10px' }} />
            Vendor Login</h1>
        </div>
        <div className='row'>
          <div className='col-md-6'><img className='img-fluid' src='/assets/images/auth/vendorposter.svg' /></div>
          <div className='col-md-6'>

            <div className='row d-flex text-center justify-content-center mt-5'>
              <div className='col-md-10 col-sm-12  my-5  p-3 mb-5 rounded py-5' id='content'>

                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1"><img src='/assets/images/auth/mail.svg' /></span>
                  <input type="text" className="form-control" placeholder="Email Address " aria-label="Email Address" aria-describedby="basic-addon1" />
                </div>

                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1"><img src='/assets/images/auth/lock.svg' /></span>
                  <input type="password" className="form-control" placeholder="Password " aria-label="Password" aria-describedby="basic-addon1" />
                </div>

                <button type="button" className="btn mt-3" style={{ background: '#00a287', color: 'white', display: 'inline-block', width: '100%', fontWeight: '600' }}> Login</button>
                <hr style={{ display: 'block', marginTop: '24px', marginBottom: '24px' }} />
                <p>Don't have a Venue Account? </p>
                <a href='/venueregister' style={{ textDecoration: 'none', color: '#00a287', fontWeight: '600', marginTop: '8px' }}>List your venue with us</a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}
