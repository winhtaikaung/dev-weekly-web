import {CALL_API} from '../../../middleware/api'
import {
    POST_EMAIL_LOGIN_REQUEST,
    POST_EMAIL_LOGIN_SUCCESS,
    POST_EMAIL_LOGIN_FAILED,
    POST_LOGOUT_REQUEST,
    POST_LOGOUT_FAILED,
    POST_LOGOUT_SUCCESS
} from "../../../actions/const";

export function postEmailLogin(loginData) {
    if (loginData) {
        return {
            [CALL_API]: {
                types: [
                    POST_EMAIL_LOGIN_REQUEST, POST_EMAIL_LOGIN_SUCCESS, POST_EMAIL_LOGIN_FAILED
                ],
                endpoint: `login`,
                method: 'post',
                formdata: loginData
            }
        }
    }
}

export function postLogOut() {
    return {
        [CALL_API]: {
            types: [
                POST_LOGOUT_REQUEST, POST_LOGOUT_FAILED, POST_LOGOUT_SUCCESS
            ],
            endpoint: `/logout`,
            method: 'post'
        }
    }
}
