import React, { useState } from 'react';
import PropTypes from 'prop-types';

StateLesson1.propTypes = {

};

function StateLesson1(props) {
    const [color, setColor] = useState('white');
    const [number, setNumber] = useState(0);
    return (
        <div>
            {color}
            <button onClick={() => setColor('Black')}>
                Black
            </button>
            <button onClick={() => setColor('White')}>
                White
            </button>
            <br />
            {number}
            <button onClick={() => setNumber(x => x + 1)}>
                Tang
            </button>
            <button onClick={() => setNumber(x => x - 1)}>
                Giam
            </button>
        </div>
    );
}

export default StateLesson1;