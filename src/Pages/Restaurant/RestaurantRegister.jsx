import React from 'react'
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar'
import Navbar from '../../components/Navbar'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ADD_BUSINESS, ADD_RESTRO } from '../../constants/constants';
import { handleFormSubmit } from '../../utils/apiHelper';


export default function RestaurantRegister() {
    const navigate = useNavigate()
    const initialValues = {
        businessName: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        cpassword: '',
        role: 2
    };

    function Submit(data) {


        const datatoapi = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            role: data.role,
            business_name: data.businessName
        }
        console.log(datatoapi);


        handleFormSubmit(`${process.env.REACT_APP_API_URL}auth/signup`, datatoapi, null, "POST")
            .then((res) => {
                // localStorage.setItem('data', JSON.stringify(data));
                localStorage.setItem('userid', res.data.data[0].userid);
                localStorage.setItem('token', res.data.data[0].token);
                console.log("Response", res)
                navigate('/otpverify')
            })

            .then((err) => console.log(err))

    }

    const validationSchema = Yup.object({
        businessName: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        phone: Yup.number().required('Required'),
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),

    });

    return (
        <>


            <div className="container">
                <a
                    className="nav-link text-dark fs-4 d-flex mt-4 align-items-center"
                    href="/partnerwithus"
                >
                    <i className="fa-solid fa-backward fs-4 me-2"></i> Back
                </a>
                <div className="row text-center d-flex justify-content-center">
                    <h1 className="fw-bold mt-5">Restaurant Registration</h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-12 my-4 shadow p-4 mb-5 rounded py-5" id="content">
                        <div className="overflow">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={Submit}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="row">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Business Name</label>
                                                <Field
                                                    name="businessName"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Business/Organization Name"
                                                />
                                                {errors.businessName && touched.businessName ? (
                                                    <div className="text-danger">{errors.businessName}</div>
                                                ) : null}
                                            </div>
                                            {/* <div className="col mb-2">
                                                <label className="fw-semibold">Business Type</label>
                                                <Field
                                                    name="businessType"
                                                    as="select"
                                                    className="form-control"
                                                >
                                                    <option value="" disabled>
                                                        --Select Category--
                                                    </option>
                                                    <option value="Restaurant">Restaurant</option>
                                                    <option value="Vendor">Vendor</option>
                                                    <option value="Event">Spa Manager</option>
                                                </Field>
                                                {errors.businessType && touched.businessType ? (
                                                    <div className="text-danger">{errors.businessType}</div>
                                                ) : null}
                                            </div> */}
                                        </div>

                                        {/* <div className="mb-3 mt-2">
                                            <label className="fw-semibold">Description</label>
                                            <Field
                                                name="description"
                                                as="textarea"
                                                className="form-control"
                                                placeholder="Add a description"
                                            />
                                        </div> */}

                                        <div className="row mt-2">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Full Name</label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                />
                                                {errors.name && touched.name ? (
                                                    <div className="text-danger">{errors.name}</div>
                                                ) : null}
                                            </div>
                                            {/* <div className="col mb-2">
                                                <label className="fw-semibold">Country</label>
                                                <Field
                                                    name="country"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Country"
                                                />
                                                {errors.country && touched.country ? (
                                                    <div className="text-danger">{errors.country}</div>
                                                ) : null}
                                            </div> */}
                                        </div>

                                        {/* <div className="row mt-2">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Zip-Code</label>
                                                <Field
                                                    name="zipCode"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Postal/Zip Code"
                                                />
                                                {errors.zipCode && touched.zipCode ? (
                                                    <div className="text-danger">{errors.zipCode}</div>
                                                ) : null}
                                            </div>
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Contact Person</label>
                                                <Field
                                                    name="contactPerson"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                        </div> */}

                                        <div className="row mt-2">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Phone Number</label>
                                                <Field
                                                    name="phone"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                />
                                                {errors.phone && touched.phone ? (
                                                    <div className="text-danger">{errors.phone}</div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div className="row mt-2">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Email</label>
                                                <Field
                                                    name="email"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email"
                                                />
                                                {errors.email && touched.email ? (
                                                    <div className="text-danger">{errors.email}</div>
                                                ) : null}
                                            </div>
                                            {/* <div className="col mb-2">
                                                <label className="fw-semibold">PAN Card</label>
                                                <input
                                                    type="file"
                                                    name="pancard"
                                                    className="form-control"
                                                    onChange={(event) => setFieldValue("pancard", event.currentTarget.files[0])}
                                                />
                                                {errors.pancard && touched.pancard ? (
                                                    <div className="text-danger">{errors.pancard}</div>
                                                ) : null}
                                            </div> */}
                                            {/* <div className="col mb-2">
                                                <label className="fw-semibold">FSSAI License</label>
                                                <input
                                                    type="file"
                                                    name="fssai"
                                                    className="form-control"
                                                    onChange={(event) => setFieldValue("fssai", event.currentTarget.files[0])}
                                                />
                                                {errors.fssai && touched.fssai ? (
                                                    <div className="text-danger">{errors.fssai}</div>
                                                ) : null}
                                            </div> */}
                                            {/* <div className="col mb-2">
                                                <label className="fw-semibold">GST Certificate</label>
                                                <input
                                                    type="file"
                                                    name="gst"
                                                    className="form-control"
                                                    onChange={(event) => setFieldValue("gst", event.currentTarget.files[0])}
                                                />
                                                {errors.gst && touched.gst ? (
                                                    <div className="text-danger">{errors.gst}</div>
                                                ) : null}
                                            </div> */}
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Password</label>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                                {errors.password && touched.password ? (
                                                    <div className="text-danger">{errors.password}</div>
                                                ) : null}
                                            </div>

                                        </div>
                                        <div className="row mt-2">
                                            <div className="col mb-2">
                                                <label className="fw-semibold">Confirm Password</label>
                                                <Field
                                                    name="cpassword"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Confirm Password"
                                                />
                                                {errors.cpassword && touched.cpassword ? (
                                                    <div className="text-danger">{errors.cpassword}</div>
                                                ) : null}
                                            </div>

                                        </div>


                                        <div className="row d-flex justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-success mt-4 w-50 text-white fw-semibold"

                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


