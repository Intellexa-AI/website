import React from 'react';

// Example team members data
const teamMembers = [
    { name: 'Tom Cruise', role: 'Full Stack Developer', image: './p1.jpg' },
    { name: 'David Wornar', role: 'Front End Developer', image: './p2.jpg' },
    { name: 'Vin Diesel', role: 'Back End Developer', image: './p3.jpg' },
    // ... add more team members as needed
];

const TeamSection = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0c52a1]">
            {teamMembers.map(member => (
                <div className="relative w-56 h-56 bg-white p-7 rounded-full shadow-xl transition-all duration-400 mx-5 hover:rounded-lg hover:h-64">
                    <div className="w-full h-full">
                        <img className="object-cover w-full h-full rounded-full transition-all duration-400 hover:rounded-lg hover:-translate-y-52" src={member.image} alt={member.name} />
                    </div>
                    <div className="text-center transform transition-all duration-500 opacity-0 pointer-events-none hover:opacity-100 hover:pointer-events-auto -translate-y-24">
                        <h3 className="text-2xl text-[#0c52a1] font-semibold">{member.name}</h3>
                        <p className="text-lg font-medium mt-1 mb-3">{member.role}</p>
                        <div className="flex justify-center">
                            {/* Add social icons here */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamSection;
