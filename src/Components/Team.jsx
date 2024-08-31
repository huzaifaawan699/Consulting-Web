import React from 'react';
import TeamMember1 from '../assets/team1.jpg'; 
import TeamMember2 from '../assets/team4.jpg'; 
import TeamMember3 from '../assets/team3.jpg'; 

const teamData = [
  { name: "Ali Asghar", role: "CEO & Founder", imgSrc: TeamMember1 },
  { name: "Huzaifa", role: "Consultant", imgSrc: TeamMember2 },
  { name: "Ahmed Aslam", role: "Content Writer", imgSrc: TeamMember3 }
];

const Team = () => {
  return (
    <div className="p-8 bg-white" id="team">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Meet Our Team</h1>
        <p className="text-lg text-black mt-2">We are a consulting agency that delivers top-notch services with our expert team members.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 flex flex-col items-center bg-white text-black rounded-lg shadow-lg overflow-hidden transition-transform transform hover:bg-black hover:text-white hover:shadow-2xl hover:scale-105"
          >
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
