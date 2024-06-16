import React from 'react';

const AddStyle = () => {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };

    return (
        <div>
            <h1>{user.name}</h1>
            <img style={{borderRadius:"50%"}} src={user.imageUrl} />
        </div>
    );
};

export default AddStyle;
