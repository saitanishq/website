import React, { useState, useRef, useEffect} from 'react';
import logoImage from './logo.png'; 
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Team from './Team.js';
import Home from './Home.js';
import emailjs from 'emailjs-com';
import Project from './Project.js';
import Journey from './Journey.js';

// Styles object
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  },
  logo: {
    height: '50px',
    marginRight: '1rem',
  },
  navItemsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 1rem',
    color: '#fff',
    textDecoration: 'none',
  }
};

const App = () => {
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("dEeVscaf8DpmeFnmE"); // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key
  }, []);

  const showContactForm = () => setFormVisible(true);
  const hideContactForm = () => setFormVisible(false);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_36rex6b', 'template_w0bnw8e', formRef.current)
      .then(() => {
        console.log('SUCCESS!');
        hideContactForm(); // Hide form after successful email send
      }, (error) => {
        console.log('FAILED...', error);
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
      padding: '30px',
      width: '400px',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      zIndex: '1050'
    }}>
      <form ref={formRef} onSubmit={sendEmail}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Contact Us</h2>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Name:
          <input type="text" name="from_name" required style={{
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
          <input type="email" name="from_email" required style={{
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
        <nav style={styles.navbar}>
          <Link style={styles.navItem} to="/Home">Home</Link>
          <Link style={styles.navItem} to="/Project">Our Project</Link>
          <Link style={styles.navItem} to="/Team">Team</Link>
          <Link style={styles.navItem} to="/Journey">The Journey</Link>
          <Link style={styles.navItem} to="#" onClick={(e) => {
            showContactForm();
            e.preventDefault();
          }}>Contact Us</Link>
        </nav>

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
