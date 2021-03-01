import React, { useState } from 'react';
import './styles.scss';


const randomColor = () => {
    const COLOR_LIST = ['deeppink', 'black', 'blue', 'green', 'red'];
    const index = Math.trunc(Math.random() * COLOR_LIST.length);
    return COLOR_LIST[index];
}

function HockUseState1() {
    const localColor = localStorage.getItem('color-item') || 'deeppink';
    const [color, setColor] = useState(localColor);
    const handleClickColor = () => {
        const tmpColor = randomColor();
        localStorage.setItem('color-item', tmpColor);
        setColor(tmpColor);
    };
    return (
        <div className="Color-Box" style={{ backgroundColor: color }} onClick={handleClickColor}>
        </div >
    );
}

export default HockUseState1;