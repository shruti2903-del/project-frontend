import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VendorHome() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem('role') === 'user') {
            navigate('/UserHome')
        } else if(!localStorage.getItem("token")) {
            navigate('/login')
        }
    },[])
    return (
        <div>VendorHome</div>
    )
}
