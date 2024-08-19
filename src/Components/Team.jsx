import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TeamMember1 from '../assets/team1.jpg'; 
import TeamMember2 from '../assets/team-2.jpg'; 
import TeamMember3 from '../assets/team3.jpg'; 

const teamData = [
  { name: "Alice Johnson", role: "CEO & Founder", imgSrc: TeamMember1 },
  { name: "Michael Smith", role: "Consultant", imgSrc: TeamMember2 },
  { name: "Sarah Williams", role: "Content Writer", imgSrc: TeamMember3 }
];

const Team = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.set(card, { scale: 1, backgroundColor: "#ffffff", opacity: 1 });

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          scale: 1.05, 
          duration: 0.5, 
          ease: 'power2.out',
          backgroundColor: "#0000", // Change to your desired hover background color
          opacity: 0.9 // Slightly lower opacity on hover
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          scale: 1, 
          duration: 0.5, 
          ease: 'power2.out',
          backgroundColor: "#ffffff", // Revert to original color
          opacity: 1 // Full opacity when not hovering
        });
      });
    });

    return () => {
      cardsRef.current.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-teal-200" id="team">
      {teamData.map((member, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="w-full md:w-1/3 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out"
        >
          <img
            src={member.imgSrc}
            alt={member.name}
            className="w-full h-60 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
