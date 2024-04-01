import React from 'react';
import './footer.css';

const ContactUs = () => (
  <div className="contact-us">
    <h3>Contact Us</h3>
    <p><span>SAMTECH BEST COMPANY FR FR</span></p>
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="tel" name="phone" placeholder="Phone Number" />
      <button type="submit" className="button">Submit</button>
    </form>
    <ul>
      <li>
        <a href="mailto:agraney22044@iiitd.ac.in">
          SAMTECH CORP<br/><br/>
          agraney22044@iiitd.ac.in<br/>
          +919205363113<br/>
          Something Something New Delhi<br/>
          <a href="https://www.google.com/maps/place/70+Wapping+Wall,+London+E1W+3SS/@51.5086197,-0.0549825,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x5296a7cd9df8e54!8m2!3d51.5086197!4d-0.0527938" target="_blank" rel="noopener noreferrer">
          SEE US ON MAP
          </a>
        </a>
      </li>
    </ul>
  </div>
);

export default ContactUs;
