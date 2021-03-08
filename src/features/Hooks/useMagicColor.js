import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    const COLOR_DATA = ['red', 'green', 'blue', 'orange'];
    const tmpIndex = COLOR_DATA.indexOf(currentColor);
    let newIndex = tmpIndex;
    while (newIndex === tmpIndex) {
        newIndex = Math.trunc(Math.random() * COLOR_DATA.length);
    }
    return COLOR_DATA[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef(null);
    colorRef.current = 'transparent';
    useEffect(() => {
        //mounting
        const tmpInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            // unmoutting
            clearInterval(tmpInterval);
        }
    }, []);
    return { color };
}

export default useMagicColor;