import {CALL_API} from '../../../middleware/api'

import {GET_SCRATCH_CARD_REQUEST, GET_SCRATCH_CARD_SUCCESS, GET_SCRATCH_CARD_FAILED} from '../../../actions/const'

function getScratchCard(params) {
    if (params) {
        return {
            [CALL_API]: {
                types: [
                    GET_SCRATCH_CARD_REQUEST, GET_SCRATCH_CARD_SUCCESS, GET_SCRATCH_CARD_FAILED
                ],
                endpoint: `scratchcard`,
                params: params
            }
        }
    } else {
        return {
            [CALL_API]: {
                types: [
                    GET_SCRATCH_CARD_REQUEST, GET_SCRATCH_CARD_SUCCESS, GET_SCRATCH_CARD_FAILED
                ],
                endpoint: `scratchcard`
            }
        }
    }
}
export function getScratchCard(params) {
    return (dispatch) => {
        return dispatch(getScratchCard(params));
    }
}