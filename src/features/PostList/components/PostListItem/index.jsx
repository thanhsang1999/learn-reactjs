import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    dataPostList: PropTypes.array,
};
PostList.defaultProps = {
    dataPostList: [],
}

function PostList(props) {
    const { dataPostList } = props;
    return (
        <div>
            <ul>
                {dataPostList.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;