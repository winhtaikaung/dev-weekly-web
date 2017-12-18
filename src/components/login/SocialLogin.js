import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Modal from 'react-modal';
import {Form} from 'react-form';

const SocialLogin = (props) => {
    return (
        <div
            id="social_login"
            className="small-12 medium-12 columns login-box-social-section">
            <div className="login-box-social-section-inner">
                <span className="login-box-social-headline">Sign in with<br/>your social network</span>
                <div className="row align-center">
                    <Link className="small-12 medium-6 login-box-social-button-facebook">Log in with facebook</Link>
                </div>
                <div className="row align-center">
                    <Link className="small-12 medium-6 login-box-social-button-google">Log in with Google+</Link>
                </div>
                <div className="row align-center">
                    <button  onClick={()=>props.lazyScrollto("#sign_up")} className="button primary small-6 medium-3">Sign Up</button>
                    <button  onClick={()=>props.lazyScrollto("#login_section")} className="button alert small-6 medium-3">Login</button>
                </div>
            </div>
        </div>
    );
}

export default SocialLogin;