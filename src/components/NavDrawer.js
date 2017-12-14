import React from 'react';
import PropTypes from 'prop-types';

const NavDrawer = (props) => {
    return (
        <div
            className={`off-canvas position-left is-transition-push` + `${ !props.isDrawerOpen
            ? " is-close"
            : " is-open"}`}
            id="offCanvas"
            data-off-canvas>
            <ul className="vertical menu align-center">
                {props.drawerItems && props
                    .drawerItems
                    .map((item, index) => <li key={index} onClick={() => props.onNavItemClick(index, !props.isDrawerOpen)}>
                        <span >{item.text}</span>
                    </li>)
}
            </ul>
        </div>

    );
}

NavDrawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    drawerItems: PropTypes.array.isRequired,
    onNavItemClick: PropTypes.func

};

export default NavDrawer;