

import axios from 'axios';
import React, { useState } from 'react';

export default function DocumentUpload() {
    const initialValues = {

        pancard: null,
        aadhar: null,
        gst: null,
        fssai: null,
    };

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        setFormData({ ...formData, [fieldName]: file });



    };


    const validateFile = (file) => {
        if (!file) return 'File is required';
        if (file.type !== 'application/pdf') return 'Only PDF files are allowed';
        if (file.size > 1 * 1024 * 1024) return 'File size must be less than or equal to 1 MB';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newErrors = {};

        //    Validate each file input
        Object.keys(formData).forEach((key) => {
            const error = validateFile(formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });

        setErrors(newErrors);
        setTouched({

            pancard: true,
            aadhar: true,
            gst: true,
            fssai: true,
        });
        console.log("hey", formData);
        //    If no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            //    Get the submission ID from localStorage
            const submissionId = localStorage.getItem('businessid');
            console.log(submissionId)

            //    Create FormData object
            const formDataWithId = new FormData();

            // Append the submission ID
            formDataWithId.append('id', submissionId);

            // Append the files to the FormData object
            if (formData.pancard) formDataWithId.append('pancard', formData.pancard);
            if (formData.aadhar) formDataWithId.append('aadhar', formData.aadhar);
            if (formData.gst) formDataWithId.append('gst', formData.gst);
            if (formData.fssai) formDataWithId.append('fssai', formData.fssai);

            console.log('Form data submitted:', formDataWithId);
            try {
                const token = localStorage.getItem('token');
                const response = await axios.put(
                    `${process.env.REACT_APP_API_URL}business/updatedocs`,
                    formDataWithId, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
                );
                console.log('Form submitted successfully:', response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }

    };

    return (
        <div className="container">
            <h5 className="mt-4">Documents</h5>
            <hr />

            <form onSubmit={handleSubmit}>
                {/* PAN Card File */}
                <div className="row">
                    <div className="col">
                        <label className="fw-semibold">PAN Card</label>
                        <input
                            name="pancard"
                            type="file"
                            className="form-control mt-2"

                            onChange={(e) => handleFileChange(e, 'pancard')}
                        />
                        {touched.pancard && errors.pancard && (
                            <div className="text-danger">{errors.pancard}</div>
                        )}
                    </div>
                </div>

                {/* Aadhar Card File */}
                <div className="row mt-3">
                    <div className="col">
                        <label className="fw-semibold">Aadhar Card</label>
                        <input
                            name="aadhar"
                            type="file"
                            className="form-control mt-2"
                            onChange={(e) => handleFileChange(e, 'aadhar')}
                        />
                        {touched.aadhar && errors.aadhar && (
                            <div className="text-danger">{errors.aadhar}</div>
                        )}
                    </div>
                </div>

                {/* GSTIN File */}
                <div className="row mt-3">
                    <div className="col">
                        <label className="fw-semibold">GST</label>
                        <input
                            name="gst"
                            type="file"
                            className="form-control mt-2"
                            onChange={(e) => handleFileChange(e, 'gst')}
                        />
                        {touched.gst && errors.gst && (
                            <div className="text-danger">{errors.gst}</div>
                        )}
                    </div>
                </div>

                {/* FSSAI File */}
                <div className="row mt-3">
                    <div className="col">
                        <label className="fw-semibold">FSSAI</label>
                        <input
                            name="fssai"
                            type="file"
                            className="form-control mt-2"
                            onChange={(e) => handleFileChange(e, 'fssai')}
                        />
                        {touched.fssai && errors.fssai && (
                            <div className="text-danger">{errors.fssai}</div>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="row d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-success mt-4 w-50 text-white fw-semibold"
                    >
                        Submit
                    </button>
                </div >
            </form >
        </div >
    );

}

