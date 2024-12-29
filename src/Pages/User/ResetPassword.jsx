import { Field, Form, Formik } from 'formik';
import React from 'react'

export default function ResetPassword() {
    return (
        <>
            <div className='container'>
                <div className="row text-center d-flex justify-content-center">
                    <p className="fw-bold mt-5 fs-1">
                        Reset your password
                    </p>
                    <p className='mt-2'>Enter your email address below and check your inbox for a link to set a new password.</p>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-5 col-sm-12 my-4 shadow p-3 mb-5 rounded py-5' id='content'>
                        <Formik initialValues={{ email: '' }}
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            {() => (
                                <Form>
                                    <div className='input-group mb-3'>
                                        <span className="input-group-text" id="basic-addon1"><img src='/assets/mail.svg' /></span>
                                        <Field type="text" name='email' className="form-control" placeholder="Email Address " aria-label="Email Address" aria-describedby="basic-addon1" />
                                    </div>
                                    <button type="submit" className="btn mt-3" style={{ background: '#00a287', color: 'white', display: 'inline-block', width: '100%', fontWeight: '600' }}>Reset Password</button>

                                </Form>
                            )}
                        </Formik>


                    </div>
                </div>


            </div>
        </>
    )
}
