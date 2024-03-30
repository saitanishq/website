import React from 'react';
import './Team.css';
import teamMemberImage from './Tanishq1.png';
import teamMemberImage2 from './Kendal.png'; // Ensure this is the correct path to your image
import advisorImage1 from './ann_barwich.jpeg';
import advisorImage2 from './loveless-daniel.jpeg';
import advisorImage3 from './christy.jpeg';
import institutionImage1 from './MIT.png';
import institutionImage2 from './iu.jpeg';
import institutionImage3 from './DV.jpeg';


const Team = () => {
  return (
    <div className="team">
      <h2>Founders</h2>
      <div className="founders">
       <a href="https://www.linkedin.com/in/sai-tanishq/" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={teamMemberImage} alt="Team Member" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Tanishq</p>
            <p className="designation">Founder</p>
          </div>
        </div></a>
        <a href="https://www.linkedin.com/in/kendal-merry/" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={teamMemberImage2} alt="Team Member" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Kendal Merry</p>
            <p className="designation">Co-Founder</p>
          </div>
        </div></a>
      </div>
      <h2>Advisors</h2>
      <div className="advisors">
      <a href="https://thestinktank.weebly.com/" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={advisorImage1} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Ann-Spohie Barwich</p>
            <p className="designation">Professor-IU</p>
          </div>
        </div></a>
        <a href="https://luddy.indiana.edu/contact/profile/index.html?Daniel_Loveless" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={advisorImage2} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Daniel Loveless</p>
            <p className="designation">Professor-IU</p>
          </div>
        </div></a>
        <a href="https://www.davinciwearables.com/" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={advisorImage3} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Christy Fernandez Cull</p>
            <p className="designation">Founder of DV</p>
          </div>
        </div></a>
      </div>
      <h2>Institutions</h2>
      <div className="institutions">
      <a href="https://www.media.mit.edu/events/osmocosm-2022/" target="_blank" rel="noopener noreferrer"> <div className="bubble">
        <img src={institutionImage1} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Andreas Mershin</p>
            <p className="designation">Professor-MIT</p>
          </div>
        </div></a>
        <a href="https://innovate.iu.edu/index.html" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={institutionImage2} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Indiana University</p>
          </div>
        </div></a>
        <a href="https://www.davinciwearables.com/" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={institutionImage3} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Davinci Wearables</p>
          </div>
        </div></a>
      </div>
    </div>
  );
};

export default Team;
