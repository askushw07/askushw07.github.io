import React from 'react';
import './contact.css'
const Contact = () => {
  return (
    <section className="contact section" id='contact'>
      <h2>Contact Me</h2>
      <div className='contact-section'>
        <div>
        <p>
          If you want to get in touch with me, feel free to reach out using the contact details below:
          </p>
          <br /><br />
        <ul>
          <li>Email: your-email@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/your-username">Your LinkedIn Profile</a></li>
          {/* Add more contact details if needed */}
        </ul>
        
        </div>
        <form className='contact-form'>
        <h3>
          You can also use the form below to send me a message:
        </h3>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input type="text" id="name" name="name" placeholder='Enter your Name'/>
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" name="email" placeholder='Enter your E'/>
        </div>
        <div>
          <label htmlFor="message">Message:</label> <br />
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit" className="button button--flex">Send</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;
