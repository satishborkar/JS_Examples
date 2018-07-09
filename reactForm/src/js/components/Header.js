import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="row">
            <h1> {title} </h1>
        </div>
    );
};

export default Header;