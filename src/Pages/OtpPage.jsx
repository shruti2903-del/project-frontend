import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import OTPInput from 'react-otp-input';
import Navbar from '../components/Navbar';

export default function OtpPage() {

    const [otp, setOtp] = useState('');
    async function handleSubmit(e) {
        e.preventDefault()
        const body = {
            "userid": localStorage.getItem('id'),
            "otp": otp
        };
        
        
        
        const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/checkotp`,body);
        console.log(response.data.data);
        
        if (response.data.status==='success') {
            toast.success('Done')
            
        }else{
            toast.error('Error')
        }
        
    }
    
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0',
        },
        input: {
            width: '50px',
            height: '50px',
            fontSize: '20px',
            textAlign: 'center',
            margin: '0 5px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            transition: 'border-color 0.3s ease',
        },
        inputFocus: {
            borderColor: '#4CAF50',
        },
        separator: {
            fontSize: '20px',
            margin: '0 5px',
        },
    };
    return (

        <>
            
            <div className='container'>
                <div className="row text-center d-flex justify-content-center">
                    <h1 className="fw-bold mt-5">
                        Verify OTP
                    </h1>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-6 col-sm-12 my-4 shadow p-5 my-5 mb-5 rounded py-5' id='content'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className='header-text mb-4 text-center'>
                                <h3 style={{ color: '#00a287' }}>Enter your OTP</h3>
                            </div>
                            <div className='input-group mb-3 text-center d-flex justify-content-center'>
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input  {...props} style={props.focused ? { ...style.input, ...style.inputFocus } : style.input} />}
                                />

                            </div>

                            <div className='row d-flex justify-content-center'>
                                <button type="submit"
                                    className="btn mt-3 text-center  d-inline"
                                    style={{ background: '#00a287', color: 'white', width: '50%', fontWeight: '600' }}>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
      <div><Toaster position="top-center" /></div>

        </>
    )
}

