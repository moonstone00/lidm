import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function DynamicCircular() {
    const [progressValue, setProgressValue] = useState(0);
    const progressEndValue = 65;
    const speed = 50;

    useEffect(() => {
        const progress = setInterval(() => {
            setProgressValue(prevProgressValue => {
                const nextProgressValue = prevProgressValue + 1;
                if (nextProgressValue === progressEndValue) {
                    clearInterval(progress);
                }
                return nextProgressValue;
            });
        }, speed);

        return () => clearInterval(progress);
    }, []); // Empty dependency array ensures effect runs only once

    const progressBarStyle = {
        background: `conic-gradient(
            #4d5bf9 ${progressValue * 3.6}deg,
            #cadcff ${progressValue * 3.6}deg
        )`
    };

    return (
        <div className="container">
            <div className="circular-progress" style={progressBarStyle}>
                <div className="value-container">{progressValue}%</div>
            </div>
        </div>
    );
}
