import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
    pagination: {},
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;

    function handleOnPageChange(newPage) {
        if (onPageChange) {
            console.log(newPage);
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
                disabled={_page === 0}
                onClick={() => handleOnPageChange(_page - 1)}
            >Previous</button>
            <button
                disabled={_page === _limit}
                onClick={() => handleOnPageChange(_page + 1)}
            >Next</button>
        </div>
    );
}

export default Pagination;