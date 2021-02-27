import PropTypes from 'prop-types';
import React from 'react';
import "./styles.scss";

AblumItem.propTypes = {
    ablumItem: PropTypes.object.isRequired,
};

function AblumItem(props) {
    const { ablumItem } = props;
    return (
        <div className="Ablum_Item">
            <div className="Ablum_Item_Image">
                <img src={ablumItem.link} />
            </div>
            <div className="Ablum_Item_Title">
                <p>{ablumItem.name}</p>
            </div>
        </div>
    );
}

export default AblumItem;