import {GET_MERCHANT_LIST_REQUEST, GET_MERCHANT_LIST_SUCCESS, GET_MERCHANT_LIST_FAILED} from '../../../actions/const'
const initialState = {
    isFetching: false,
    items: [],
    paging: {},
    error: {}
};

export default function rewardListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MERCHANT_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        case GET_MERCHANT_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                items: action.response.data,
                paging: action.response.meta_data
            })
        case GET_MERCHANT_LIST_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                items: []
            });
        default:
            return initialState;
    }
}