import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Journey.css';
import './Journey.css';

// Assuming milestonesByYear is defined similar to the previous example
const milestonesByYear = {

  2022: [
    { date: 'December 10, 2022', title: 'Zero Day', description: 'Idea Sparked' },
  ],
  2023: [
    { date: 'October 18, 2023', title: 'Professor Collaboration', description: 'Meeting with Professor Daniel Loveless on sensor support' },
    { date:'Novemeber 10, 2023', title: 'Osmocosm Event', description: 'Speaking of the idea with peer olfaction believers and collaboration with MIT' },
  ],
  2024: [
    { date: 'January 20, 2024', title: 'IU Innovates Incubation', description: 'Became part of IU Innovates' },
    { date:'March 10, 2024', title: 'Sparkbox Innovation', description: 'Became part of Sparkbox Innovation' },
    { date:'March 20, 2024', title: 'Davinci collaboration', description: 'Collaborated with Davinci Wearables for project support' },
  ],
};

const Journey = () => {
    useEffect(() => {
        AOS.init();
      }, []); 
  const years = Object.keys(milestonesByYear).sort();

  return (
    <div className="timeline">
      {years.map((year) => (
        <div key={year} className="year-section" data-aos="fade-up">
          <h2 className="year">{year}</h2>
          {milestonesByYear[year].map((event, index) => (
            <div key={index} className="event" data-aos="fade-right" data-aos-delay={`${index * 100}`}>
              <div className="event-date">{event.date}</div>
              <div className="event-title">{event.title}</div>
              <div className="event-description">{event.description}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Journey;
