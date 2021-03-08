import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersFrom.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersFrom.defaultProps = {
    onSubmit: null,
};

function PostFiltersFrom(props) {
    ///
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    const typingTimeOutRef = useRef(null);
    ///
    function handleValuesFrom(e) {
        const tmpValue = e.target.value;
        setValue(tmpValue);
        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }
        typingTimeOutRef.current = setTimeout(() => {
            if (!onSubmit) return;
            const valuesFrom = {
                searchTerm: tmpValue,
            }
            onSubmit(valuesFrom);
        }, 300);
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleValuesFrom} />
        </div>
    );
}

export default PostFiltersFrom;