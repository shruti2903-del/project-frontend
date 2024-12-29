import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function UserLogin() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };


    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, body);
      console.log(response);

      if (response.data.data) {
        toast.success('User Login');
        console.log("logged in ", response.data.data[0].user.role_name);

        localStorage.setItem("token", response.data.data[0].token)
        localStorage.setItem("id", response.data.data[0].user._id)
        localStorage.setItem("role", response.data.data[0].user.role_name.toLowerCase())
        console.log(localStorage.getItem("token"));
        if (response.data.data[0].user.role_name.toLowerCase() === "user") {

          navigate('/loggedin/*')

        } else if (response.data.data[0].user.role_name.toLowerCase() === "vendor") {
          navigate('/VendorHome')

        }
        else {
          navigate('/login')
        }

      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (

    <>

      <div className='container   min-vh-100 mt-5'>
        <div className="row text-center d-flex justify-content-center">

          <h1 className='fw-bold'>
            <img src='/assets/images/auth/userImage.svg' style={{ height: '48px', width: '48px', marginRight: '10px' }} />
            User Login</h1>
        </div>
        <div className="row">

          <div className="col-md-6"><img className='img-fluid mb-5' src='/assets/images/auth/loginposter.jpg' /></div>
          <div className="col-md-6">


            <div className='row d-flex text-center justify-content-center mt-5'>
              <div className='col-md-10 col-sm-12  my-4   mb-5 rounded ' id='content'>
                <Formik
                  initialValues={{
                    email: '',
                    password: ''
                  }}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>


                      <div className='input-group mb-3'>
                        <span className="input-group-text" id="basic-addon1"><img src='/assets/images/auth/mail.svg' /></span>
                        <Field type="text" name='email' className="form-control" placeholder="Email Address " aria-label="Email Address" aria-describedby="basic-addon1" />
                      </div>


                      <div className='input-group mb-3'>
                        <span className="input-group-text" id="basic-addon1"><img src='/assets/images/auth/lock.svg' /></span>
                        <Field type="password" name='password' className="form-control" placeholder="Password " aria-label="Password" aria-describedby="basic-addon1" />
                      </div>
                      <a href='/resetpassword' style={{ textDecoration: 'none', color: '#00a287', fontWeight: '600', marginTop: '8px' }}>Forgot your password?</a>

                      <button type="submit" className="btn mt-3" style={{ background: '#00a287', color: 'white', display: 'inline-block', width: '100%', fontWeight: '600' }}> Login</button>
                    </Form>
                  )}

                </Formik>

                <hr style={{ display: 'block', marginTop: '24px', marginBottom: '24px' }} />
                <p>Don't have a User Account?
                  <a href='/signup' style={{ textDecoration: 'none', color: '#00a287', fontWeight: '600', marginTop: '8px' }}>Sign Up</a> </p>

              </div>




            </div></div>
        </div>


      </div>
      <div><Toaster position="top-center" /></div>

    </>
  )
}
