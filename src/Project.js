// src/Project.js
import React from 'react';
import './Project.css'; // Assuming you have a separate CSS file for this component
import shirtImg from './shirt-img.jpg'; // Make sure the path to your image is correct

function Project() {
  return (
    <div className="shirt-background">
      <div className="text-overlay bio-ink-activated-areas">Our company is pioneering a groundbreaking approach to revolutionize the disease diagnosis process by leveraging the unique concept that certain illnesses emit specific scents. This innovative method is predicated on the understanding that human sweat and other bodily secretions contain chemicals that, when released, carry distinct odors associated with various health conditions. By meticulously analyzing these unique combinations of molecules and atoms that constitute these scents, our technology aims to accurately identify and diagnose potential illnesses a patient may be experiencing. This new detection technique not only promises to enhance the accuracy of diagnoses but also offers a non-invasive and potentially quicker alternative to traditional diagnostic methods, making it a significant advancement in the field of medical science and patient care. </div><div className="text-overlay bio-activated-shirt">Proposed Design Bio-Activated Shirt</div>
      {/* Add more text overlays as needed */}
    </div>
  );
}

export default Project;
