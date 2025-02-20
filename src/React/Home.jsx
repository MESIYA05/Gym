import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import img from '../ASSETS/33.jpg';

const Home = () => {
  return (
    < >
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-12 '>
           <img src={img}  className=' img-fluid imgfit' alt='homelogo'/>
           
          </div>
          <div className='col-lg-6 col-md-6 col-12 wak'>
            <h1 className='heading'>Wake Up! <br/><span>It's Time to Take</span><br/><span className='act'>ACTION</span><br/><span>START TRAINING TODAY !!</span></h1>
            <h2 className='subhead'>Start Your <span>TRAININGS</span><br/>With Our Professional Trainers.</h2>
            <button className='btn'><Link to="/Contact">JOIN US</Link></button>
           
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Home
