import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: "gai xinh 1",
            link: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg',
        },
        {
            id: 2,
            name: "gai xinh 2",
            link: 'https://i.pinimg.com/originals/1f/93/c1/1f93c19676ef2ad80f17ee5c228d8559.png',
        },
        {
            id: 3,
            name: "gai xinh 2",
            link: 'https://image-us.eva.vn/upload/3-2020/images/2020-07-07/be-gai-xinh-co-than-thai-nhu-hoa-hau-tuong-me-cung-cuc-pham-hoa-ra-khong-phai-the-103975727_3626668147360400_4573861215659580274_n-1594091436-814-width640height556.jpg',
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;