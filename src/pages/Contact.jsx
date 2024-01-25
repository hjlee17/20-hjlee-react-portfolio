import { useState, useEffect } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  // define state variables - form fields, email validation, status messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  // email format validation logic using a regex
  const validateEmail = (email) => {
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegEx.test(email);
  };

  // function specifically for onBlur event for email input
  // validates email and updates status message BEFORE submit
  const handleEmailBlur = () => {
    setIsEmailValid(validateEmail(email));
    if (!validateEmail(email)) {
      setStatusMessage('Email not valid.');
    } else {
      setStatusMessage('');
    }
  };

  // watch statusMessage, if it's a success message, clear after 5 seconds
  useEffect(() => {
    if (statusMessage === 'Info received!') {
      const timeout = setTimeout(() => {
        setStatusMessage('');
      }, 5000);
      return () => clearTimeout(timeout); 
    }
  }, [statusMessage]);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // confirm form data collection
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // on submit, validates form data and set the status message div with correct message
    if (!name) {
      setStatusMessage('Please fill out your name.');
    } else if (!message) {
      setStatusMessage('Please write a message.');
    } else if (!isEmailValid) {
      setStatusMessage('Please provide an email.');
    } else {
      setStatusMessage('Info received!');

      // reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  
  return (
    <div className='contact'>

      <h1>Contact</h1>

      <form className='form' onSubmit={handleSubmit}>

        <div className='form-group'>
          <label>Name: </label>
          <input
            type='text'
            id='name'
            placeholder='your name'
            value={name} // field shows corresponding state
            onChange={(event) => setName(event.target.value)} // set corresponding state with form value
          />
        </div>

        <div className='form-group'>
          <label>Email: </label>
          <input
            type='email'
            id='email'
            placeholder='your email address'
            value={email} // field shows corresponding state
            onChange={(event) => setEmail(event.target.value)} // set corresponding state with form value
            onBlur={handleEmailBlur} // update status message onBlur - user clicks out of field
          />
        </div>

        <div className='form-group'>
          <label>Message: </label>
          <textarea
            id='message'
            placeholder='write your message here.'
            value={message} // field shows corresponding state
            onChange={(event) => setMessage(event.target.value)} // set corresponding state with form value
            rows='4' // sets initial message field size
          ></textarea>
        </div>

        {/*
        1. render the div if a status message exists
        2. three error message, one success message
        3. set 'status-message' class for error message, or set 'success-message' class for success message
        */}
        <div 
          className={`error-message ${statusMessage === 'Info received!' ? 'success-message' : ''}`}>
          {statusMessage}
        </div>

        <button type='submit'>Submit</button>
        
      </form>
    </div>
  );
}

// DONE
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

// DONE
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// DONE
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address