import React from 'react'
import { useState, useEffect } from 'react';


import './Timer.scss';




const Timer = (props) => {
    const { initialSeconds = 30, onClock } = props;

    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                clearInterval(myInterval);
                onClock();
            }
        }, 1000);

        return () => {

            clearInterval(myInterval);
        };
    });

    return (
        <div className="clock">
            {
                seconds
            }
        </div>
    )
}

export default Timer;