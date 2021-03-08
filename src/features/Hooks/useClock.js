import React, { useEffect, useState } from 'react';

function DateToString(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;

}

function useClock() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const tmpInterval = setInterval(() => {
            const now = new Date();
            const dateString = DateToString(now);
            setTime(dateString);
        }, 1000);
        return () => {
            clearTimeout(tmpInterval);
        }
    }, []);

    return { time };
}

export default useClock;