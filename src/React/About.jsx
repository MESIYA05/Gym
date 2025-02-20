import React from 'react'
import img from '../ASSETS/Dark .png';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPinLock} from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <>
      <div className='container-fluid'>
      <h1 className='text-center'>ABOUT <span>GYM</span></h1>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-12'>
           <img src={img}  className=' img-fluid imgfit' alt='about logo'/>
           
          </div>
          <div className='col-lg-6 col-md-6 col-12 texxx'>
            <h1 className='text-center'><span> L</span>DRAGO GYM & FITNESS CENTER</h1>
           <p className='text-center'>  <span>L</span>DRAGO Gym & Fitness center . Since 2025 start the 
           Gym and prime minister mesiya is grand opening and ribbun cutting in a day.
            the gym was unisex gym . more  expensive equipments are here. the specially trainers for more
             experience and guide to your strength & body bilding. </p>
            <h4 className='text-center' style={{color:'#fff'}}  ><FontAwesomeIcon icon={faLocationPinLock}  style={{color:'red'}} /> 212a,Killaan Karuppan Home Opposite, Manakkollai,Kavarapalayam(pt),
            Andimadam(tk),<br/>Ariyalur(dt) 621 805.</h4>
           
          </div>
          
        </div>

      </div>
    </>
  )
}

export default About
