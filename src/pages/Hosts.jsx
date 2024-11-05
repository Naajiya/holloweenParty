import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import magOne from '../assets/magciontwo.png';
import magTwo from '../assets/magitionone.png'
import magThre from '../assets/magitionthre.jpg'




function Hosts() {
    return (
        <>
            <div className='container-fluid text-light' style={{ backgroundColor: '#4B0082' }}>
                <div className='container text-center' style={{ fontFamily: 'cursive' }}>
                    <h2 className='pt-5'>MEET THE HOLLOWEEN HOSTS</h2>
                    <span >  Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <div className='row d-flex align-items-center justify-content-center text-light'>
                       
                       
                        <Card className='m-2' style={{ width: '18rem', background: 'none', color: 'white', border: '1px solid white' }}>
                            <Card.Img style={{ height: '400px', width: '350px' }} className='img-fluid' variant="top" src={magOne} />
                            <Card.Body>
                                <Card.Title>JENNER MOOR</Card.Title>
                                <Card.Text>
                                    Some quick example .
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        <Card className='m-2' style={{ width: '18rem', background: 'none', color: 'white', border: '1px solid white' }}>
                            <Card.Img style={{ height: '400px', width: '350px' }} className='img-fluid' variant="top" src={magTwo} />
                            <Card.Body>
                                <Card.Title>JENNER MOOR</Card.Title>
                                <Card.Text>
                                    Some quick example
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        <Card className='m-2' style={{ width: '18rem', background: 'none', color: 'white', border: '1px solid white' }}>
                            <Card.Img className='img-fluid' style={{ height: '400px', width: '350px' }} variant="top" src={magThre} />
                            <Card.Body>
                                <Card.Title>JENNER MOOR</Card.Title>
                                <Card.Text>
                                    Some quick example .
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hosts