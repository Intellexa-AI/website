import React from 'react';
import MemberCard from '../components/MemberCard';
import Card from '../components/Card';


const TeamPage = () => {
    // Example team members data
    const teamMembers = [
        { name: 'J P Sai Sravanthi', role: 'Head Club Operations', imagePath: '/p1.jpg' },
        { name: 'J P Sai Sravanthi', role: 'Head Club Operations', imagePath: '/p1.jpg' },
        { name: 'J P Sai Sravanthi', role: 'Head Club Operations', imagePath: '/p1.jpg' },
        { name: 'J P Sai Sravanthi', role: 'Head Club Operations', imagePath: '/p1.jpg' },
        // ... other team members
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center">
                {teamMembers.map(member => (
                    <MemberCard key={member.name} {...member} />
                    
                ))}
            </div>

      <Card
        name="John Doe"
        role="Web Developer"
        imageUrl="https://via.placeholder.com/150"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

        </div>
    );
};

export default TeamPage;
