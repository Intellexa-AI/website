import React, { useState } from 'react';

const ProgressBar = ({ fillTitle, emptyTitle, fillColor, emptyColor }) => {
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState(emptyTitle || "Hover Over Me!");
    const [progressColor, setProgressColor] = useState(fillColor || "white");
    const [emptyColorState, setEmptyColor] = useState(emptyColor || "red");

    const fillBar = () => {
        setProgress(100);
        setTitle(fillTitle || "Completed!");
        setProgressColor("white");
    };

    const emptyBar = () => {
        setProgress(0);
        setTitle(emptyTitle || "Hover Over Me!");
        setProgressColor(fillColor || "white");
    };

    return (
        <div 
            className="flex justify-center items-center h-screen bg-gray-200"
            onMouseOver={fillBar} 
            onMouseOut={emptyBar}
        >
            <div className={`relative w-72 h-12 bg-${emptyColorState}-600 bg-opacity-50 rounded-full shadow-xl overflow-hidden cursor-pointer`}>
                <div 
                    className={`absolute left-0 top-0 h-full bg-${progressColor} transition-all duration-500 ease-in-out rounded-full`} 
                    style={{ width: `${progress}%` }}
                ></div>
                <div className="absolute w-full h-full flex justify-center items-center text-white text-shadow">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
