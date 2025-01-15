import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function RestaurantLogin() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };

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
          <h1 className="fw-bold mt-5">Restaurant Login</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div
            className="col-md-4 col-sm-12 my-5 shadow p-4 mb-5 rounded py-5"
            id="content"
          >
            <div className="overflow">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="row mt-2">
                      <div className="col mb-12">
                        <label className="fw-semibold">Email</label>
                        <Field
                          name="email"
                          type="email"
                          className="form-control mt-2"
                          placeholder="Enter your Email"
                        />
                        {errors.email && touched.email ? (
                          <div className="text-danger">{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col mb-2">
                        <label className="fw-semibold">Password</label>
                        <Field
                          name="password"
                          type="password"
                          className="form-control mt-2"
                          placeholder="Enter your Password"
                        />
                        {errors.password && touched.password ? (
                          <div className="text-danger">{errors.password}</div>
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
