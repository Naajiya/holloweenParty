import React from 'react'
import ghstImg from '../assets/ghostwithbroom.png'

function About() {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:'#4B0082',fontFamily:'serif'}}>
        <div className='container p-5'>
           
            <div className='row pt-5 d-flex align-items-center justify-content-center text-light' style={{fontFamily:'cursive'}}>
                <div className='col-lg-6 col-sm-12'>
                    <img className='img-fluid' src={ghstImg} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h1>ABOUT THE PARTY</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque placeat delectus expedita magnam soluta sapiente repellendus ducimus, sunt sed perspiciatis quae at atque ab eligendi aperiam aliquid voluptates nesciunt</p>
                    <div className='d-flex'>
                    <i class="fa-solid fa-calendar-days fa-lg m-4"></i>
                    <div className='m-3'>
                        <p className='fw-bold'>05-11-2024 Nov-MONDAY</p>
                        <p>Start at 7pm</p>
                    </div>
                    </div>
                    <div className='d-flex'>
                    <i class="fa-solid fa-location-dot fa-lg m-4"></i>
                    <div className='m-3'>
                        <p className=' fw-bold'>Enter Your Location</p>
                        <p>New York</p>
                    </div>
                    </div>
                    <button className='btn btn-danger m-2'>BUY TICKET</button>
                </div>
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About