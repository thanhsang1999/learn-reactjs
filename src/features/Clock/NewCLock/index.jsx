import React from 'react';
import useClock from '../../Hooks/useClock';
import './styles.scss';


function NewClock() {
    const { time } = useClock();
    return (
        <div className="better-clock">
            <p className="better-clock__time">{time}</p>
        </div>
    );
}

export default NewClock;