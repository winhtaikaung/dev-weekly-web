import {POST_EMAIL_LOGIN_REQUEST, POST_EMAIL_LOGIN_SUCCESS, POST_EMAIL_LOGIN_FAILED,POST_LOGOUT_REQUEST,
    POST_LOGOUT_FAILED,
    POST_LOGOUT_SUCCESS} from '../../../actions/const'

const initialState = {
    isFetching: false,
    loginResponse: null,
    token:null
}

export function EmailLoginReducer(state = initialState, action) {
    switch (action.type) {
        case POST_EMAIL_LOGIN_REQUEST:
            return object.assign({}, state, {
                isFetching: false,
                loginResponse: null,
                token:null
            });
            break;
        case POST_EMAIL_LOGIN_SUCCESS:
            return object.assign({}, state, {
                isFetching: true,
                loginResponse: action.response,
                token:"DemoToken"
            });
            break;
        case POST_EMAIL_LOGIN_FAILED:
            return object.assign({}, state, {
                isFetching: false,
                loginResponse: null,
                token:null
            });
            break;
        case POST_LOGOUT_REQUEST:
            return object.assign({},state,{
                isFetching:true
            });
            break;
        case POST_LOGOUT_SUCCESS:
            return object.assign({},state,{
                isFetching:true,
                token:null
            });
            break;
        case POST_LOGOUT_FAILED:
            return object.assign({},state,{
                isFetching:false
            });
            break;
        default:
            return state;

    }
}


