import React from 'react'

export default function PageNotFound() {
  return (
    <>
    <div className='container text-center'>
                <div className='row text-center d-flex justify-content-center'>
                    <img src='/assets/error.jpg' className='rounded d-block' style={{height:'40%', width:'40%'}}/>
                </div>
                <h3>
                <a href='/' style={{  color: '#00a287', fontWeight: '600', marginTop: '8px' }}>Go Back to Homepage</a> 
                </h3>
                </div>
    </>
  )
}
