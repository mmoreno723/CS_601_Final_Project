import React from 'react';
import '../styling/Contact.css'

function Contact() {
  return <div className='contactArea'>
    <h1>Contact Me</h1>
    <hr />
    <div className='contactContent'>
      <div className='contactLinks'>
        <h2>Personal Links</h2>
        <a href='https://www.linkedin.com/in/michaelmoreno723/' target='blank' 
          rel='noopener noreferrer' className="contactLink">LinkedIn
        </a>
        <a href='https://www.instagram.com/michael_moreno3/' target='blank' 
          rel='noopener noreferrer' className="contactLink">Instagram
        </a>
        <a href='https://github.com/mmoreno723' target='blank' 
          rel='noopener noreferrer' className="contactLink">GitHub
        </a>
        <a href='https://medium.com/@morenomichael723' target='blank' 
          rel='noopener noreferrer' className="contactLink">Medium
        </a>
      </div>
      <div className='contactForm'>
        <h2>Send Me an Email</h2>
        <form
          action="https://formspree.io/f/xwpkjlpa"
          method="POST">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="contactSubmitBtn">Send</button>
        </form>
      </div>
    </div>
  </div>;
}

export default Contact;