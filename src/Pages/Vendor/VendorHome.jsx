import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';

export default function VendorHome() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem('role') === 'user') {
            navigate('/loggedin/vendorhome')
        } else if (!localStorage.getItem("token")) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-4 bg-light border-end">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-sm-8">
                        <div className="container">
                            <div className="row text-center d-flex justify-content-around">
                                <h2 className="fw-bold mt-5">Choose Vendor</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
