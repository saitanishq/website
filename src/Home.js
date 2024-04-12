// Home.js
import React, { useState, useEffect, useRef } from 'react';
import backgroundVideo from './background.mp4';
import logo from './logo.png';

const styles = {
  
subTitle: {
    color: '#333',
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  logo: {
    width: '200px',  // Adjust the width as necessary
    height: '200px', // Make height equal to the width to maintain the circle shape
    margin: '10px 0', // Adds space around the logo
    borderRadius: '30%', // Makes the image circular
    backgroundColor: '#f0f0f0', // Light grey background, adjust the color as needed
    display: 'block', // Ensures that the image is treated as a block element
    objectFit: 'cover', // Ensures the image covers the area without distorting aspect ratio
  },
  header: {
    display: 'flex', // Enable flexbox
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'center', // Center children along the main axis
    alignItems: 'center', // Center children along the cross axis
    height: '100vh', // Make the header take up the full viewport height
    textAlign: 'center', // Ensure text is centered within each child
    color: '#f8f8f8', // Light text color for contrast against dark background
  },
  mainTitle: {
    // ... other mainTitle styles remain unchanged
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#333',
    fontSize: '1.5rem',
    margin: '1rem 0',// ... other subTitle styles remain unchanged
    visibility: 'visible', // Make sure the subtitle is visible
  },
  connectButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: '#fff',
    border: '2px solid #333',
    borderRadius: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '-1',
    objectFit: 'cover',
  },
};
const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [videoTime, setVideoTime] = useState(0); // State to keep track of video time
  const videoRef = useRef(null); // Ref to access the video element directly
  const fullText = `"Unlock the potential of VOC's"`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 50);

    // This cleanup function will be called when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = videoTime;
      video.play();
    }

    // Event listeners to update video time
    const handlePlay = () => setVideoTime(video.currentTime);
    const handlePause = () => setVideoTime(video.currentTime);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Cleanup
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [videoTime]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted loop style={styles.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <header style={styles.header}>
        <img src={logo} alt="Company Logo" style={styles.logo} />
        <h1 style={styles.mainTitle}>Pioneering Olfaction Diagnostics</h1>
        <b><p style={styles.subTitle}>{typedText}</p></b>
      </header>
    </div>
  );
};

export default Home;