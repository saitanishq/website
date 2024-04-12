import React, { useState, useRef, useEffect} from 'react';
import logoImage from './logo.png'; 
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Team from './Team.js';
import Home from './Home.js';
import emailjs from 'emailjs-com';
import Project from './Project.js';
import Journey from './Journey.js';
import styled from 'styled-components';

// Styles object
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 1rem;

  @media (max-width: 600px) {
    height: 40px;
  }
`;

const NavItem = styled(Link)`
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  padding: 10px 0;

  @media (max-width: 600px) {
    margin: 0 0.5rem;
    padding: 8px 0;
  }
`;

const App = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // State to track if email was sent
  const formRef = useRef();

  useEffect(() => {
    emailjs.init("dEeVscaf8DpmeFnmE"); // Initialize EmailJS with your public key
  }, []);

  const showContactForm = () => {
    setFormVisible(true);
    setEmailSent(false); // Reset email sent notification when form is opened
  };
  const hideContactForm = () => setFormVisible(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_36rex6b', 'template_iwbd5x6', formRef.current, 'dEeVscaf8DpmeFnmE')
      .then(() => {
        console.log('SUCCESS!');
        alert('We have received your email and will get back to you soon.'); 
        hideContactForm(); // Optionally hide form after successful email send
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again later.'); 
      });
  };

  const ContactForm = () => (
    <div style={{
      display: formVisible ? 'block' : 'none',
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px', // Reduced padding for smaller screens
      width: '90%', // Makes the form take 90% of the screen width on smaller screens
      maxWidth: '400px', // Ensures form does not exceed 400px in width
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      zIndex: '1050',
      overflow: 'auto', // Ensures the form is scrollable if it extends beyond the screen height
    }}>
      <form ref={formRef} onSubmit={sendEmail}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Contact Us</h2>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Name:
          <input type="text" name="user_name" required style={{
            width: '100%',
            padding: '8px',
            margin: '6px 0 16px',
            display: 'block',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input type="email" name="user_email" required style={{
            width: '100%',
            padding: '8px',
            margin: '6px 0 16px',
            display: 'block',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Message:
          <textarea name="message" required style={{
            width: '100%',
            height: '100px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}></textarea>
        </label>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{
            background: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}>Send</button>
          <button type="button" onClick={hideContactForm} style={{
            background: '#f44336',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Close</button>
        </div>
      </form>
    </div>
  );
  
  return (
    <Router>
      <div>
      <Navbar>
        <NavItem to="/Home">Home</NavItem>
        <NavItem to="/Project">Our Project</NavItem>
        <NavItem to="/Team">Team</NavItem>
        <NavItem to="/Journey">The Journey</NavItem>
        <NavItem to="#" onClick={(e) => {
          showContactForm();
          e.preventDefault();
        }}>Contact Us</NavItem>
      </Navbar>

        <ContactForm />

        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Journey" element={<Journey />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
