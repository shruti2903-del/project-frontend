import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function Order() {
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
                                        <h2 className="fw-bold mt-5">Orders</h2>
                                    </div>
                                    <p>No order yet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
  )
}
