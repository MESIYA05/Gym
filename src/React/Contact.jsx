import React from 'react'
import imgh from '../ASSETS/Colo.png';
import  './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8jbjpdr', 'template_r86awio', form.current, {
        publicKey: 'wMhEhRxLNvXM48Ptw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <>
       <div className='container-fluid'>
      <h1 className='text-center'>JOIN <span>US</span></h1>
      
      
      <div className='row'>

        <div className='col-lg-6 col-md-6 col-12'>
         <img src={imgh}  className='img-fluid ik'/>
        </div>

      <div className='col-lg-6 col-md-6 col-12 intt'>
      <form ref={form} onSubmit={sendEmail}>
        
        <input type="text" placeholder='                     Enter Name' name='name' className='int' required /><br/>
        
        <input type="text" placeholder='                     Enter Age' name='user_age' className='int'  required/><br/>
        <input type="text" placeholder='                   Enter Mobile No' name='user_mobile' className='int'  required/><br/>
        <input type="email" placeholder='                     Enter Email' name='user_email' className='int'  id="email" 
  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/><br/>
        <select className='inti'>
        <option value="month" ></option>
          <option  name='user_text' value="weightlift"> WEIGHT LIFTING (WL)</option>
          <option  name='input' value="weightloss">WEIGHT LOSS (WLSS)</option>
          <option  name='input' value="fatlosstlift">FAT LOSS(FL)</option>
          <option name='input' value="physical training">PHYSICAL TRAINING (PT)</option>
          <option  name='input' value="bulking">BULKING (BK)</option>
          <option  name='input' value="six backs">SIX BACKS (SB)</option>
          <option  name='input' value="cardio">CARDIO (CD)</option>
          <option name='input'  value="yoga">YOGA (YG)</option>
        </select>
        <br/>
        <select className='inti'>
        <option value="month" ></option>
          <option  name='input' value="month" >(WL) MONTH RS :₹ 800.</option>
          <option name='input' value="year" >(WL)  YEAR RS :₹ 9000.</option>
          <option name='input' value="month" >(WLSS) MONTH RS :₹ 600.</option>
          <option name='input' value="year" >(WLSS)  YEAR RS :₹ 7000.</option>
          <option name='input' value="month" >(FL) MONTH RS :₹ 500.</option>
          <option name='input' value="year" >(FL)  YEAR RS :₹ 6000.</option>
          <option name='input' value="month" >(PT) MONTH RS :₹ 900.</option>
          <option name='input' value="year" >(PT)  YEAR RS :₹ 10500.</option>
          <option name='input' value="month" >(BK) MONTH RS :₹ 700.</option>
          <option name='input' value="year" >(BK)  YEAR RS :₹ 8400.</option>
          <option name='input' value="month" >(SB) MONTH RS :₹ 500.</option>
          <option name='input' value="year" >(SB)  YEAR RS :₹ 60000.</option>
          <option name='input' value="month" >(CD) MONTH RS :₹ 300.</option>
          <option name='input' value="year" >(CD)  YEAR RS :₹ 3400.</option>
          <option name='input' value="month" >(TG) MONTH RS :₹ 200.</option>
          <option name='input' value="year" >(YG)  YEAR RS :₹ 2000.</option>          
        </select><br/>
        <button className='btn' type="submit" value="send">Join Us</button>
      </form>
       
      </div>
      </div>

      <div className='row fotr'>
      <div className='col-lg-6 col-md-6 col-12 foot'>
        <h6   style={{color:'#fff'}}>Copyright © 2025-2030 <span>L</span>DRAGO FITNESS CENTER. ALL Rights Reserved. </h6>
      
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact
