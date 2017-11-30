import {GET_SCRATCH_CARD_REQUEST, GET_SCRATCH_CARD_SUCCESS, GET_SCRATCH_CARD_FAILED} from '../../../actions/const'

const initialState = {
  isFetching: false,
  item: {},
  similar: []
}

function ScratchCard(state = initialState, action) {
  switch (action.type) {
    case GET_SCRATCH_CARD_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        items: []
      });
    case GET_SCRATCH_CARD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        items: [
          ...state.item,
          ...action.response.data
        ]
      });
    case GET_SCRATCH_CARD_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        items: [],
        error: action.error
      });
    default:
      return state;
  }
}

export default ScratchCard;
