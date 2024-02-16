import React, { useState, useEffect } from 'react';

const styles = {
  subTitle: {
    color: '#333', // Dark grey for contrast against white background
    fontSize: '1.5rem',
    margin: '1rem 0',
    // Ensure to include any other necessary styling attributes here
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333', // Changed to dark grey
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    height: '50px', // Example height, adjust as needed
    marginRight: '1rem', // Ensures some space between the logo and the first nav item
  },
  navItem: {
    margin: '0 1rem',
    color: '#fff', // Changed to white for contrast with dark background
    textDecoration: 'none',
  },
  header: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  mainTitle: {
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  connectButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    fontSize: '1rem',
    color: '#333', // Changed to dark for contrast on the button
    backgroundColor: '#fff', // Changed to light for the button background
    border: '2px solid #333', // Added border to maintain contrast
    borderRadius: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease', // Smooth transition for hover effect
  },
};


const App = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = `"vFocusing on the development and application of digital biosensors enhanced by machine learning analysis. This innovative project aims to revolutionize the field of diagnostics through the use of olfaction, or the sense of smell, leveraging technology to detect and analyze various conditions or substances. By integrating machine learning, the project seeks to refine the accuracy, efficiency, and predictive capabilities of these biosensors, potentially opening new pathways for non-invasive diagnostics and personalized medicine."`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 50); // Adjust speed as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <nav style={styles.navbar}>
      <a style={styles.navItem} href="/">HOME</a>
      <a style={styles.navItem} href="/">Our Project</a>
      <a style={styles.navItem} href="/">Team</a>
      <a style={styles.navItem} href="/">News</a>
      <a style={styles.navItem} href="/">Contact US</a>
      </nav>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Pioneering Olfaction Diagnostics</h1>
        <p style={styles.typingAnimation}>{typedText}</p>
        <button style={styles.connectButton} onMouseOver={(e) => e.target.style.backgroundColor = '#A9A9A9'} onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}>CONNECT WITH US</button>
      </header>
      {/* Add other sections as needed */}
    </div>
  );
};

export default App;
