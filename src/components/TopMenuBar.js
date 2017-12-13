import React from 'react';

const TopMenuBar = (props) => {
    return (
        <div
            className="title-bar"
            data-responsive-toggle="responsive-menu"
            data-hide-for="medium">
            <button
                className="menu-icon"
                type="button"
                onClick={() => props.onNavClick(!props.isDrawerClose
                ? true
                : false)}
                data-toggle="responsive-menu"></button>
            <div className="title-bar-title">Menu</div>
        </div>
    );
};

export default TopMenuBar;