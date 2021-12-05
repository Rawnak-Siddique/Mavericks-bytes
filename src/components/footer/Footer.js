import React from 'react';
import './Footer.css'
import fb from '../image/icons8-facebook-30.png'
import tw from '../image/icons8-twitter-50.png'
import ig from '../image/icons8-instagram-old-50.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_ColBotm">
        <p>Website Developed by</p>
        <p>MAVERICKS BYTE ©</p>
        <p>Notice of Privacy Practices</p>
        </div>
        <div className="footer_Col">
        <p id="padBtm">For loren lipson</p>
        <p>Pay My Bill</p>
        <p>Find a develope</p>
        <p>Find a Location</p>
        <p>Patient Portal</p>
        <p>OMC</p>
        <p id="padBtm">MCMC</p>
        <p>Terms of Use</p>
        </div>
      <div className="footer_Col">
        <p id="padBtm">About MAVERICKS BYTE</p>
        <p>About Us</p>
        <p>For Physicians</p>
        <p>For Physicians</p>
        <p>Volunteer</p>
        <p id="padBtm">Community Support</p>
        <p>Notice of NonDiscrimination</p>
      </div>
      <div className="footer_Col">
          <p id="padBtm">Contact Info</p>
          <p>Contact Us</p>
          <p>01308370330</p>
          <div id="padBtm" className="footer_ColImg">
              <img src={fb} alt="" />
              <img src={tw} alt="" />
              <img src={ig} alt="" />
          </div>
          <p>Copyright © 2021 MAVERICKS BYTE All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;