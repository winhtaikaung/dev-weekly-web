import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SocialLogin from '../../components/login/SocialLogin'
import SignUp from '../../components/login/SignUp'
import SignIn from '../../components/login/SignIn'
class Login extends Component {
    constructor(props,context) {
        super(props,context);
        
    }

    onLazyScrollto(id) {
        document
            .querySelector(id)
            .scrollIntoView({behavior: 'smooth'});
    }

    onFacebookLoginClick() {
        
    }

    onGoogleLoginClick() {
        
    }

    render() {
        return (
            <div className="row">
                <div className="login-box small-12 medium-12 large-12 ">
                    <div className="row">
                        <SocialLogin
                            onFacebookLogin={this
                            .onFacebookLoginClick
                            .bind(this)}
                            onGoogleLogin={this
                            .onGoogleLoginClick
                            .bind(this)}
                            lazyScrollto={this
                            .onLazyScrollto
                            .bind(this)}/>
                    </div>
                    <div className="row align-center">
                        <SignUp/>
                    </div>
                    <div className="row align-center">
                        <SignIn />
                    </div>
                </div>
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
    /* Populated by react-webpack-redux:reducers */
    const props = {};
    return props;
}
function mapDispatchToProps(dispatch) {
    /* Populated by react-webpack-redux:action */
    const actions = {};
    const actionMap = {
        actions: bindActionCreators(actions, dispatch)
    };
    return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
