import React from 'react';
import PropTypes from 'prop-types';
const ProfileHeader = (props) => {

    return (
        <div className="grid-x grid-padding-x align-middle ">
            <div className="medium-6 small-6 large-6 cell">
                <img
                    className="avatar"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
            </div>
            <h5 className="medium-6 small-6 large-6 cell">John Doe</h5>
        </div>
    )
}

export default ProfileHeader