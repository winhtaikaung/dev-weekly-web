import React from 'react';
import {Link} from 'react-router';

const BottomNavbar = (props) => {

    return (

        <div className="mobile-bottom-bar">
            {props.navItems && props
                .navItems
                .map((item, index) => <Link key={index} to={`/`} className="footer-link">
                    <i className="fa fa-cog"></i>
                    <span className='footer-text'>{item.text}</span>
                </Link>)
            }

        </div>
    )

};

export default BottomNavbar;
