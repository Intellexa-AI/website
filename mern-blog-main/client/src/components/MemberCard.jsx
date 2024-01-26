import React from 'react';

const MemberCard = ({ name, role, imagePath }) => {
    return (
        <div className='img-fade'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 ">
            <img className="w-full" src={imagePath} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {role}
                </p>
            </div>
        </div>
        </div>
    );
};

export default MemberCard;
