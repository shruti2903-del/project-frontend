import React, { useState } from 'react'
import imageCompression from 'browser-image-compression';
import toast, { Toaster } from 'react-hot-toast';
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar';
import Navbar from '../../components/Navbar';

export default function VendorRegister() {
    const [imageFile, setImageFile] = useState(null)

    async function handleImageUpload(event) {
        const file = event.target.files[0];
        setImageFile(file);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (imageFile && imageFile.size > 500 * 1024) {
            toast.error('File size must be less than 500KB');
            return;
        }

        const options = {
            maxSizeKB: 500,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        }

        try {
            if (imageFile) {
                const compressedFile = await imageCompression(imageFile, options);
                console.log("compressed file", compressedFile)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />}
            
            <div className='container'>
                <div className='row text-center d-flex justify-content-center'>
                    <h1 className="fw-bold mt-5">
                        Vendor Registration
                    </h1>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12 col-sm-12 my-4 shadow p-3 mb-5 rounded py-5' id='content'>
                        <div className='overflow-auto'>
                            <form onSubmit={handleSubmit}>
                                <h5 className='fw-semibold'>Company Contact Information</h5>
                                <hr />
                                <div className='input-group mb-3'>
                                    <input type="text" className="form-control" placeholder="Business/Organization Name " aria-label="name" aria-describedby="basic-addon1" />
                                </div>
                                <h6 className='mt-4 mb-3 fw-semibold'>Company Address</h6>
                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" placeholder="Street Address " />
                                    </div>
                                    <div className='col input-group mb-3'>
                                        <input type="text" className="form-control" placeholder="Street Address Line 2" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" placeholder="City " />
                                    </div>
                                    <div className='col input-group mb-3'>
                                        <input type="text" className="form-control" placeholder="State/Province" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" placeholder="Postal/Zip Code " />
                                    </div>
                                    <div className='col input-group mb-3'>
                                        <input type="text" className="form-control" placeholder="Country" />
                                    </div>
                                </div>
                                <h6 className='mt-4 mb-3 fw-semibold'>Point of Contact</h6>
                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" placeholder="First Name " />
                                    </div>
                                    <div className='col input-group mb-3'>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" placeholder="Aadhar Card Number " />
                                    </div>
                                    <div className='col input-group mb-3'>
                                        <input type="text" className="form-control" placeholder="PAN Card Number" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" placeholder='Phone Number' />
                                    </div>
                                    <div className='col input group mb-3'>
                                        <input type="email" className="form-control" placeholder='ex:myname@example.com' />

                                    </div>
                                </div>
                                <h6 className='mt-4 mb-3 fw-semibold'>Image Upload</h6>
                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="file" className="form-control" accept="image/*" onChange={handleImageUpload} />
                                    </div>

                                    <div className='col  mb-3'></div>
                                </div>
                                <h5 className='fw-semibold mt-4'>Company Overview</h5>
                                <hr />

                                <h6 className='mt-4 mb-3 fw-semibold'>General Details of Services/Goods</h6>
                                <div className='input-group mb-3'>

                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                                <h6 className='mt-4 mb-3 fw-semibold'>Establishment Date</h6>
                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className='col mb-3'></div>
                                </div>

                                <h6 className='mt-4 mb-3 fw-semibold'>Licensed?</h6>
                                <div className='row m-1'>
                                    <div className="col form-check mb-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="col form-check mb-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <h6 className='mt-4 mb-3 fw-semibold'>Gross Annual Sales</h6>
                                <div className='row'>
                                    <div className='col input-group mb-3'>

                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className='col mb-3'></div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <button type="submit" className="btn mt-4 " style={{ background: '#00a287', width: '50%', color: 'white', fontWeight: '600' }}>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}
