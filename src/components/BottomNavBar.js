import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const BottomNavbar = (props) => {

    return (

        <div className="mobile-bottom-bar">
            {props.navItems && props
                .navItems
                .map((item, index) => <Link key={index} to={item.linkTo} className="footer-link">
                    <i className="fa fa-cog"></i>
                    <span className='footer-text'>{item.text}</span>
                </Link>)
}

        </div>
    )

};

BottomNavbar.propTypes = {
    navItems: PropTypes.array.isRequired

};

export default BottomNavbar;
