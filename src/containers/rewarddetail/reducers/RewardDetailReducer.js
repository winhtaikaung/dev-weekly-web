import {GET_REWARD_DETAIL_REQUEST, GET_REWARD_DETAIL_SUCCESS, GET_REWARD_DETAIL_FAILED} from '../../../actions/const'
const initialState = {
    isFetching: false,
    item:null
    
};

export default function rewardDetailReducer(state = initialState, action) {

    switch (action.type) {
        case GET_REWARD_DETAIL_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                item: null
            });
            break;
        case GET_REWARD_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                item: action.response
            });
            break;
        case GET_REWARD_DETAIL_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                item: null
            });
            break;
        default:
            return initialState;

    }

}