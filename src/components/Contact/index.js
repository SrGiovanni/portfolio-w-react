import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState( { name: '', email: '', message: '' } );

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    } 
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log('errorMessage', errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
      <section>
        <h2>Contact me</h2>
        <form id="contact-form">
          <div className='my-1 flex-column'>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
          </div>
          <div className='my-1 flex-column'>
            <label htmlFor="email" >Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className='my-1 flex-column'>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
          </div>
          {errorMessage && (
            <div className='my-1'>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button  className='my-1' type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
      </section>
    )
}
    
export default ContactForm;