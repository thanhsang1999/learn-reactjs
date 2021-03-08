import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../Hooks/useMagicColor';
import './styles.scss';


function BoxColor() {
    const { color } = useMagicColor();
    return (
        <div className="Box-Color" style={{ backgroundColor: color }}></div >
    );
}

export default BoxColor;