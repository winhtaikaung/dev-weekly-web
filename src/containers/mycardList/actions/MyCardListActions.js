import {CALL_API} from '../../../middleware/api'
import {GET_MY_LINK_CARD_FAILED, GET_MY_LINK_CARD_REQUEST, GET_MY_LINK_CARD_SUCCESS} from "../../../actions/const";

export function getCards(page, limit) {
  if (page && limit) {
    return {
      [CALL_API]: {
        types: [
            GET_MY_LINK_CARD_REQUEST, GET_MY_LINK_CARD_SUCCESS, GET_MY_LINK_CARD_FAILED
        ],
        endpoint: `api/v1/mycards?page=${page}&limit=${limit}`,
        method: 'get'
      }
    }
  }else{
    return {
      [CALL_API]: {
        types: [
            GET_MY_LINK_CARD_REQUEST, GET_MY_LINK_CARD_SUCCESS, GET_MY_LINK_CARD_FAILED
        ],
        endpoint: `api/v1/mycards?page=1&limit=10`,
        method: 'get'
      }
    } 
  }
}
