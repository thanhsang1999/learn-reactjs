import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AblumItem from '../AlbumItem';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};
AlbumList.defaultProps = {
    albumList: [],
}
function AlbumList(props) {
    const { albumList } = props;
    return (
        <ul className="Album_List">
            {albumList.map(item => (
                <li><AblumItem ablumItem={item} /></li>
            ))}
        </ul>
    );
}

export default AlbumList;