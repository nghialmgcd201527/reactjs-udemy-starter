import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Albumfeature.propTypes = {

};

function Albumfeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac hoa hay nhat',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/0/1/c/001c7c81cd5f1c1e53233967d42fd7aa.jpg'
        },
        {
            id: 2,
            name: 'Nhac hoa to tinh lang man',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/b/7/c/cb7cfbdac1a44b165bc8d005b05dd99e.jpg'
        },
        {
            id: 3,
            name: 'Dance Viet hay nhat',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/a/1/3fa16be8e4822ecdcaf1adb31a66565e.jpg'
        },
    ]
    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default Albumfeature;