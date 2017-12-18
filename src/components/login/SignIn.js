import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Modal from 'react-modal';
import {Form} from 'react-form';

const SignIn = (props) => {
    return (
        <div id="login_section" className="small-12 medium-6 columns">
            <div className="login-box-form-section">
                <h1 className="login-box-title">Login</h1>
                
                <input
                    className="login-box-input medium-12 small-12"
                    type="email"
                    name="email"
                    placeholder="E-mail"/>
                <input
                    className="login-box-input medium-12 small-12"
                    type="password"
                    name="password"
                    placeholder="Password"/>
                
                <input
                    className="login-box-submit-button medium-12 small-12"
                    type="submit"
                    name="signup_submit"
                    value="Login"/>
            </div>
        </div>
    );
}

export default SignIn;