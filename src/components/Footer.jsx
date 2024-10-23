import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sub'>
       <a href='#header'><h2 >Travel.Com</h2></a>
        <p >Travel around the worl . <br />Explore the beauty of our mother nature</p>
      </div>
     
    <div className="footer-three">
        <h3>Services</h3>
        <h4>Sea Activities</h4>
        <h4>Hot Air Balloon </h4>
        <h4>Moutain Activities</h4>
    </div>
    <div className='footer-three'>
        <h2>Connect Us</h2>
        <div className='icons'>
             <i class="fa-brands fa-facebook"></i>  
             <i className="fa-brands fa-instagram"></i> 
             <i className="fa-brands fa-youtube"></i>
        </div>
    </div>
    </div>
  )
}

export default Footer
