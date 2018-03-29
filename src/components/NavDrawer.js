import React from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from '../components/userprofile/ProfileHeader'

const NavDrawer = (props) => {
    return (
        <div>
            <div
           
                className={`off-canvas mobile-ofc position-left is-transition-push ` + `${ !props.isDrawerOpen
                ? "slide-out"
                : "slide-in"}` }  onClick={()=>props.onOutCanvasClick(!props.isDrawerOpen)}
                ></div>
            <div
                className={`off-canvas mobile-ofc position-left is-transition-push` + `${ !props.isDrawerOpen
                ? " is-close drawer-close"
                : " is-open drawer-open"}`}
                id="offCanvas"
                data-off-canvas>
                <ProfileHeader/>
                <ul className=" vertical menu align-left">
                    {props.drawerItems && props
                        .drawerItems
                        .map((item, index) => <li
                            key={index}
                            onClick={() => props.onNavItemClick(index, !props.isDrawerOpen)}>
                            <span >{item.text}</span>
                        </li>)
}
                </ul>
            </div>

        </div>

    );
}

NavDrawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    drawerItems: PropTypes.array.isRequired,
    onNavItemClick: PropTypes.func

};

export default NavDrawer;