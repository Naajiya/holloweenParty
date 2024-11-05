import React from 'react'
import bgImag from '../assets/pupkin.png'

function Home() {
  return (
    <>
    <div  style={{
        margin: '0%', 
        padding: '0%', 
        height: '100vh', 
        overflow: 'hidden', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundImage: `url(${bgImag})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
        {/* <img className='img-fluid' src={bgImag} alt="" /> */}
        <div className='align-items-center justify-content-center text-center p-4' style={{fontFamily:'cursive'}}>
            <h1 className='text-align-center text-light'>HALLOWEEN PARTY</h1>
            <p className='text-white'>this year holloween eve, we are celebrating with a fong-static party! <br /> join as for
                a night of spooky fun and games
            </p>
            <button className='btn btn-light p-2  border rounded border-primary' >BUY TICKETS</button>
        </div>
       
    </div>
    </>
  )
}

export default Home