import React from 'react';
import './Team.css';
import teamMemberImage from './Tanishq1.png';
import teamMemberImage2 from './Kendal.png'; // Ensure this is the correct path to your image

const Team = () => {
  return (
    <div className="team-member">
      <div className="bubble">
        <img src={teamMemberImage} alt="Team Member" className="bubble-image" />
        <div className="overlay-text"> 
          <p className="name">Tanishq</p>
          <p className="designation">Founder</p>
        </div>
      </div>
      <div className="bubble">
        <img src={teamMemberImage2} alt="Team Member" className="bubble-image" />
        <div className="overlay-text"> 
          <p className="name">Kendal Merry</p>
          <p className="designation">Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
