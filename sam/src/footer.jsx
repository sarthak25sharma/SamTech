import React from 'react';
import './footer.css';
import { FaFacebook, FaPhoneAlt } from "react-icons/fa"; // npm install react-icons --save
import { SiGmail } from "react-icons/si";
import { MdFactory, MdContacts } from "react-icons/md";

const ContactUs = () => (
  <div className="contact-us">
    <h3><MdContacts/> Contact Us</h3>
    <p>
      <span className="facebook-logo">
        <FaFacebook />
      </span>{" "}
      <a href="https://www.facebook.com/siunnao/"> Samtech Industries</a>
    </p>
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="tel" name="phone" placeholder="Phone Number" />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
    <ul>
      <li>
        <a
          href="https://www.google.com/maps/search/N-17,18,+Automobile+Complex,+Site+1,+Industrial+Area,+Unnao-+209801,+Uttar+Pradesh/@26.5440517,80.3193122,11z/data=!3m1!4b1?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdFactory className="factory-icon" />
          N-17,18, Automobile Complex, Site 1, <br />
          Industrial Area, Unnao- 209801, Uttar Pradesh
          <br />
        </a>
        <br />
        <div className="contact-info">
          <SiGmail className="gmail-icon" />
          <div>
            <a href="mailto:samtechindustries07@gmail.com">
              samtechindustries07@gmail.com
            </a>
            <a href="mailto:siunnao@gmail.com">siunnao@gmail.com</a>
          </div>
        </div>
        <div className="contact-info">
          <FaPhoneAlt className="phone-icon" />
          <div>
            <a href="tel:+919811798030">+91 98117 98030</a>
            <a href="tel:+917651801907">+91 76518 01907</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default ContactUs;
