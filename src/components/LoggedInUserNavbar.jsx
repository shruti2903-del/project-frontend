import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubnavBar from './SubnavBar'

export default function LoggedInUserNavbar() {
    const [image, setImage] = useState(null)
    useEffect(() => {
        const savedImage = localStorage.getItem("userImage");
        setImage(savedImage);
    }, [])
    const navigate = useNavigate()
    function logout() {

        localStorage.clear();
        document.querySelector('.btn-close').click();
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
        else {
            navigate('/login');
        }

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid  ">
                    <a className="navbar-brand fw-bold fs-3 text-decoration-none" href="/userhome">
                        {/* <img src='/assets/images/auth/logo.webp' style={{ maxWidth: '80%' }} /> */} HELLO
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn " type="button"   >
                                    <img src={image || "/assets/images/auth/person.svg"} alt="edit user" className='rounded-circle' style={{ width: '40px', height: '40px', cursor: 'pointer' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <div className="offcanvas offcanvas-end rounded " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasRightLabel">Hey!!</h3>
                    <button type="button" className="btn-close btn-close-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                </div>
                <a href='/loggedin/editprofile' className='text-decoration-none fs-5 fw-semibold text-danger ms-3'>Profile</a>

                <hr />
                <div className="offcanvas-body d-flex flex-column">
                    <div className='col'>
                        <div className='row shadow-sm p-1 mb-3'>
                            <a className='text-decoration-none text-black text-start fw-1' href='/loggedin/'>
                                <img src='/assets/images/auth/homepage.png' className='me-2' />
                                Home</a>
                        </div>
                        <div className='row shadow-sm p-1 mb-3'>
                            <a className='text-decoration-none  text-black  text-start fw-1' href='#'>
                                <img src='/assets/images/auth/notification.png' className='me-2' style={{ height: '32px', width: '32px' }} />Notifications</a>
                        </div>
                        <div className='row shadow-sm p-1 mb-3'>
                            <a className='text-decoration-none text-black  text-start fw-1 ' href='#'>
                                <img src='/assets/images/auth/orders.png' className='me-2' style={{ height: '32px', width: '32px' }} />Your Orders</a>
                        </div>
                        <div className='row shadow-sm p-1 mb-3'>
                            <a className='text-decoration-none text-black  text-start fw-1 ' href='#'>
                                <img src='/assets/images/auth/rewards.png' className='me-2' style={{ height: '32px', width: '32px' }} />Rewards</a>
                        </div><div className='row shadow-sm p-1 mb-3'>
                            <a className='text-decoration-none  text-black text-start fw-1 ' href='/loggedin/communityhome'>
                                <img src='/assets/images/auth/community.png' className='me-2' style={{ height: '32px', width: '32px' }} />Join Community</a>
                        </div>
                    </div>
                    <div className=' shadow-sm end-0'>
                        <button className='btn btn-danger w-100' onClick={logout} >Log out</button>
                    </div>
                </div>
            </div>
            {/* <SubnavBar /> */}
        </>
    )
}
