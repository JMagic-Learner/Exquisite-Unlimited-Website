import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const EmailOrderMobile = () => {
 
    const [text,setText] = useState("Copy/paste your order here;");
    const form = useRef();
    const handleChange = (event) => {
      event.preventDefault()
      const { name, value } = event.target;
      setText(value)
  }
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_exquisite', 'template_dm7fmbr', form.current, 'xH1ueJRoUuH48Sv_H')
      .then((result) => {
          console.log(result)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setText("Copy/paste your order here;")
  };

  return (
    <div className="modal-body d-flex">
    <form ref={form} onSubmit={sendEmail}> 
        <div className="input-group mb-3">
            <label>Customer Name</label>
            <input className="orderLabel" type="text" name="from_name" />
        </div>



        <div className="input-group mb-3">
            <label>Customer Email</label>
            <input className="orderLabel" type="email" name="email" />
        </div>


        <div className="input-group mb-3">
            <label> Invoice (Copy Paste Cart) </label>
            <textarea className="invoice-mobile" name="message" onChange={handleChange} value={text}/>
        </div>

<button className="btn btn-outline-secondary shop-menu-button" type="submit" value="Send" > ORDER </button>
    </form>
</div>
  );
};

export default EmailOrderMobile