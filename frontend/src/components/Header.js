import React from 'react';
import image from '../assets/Logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt=''/>
        </div>
    );
};

export default Header;