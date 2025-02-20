import React from 'react'
import './Services.css';

import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';
import imgs from '../ASSETS/22.jpg';
import im from '../ASSETS/23.jpg';
import ime from '../ASSETS/24.jpg';
import ims from '../ASSETS/25.jpg';
import ik from '../ASSETS/26.jpg';
import it from '../ASSETS/28.jpg';
import iv from '../ASSETS/images (11).jpeg';
import ia from '../ASSETS/images (8).png';

const Services = () => {
  return (
    <>
      <div className='container'>
      <h1 className='text-center'>OUR <span>SERVICES</span></h1>
      <div className='row text-center '  >
      <div className='col-lg-3 col-md-3 col-12 centr'>
      
       <Card style={{ width: '18rem', border: '2px solid #fff'}} >
      <Card.Img  className="text-center imgheight " variant="top" src={imgs} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >WEIGHT LIFTING (WL)</Card.Title>
        
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
      </div>
  
      <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center  imgheight" variant="top" src={im} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >WEIGHT LOSS (WLSS)</Card.Title>
      
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center imgheight" variant="top" src={ime} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >FAT LOSS(FL)</Card.Title>
        
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center imgheight" variant="top" src={ik} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}}  >PHYSICAL TRAINING (PT)</Card.Title>
        
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center imgheight" variant="top" src={ims} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >YOGA (YG)</Card.Title>
        
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center imgheight" variant="top" src={it} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >BULKING (BK)</Card.Title>
        
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center imgheight" variant="top" src={ia} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >SIX BACKS (SB)</Card.Title>
       
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-3 col-md-3 col-12 centr'>
       <Card style={{ width: '18rem', border: '2px solid #fff' }}>
      <Card.Img  className="text-center imgheight" variant="top" src={iv} />
      <Card.Body className='cards'>
        <Card.Title style={{color: "#fff"}} >CARDIO (CD)</Card.Title>
        
        <button className='btn'><Link to="/Contact">JOIN US</Link></button>
      </Card.Body>
    </Card>
    </div>




      </div>
      </div>
    </>
  )
}

export default Services
