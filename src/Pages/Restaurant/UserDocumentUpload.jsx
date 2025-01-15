import axios from 'axios';
import React, { useState } from 'react'
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar';
import { useNavigate } from 'react-router-dom';

export default function UserDocumentUpload() {
    const initialValues = {aadhar: null,};
const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
const navigate = useNavigate()
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

            aadhar: true,
        });
        console.log(formData);
        //    If no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            //    Get the submission ID from localStorage
            const submissionId = localStorage.getItem('userid');
            console.log(submissionId)

            //    Create FormData object
            const formDataWithId = new FormData();

            // Append the submission ID
            formDataWithId.append('id', submissionId);

            // Append the files to the FormData object
            if (formData.aadhar) formDataWithId.append('aadhar', formData.aadhar);

            console.log('Form data submitted:', formDataWithId);
            try {
                const token = localStorage.getItem('token');
                const response = await axios.put(
                    `${process.env.REACT_APP_API_URL}auth/updatedocs`,
                    formDataWithId
                );
                console.log('Form submitted successfully:', response.data);
                navigate('/')
                
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }

    };

    return (
        <>
        <LoggedInUserNavbar/>
        <div className="container">
            <h5 className="mt-4">Documents</h5>
            <hr />

            <form onSubmit={handleSubmit}>

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
        </>
    );

}
