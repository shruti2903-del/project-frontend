import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoggedInUserNavbar from '../components/LoggedInUserNavbar'
import Navbar from '../components/Navbar'


export default function Login() {
  const navigate = useNavigate()
  return (
    <>
            {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />}
      
      <div className='container  min-vh-100'>
        <div className="row text-center d-flex justify-content-center">

          <h1 className='fw-bold'>Log in</h1>
        </div>
        <div className='row d-flex justify-content-around g-2'>
          <div className='col-md-1 col-sm-12'></div>

          <div className='col-md-4 col-sm-12 text-center my-5 shadow p-3 mb-5 rounded py-5' id='content'>
            <div className='container'>
              <img src='assets/images/auth/userImage.svg' style={{ height: '80px', width: '50' }} />
              <h4 style={{ fontWeight: '600', fontSize: '24px', marginTop: '12px', maxWidth: '100%' }}>User</h4>
              <p style={{ fontSize: '16px', marginTop: '12px', marginBottom: '24px', maxWidth: '100%' }}>Find the perfect venue for your event.</p>
              <button type="button" onClick={(e) => { navigate('/login/user') }} className="btn" style={{ background: '#00a287', color: 'white', display: 'inline-block', width: '100%', fontWeight: '600' }}>User Login</button>
              <hr style={{ display: 'block', marginTop: '24px', marginBottom: '24px' }} />
              <p>Don't have a User Account?</p>
              <a href='/signup' style={{ textDecoration: 'none', color: '#00a287', fontWeight: '600', marginTop: '8px' }}>Sign up</a>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 text-center my-5 shadow p-3 mb-5 rounded py-5' id='content'>
            <div className='container'>
              <img src='assets/images/auth/venuehome.svg' style={{ height: '80px', width: '50' }} />
              <h4 style={{ fontWeight: '600', fontSize: '24px', marginTop: '12px', maxWidth: '100%' }}>Vendor</h4>
              <p style={{ fontSize: '16px', marginTop: '12px', marginBottom: '24px', maxWidth: '100%' }}>Manage enquiries and edit your listings.</p>
              <button type="button" onClick={(e) => { navigate('/login/vendor') }} className="btn" style={{ background: '#00a287', color: 'white', display: 'inline-block', width: '100%', fontWeight: '600' }}>Vendor Login</button>
              <hr style={{ display: 'block', marginTop: '24px', marginBottom: '24px' }} />
              <p>Don't have a Vendor Account?</p>
              <a href='' style={{ textDecoration: 'none', color: '#00a287', fontWeight: '600', marginTop: '8px' }}>List your venue with us</a>
            </div>
          </div>
          <div className='col-md-1 col-sm-12'></div>
        </div>


      </div>










    </>
  )
}
