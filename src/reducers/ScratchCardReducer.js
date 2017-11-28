import {GET_SCRATCH_CARD_REQUEST, GET_SCRATCH_CARD_SUCCESS, GET_SCRATCH_CARD_FAILED} from '../actions/const'
const initialState = {
    isFetching: false,
    item: {},
    similar: []
}
function ScratchCard(state = initialState, action) {
    switch (action.type) {
        case GET_SCRATCH_CARD_REQUEST:
            return Object.assign({}, state, {
                isFetching: state.isFetching + 1,
                items: []
            });
            break;
        case GET_SCRATCH_CARD_SUCCESS:
            return Object.assign({}, state, {
                isFetching: state.isFetching + 1,
                items: [
                    ...state.item,
                    ...action.response.data
                ]
            });
            break;
        case GET_SCRATCH_CARD_FAILED:
            return Object.assign({}, state, {
                isFetching: state.isFetching - 1,
                items: [],
                error: action.error
            });
            break;
        default:
            return state;
            break;
    }
}
export default ScratchCard;
