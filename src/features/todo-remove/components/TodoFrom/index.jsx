import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoFrom.propTypes = {
    onSubmit: PropTypes.func,

};
TodoFrom.defaultProps = {
    onSubmit: null,
}

function TodoFrom(props) {
    const { onSubmit } = props;
    const [valueFrom, setValueFrom] = useState('');
    function handleOnChange(e) {
        setValueFrom(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: valueFrom,
        }
        onSubmit(formValues);
        setValueFrom('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={valueFrom} onChange={handleOnChange} />
        </form>
    );
}

export default TodoFrom;