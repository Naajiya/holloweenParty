import React from 'react'
import pumKin from '../assets/pumpum.png'

function Footer() {
    return (
        <>
            <div className='container-fluid' style={{backgroundColor:'#4B0082'}}>
                <div className='container d-flex justify-content-center align-items-center'>
                    <img src={pumKin} alt="" />
                </div>
                <hr style={{color:'white', border:'2px solid white'}}></hr>
                <div className='d-flex justify-content-between align-items-center pe-4 text-light m-2'>
                    <div style={{fontFamily:'cursive',color:'red'}}>
                        <h2>holloween</h2>
                        </div>
                <div className='d-flex justify-content-center align-items-center pe-4 text-light'>
                    <div className='m-3'><i class="fa-brands fa-facebook fa-lg"></i></div>
                    <div className='m-3'><i class="fa-brands fa-youtube fa-lg"></i></div>
                    <div className='m-3'><i class="fa-brands fa-instagram fa-lg"></i></div>
                </div>
                <div style={{fontFamily:'cursive'}}>
                    <p>Enter Your Location</p>
                    <p>(123)-567 897 670</p>
                    
                </div>
                </div>
                s
            </div>
        </>
    )
}

export default Footer