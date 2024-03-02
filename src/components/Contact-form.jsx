import React, { useRef, useState } from 'react';
import "../styles/Contact-form.css";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2o7mrcl', 
        'template_rljts58', 
        form.current, 
        'xIE7dnlfzzy1doOiN'
      )
      .then(
        () => {
          console.log("message sent!");
          setMessageSent(true); 
          form.current.reset();
        },
        (error) => {
          console.log("ERROR: message not sent!");
        }
      );
  };

  return (
    <>
    <h1>Contact Me💬</h1>
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
       {messageSent && (
        <div className="popup">
          <p>Message sent!</p>
        </div>
      )}

      <input className="submitButton" type="submit" value="Send" />
       
    </form>


    </>
  );
};

export default ContactUs;
