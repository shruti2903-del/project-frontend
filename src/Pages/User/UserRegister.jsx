import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [ddlrole, setDdlrole] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {

    async function populateddl() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}auth/getAllRoles`);
        setDdlrole(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    populateddl();

  }, [])

  async function postformdata(body) {
    console.log(body);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/signup`, body);
      console.log(response);

      if (response.data.data) {
        toast.success('Successfully Registered!');
        navigate('/otpverify')

      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }

  }
  const handleSubmit = async (values) => {
    const bod = {
      name: values.fullName,
      email: values.email,
      phone: "9234567891",
      password: values.password,
      contactNumber:values.contactNumber,
      role: Number(values.selectedOption),
    };


    postformdata(bod);
  };




  return (
    <>
      <div className="container min-vh-100">
        <div className="row text-center d-flex justify-content-center">
          <h1 className="fw-bold mt-5">
            <img src="/assets/images/auth/userImage.svg" style={{ height: '48px', width: '48px', marginRight: '10px' }} alt="User" />
            User Signup
          </h1>
        </div>
        
        
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 col-sm-12 my-4 shadow p-3 mb-5 rounded py-5" id="content">
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                password: '',
                contactNumber: '',
                selectedOption: 0,

              }}

              onSubmit={handleSubmit}

            >
              {() => (
                <Form>
                  <div className='col '>
                    
                        <button type='button' className='btn btn-outline-primary form-control mb-3'>Log in with Facebook</button>
                  
                  
                    <button type='button' className='btn btn-outline-primary form-control mb-3'>Log in with Google</button>
                    </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="/assets/images/auth/mail.svg" alt="Mail" />
                    </span>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      name="fullName"
                      aria-label="Full name"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="/assets/images/auth/usersignup.svg" alt="User" />
                    </span>
                    <Field
                      type="email"
                      className="form-control"
                      placeholder="Email - watch out for typos"
                      name="email"
                      aria-label="Email Address"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <img src="/assets/images/auth/lock.svg" alt="Lock" />
                    </span>
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Create a password"
                      name="password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      {/* <img src="/assets/images/auth/lock.svg" alt="Lock" /> */}
                    </span>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Contact Number"
                      name="contactNumber"
                      aria-label="Contact Number"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className='input group mb-3'>
                    <Field as="select" name="selectedOption" className="form-select" aria-label="Dropdown">
                      <option value="" disabled>Select Role</option>
                      {ddlrole.length ? ddlrole.map((item, idx) => {
                        return (
                          <option key={idx} value={item.id}>
                            {item.role_name}
                          </option>
                        );
                      }) : null}
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="btn mt-3 text-center d-inline-block"
                    style={{ background: '#00a287', color: 'white', width: '100%', fontWeight: '600' }}
                    disabled={ddlrole.length === 0} // Disable if roles are empty
                  >
                    Signup
                  </button>

                </Form>
              )}
            </Formik>

            <hr style={{ display: 'block', marginTop: '24px', marginBottom: '24px' }} />
            <p className="text-center">
              Already have a User Account?{' '}
              <a href="/login/user" style={{ textDecoration: 'none', color: '#00a287', fontWeight: '600', marginTop: '8px' }}>
                Log in
              </a>
            </p>
          </div>
          </div>
          </div>
        
      <div><Toaster position="top-center" /></div>
    </>
  );
};

export default UserSignup;

