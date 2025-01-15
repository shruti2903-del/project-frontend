import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
    const [couponCode, setCouponCode] = useState('');
    const [couponCodedb, setCouponCodedb] = useState('');
    const [grandTotal, setGrandTotal] = useState(1200);
    const [discount, setDiscount] = useState(0.0);
    const [subtotal, setSubtotal] = useState(1000);
    const [sgst, setSgst] = useState(0.1);
    const [cgst, setCgst] = useState(0.1);
    const [loading, setLoading] = useState(false);
    const [redeemSuccess, setRedeemSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    // Fetch and generate a coupon on page load
    useEffect(() => {
        const hasRunBefore = localStorage.getItem('hasRunBefore');

        if (!hasRunBefore) {
            
            const id = localStorage.getItem('userid');  // Get the user ID from localStorage
            if (id) {
                const generateCoupon = async () => {
                    try {
                        // Make API call to create coupon using the user ID
                        const response = await axios.post(`${process.env.REACT_APP_API_URL}payments/createcoupon`, {
                            user_id: id
                        }, {
                            headers: {
                                'Authorization': `Bearer ${token}`  // Add the token in the Authorization header
                            }
                        });

                        if (response.data.status === 'success') {
                            // Set the generated coupon code to the state
                            setCouponCodedb(response.data.data.coupon_code);
                            console.log('Coupon generated:', response.data.data.coupon_code);
                        } else {
                            setErrorMessage('Failed to generate coupon');
                        }
                    } catch (err) {
                        console.error('Error generating coupon:', err);
                        setErrorMessage('An error occurred while generating the coupon');
                    }
                };

                generateCoupon(); // Call the function to generate coupon on page load
            } else {
                setErrorMessage('User ID not found in localStorage');
            }
            localStorage.setItem('hasRunBefore', 'true');
        }
    }, []);


    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleRedeem = async (e) => {
        e.preventDefault();

        if (!couponCode) {
            alert('Please enter a coupon code.');
            return;
        }

        setLoading(true);

        // Directly apply the coupon without validation
        setDiscount(100); // Apply a fixed discount for the coupon (you can modify this logic)
        setGrandTotal(0); // Set grand total to 0 if coupon is applied
        setRedeemSuccess(true);


        setLoading(false);
    };

    const handlePayment = async () => {
        setLoading(true);

        // Prepare the payment data
        const paymentData = {
            user_id: localStorage.getItem('userid'), // Use the user ID directly from localStorage
            amount: grandTotal,
            payment_method: 'coupon',
            coupon: couponCode,
            transaction_id: 'TXN789456123', // Example transaction ID
            subtotal: subtotal,
            sgst: subtotal * sgst,
            cgst: subtotal * cgst,
            discount: discount,
            grandtotal: grandTotal,

        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}payments/createpayment`, paymentData, {
                headers: {
                    'Authorization': `Bearer ${token}`  // Add the token in the Authorization header
                }
            }
            );

            if (response.data.status === 'success') {
                alert('Payment created successfully');
                console.log(response.data);
                navigate('/userdash')
            } else {
                alert('Payment creation failed');
            }
        } catch (err) {
            console.error('Error creating payment:', err);
            alert('An error occurred while processing the payment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <h1 className="fw-bold text-center">Payment Details</h1>
                    <div className="col-md-6">
                        <img className='img-fluid w-100 h-75 mt-5' src='/assets/images/auth/paymentpage.avif' alt="Payment Image" />
                    </div>
                    <div className="col-md-6">
                        <div className="row d-flex justify-content-around">
                            <div className="col-md-6 col-sm-12 my-4 mb-5" id="content">
                                <div className="overflow">
                                    <div className='row mt-3'>
                                        <div className='col-md-8 col-sm-12'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder="Enter Coupon Code"
                                                value={couponCode || ''}
                                                onChange={handleCouponChange}

                                            />
                                        </div>
                                        <div className='col-md-4 col-sm-12'>
                                            <button
                                                type='submit'
                                                className='btn btn-success'
                                                onClick={handleRedeem}
                                            >
                                                Redeem
                                            </button>
                                        </div>
                                    </div>

                                    {loading && (
                                        <div className="text-center mt-4">
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )}

                                    {redeemSuccess && !loading && (
                                        <div className="mt-4 text-center">
                                            <div className="alert alert-success" role="alert">
                                                <h4 className="alert-heading">Congrats!</h4>
                                                <p>Your coupon code was successfully applied.</p>
                                                <hr />
                                            </div>
                                        </div>
                                    )}

                                    {errorMessage && !loading && (
                                        <div className="mt-4 text-center">
                                            <div className="alert alert-danger" role="alert">
                                                <h4 className="alert-heading">Error!</h4>
                                                <p>{errorMessage}</p>
                                                <hr />
                                            </div>
                                        </div>
                                    )}

                                    <div className='row fw-medium'>
                                        <div className='col-md-8 col-sm-12'>
                                            <p>Sub Total</p>
                                        </div>
                                        <div className='col-md-4 col-sm-12'>
                                            <p>Rs. {subtotal}</p>
                                        </div>
                                        <hr />
                                        <div className='col-md-8 col-sm-12'>
                                            <p>SGST</p>
                                        </div>
                                        <div className='col-md-4 col-sm-12'>
                                            <p>{sgst * 100}%</p>
                                        </div>
                                        <hr />
                                        <div className='col-md-8 col-sm-12'>
                                            <p>CGST</p>
                                        </div>
                                        <div className='col-md-4 col-sm-12'>
                                            <p>{cgst * 100}%</p>
                                        </div>
                                        <hr />
                                        <div className='col-md-8 col-sm-12'>
                                            <p>Discount</p>
                                        </div>
                                        <div className='col-md-4 col-sm-12'>
                                            <p>{discount}%</p>
                                        </div>
                                        <hr />
                                        <div className='col-md-8 col-sm-12'>
                                            <p>Grand Total</p>
                                        </div>
                                        <div className='col-md-4 col-sm-12'>
                                            <p>Rs. {grandTotal}</p>
                                        </div>
                                    </div>

                                    <div className='row text-center fw-semibold'>
                                        <div className='col-md-12 col-sm-12'>
                                            <button
                                                type='submit'
                                                className='btn btn-success w-100 fw-bold fs-5'
                                                onClick={handlePayment}
                                            >
                                                Pay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

