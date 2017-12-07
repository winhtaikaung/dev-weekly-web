import {CALL_API} from '../../../middleware/api'
import {GET_MERCHANT_LIST_FAILED, GET_MERCHANT_LIST_REQUEST, GET_MERCHANT_LIST_SUCCESS} from "actions/const";

export function getmerchantList(page, limit) {
  if (page && limit) {
    return {
      [CALL_API]: {
        types: [
          GET_MERCHANT_LIST_REQUEST, GET_MERCHANT_LIST_SUCCESS, GET_MERCHANT_LIST_FAILED
        ],
        endpoint: `api/v1/merchant?page=${page}&limit=${limit}`,
        method: 'get'
      }
    }
  }else{
    return {
      [CALL_API]: {
        types: [
          GET_MERCHANT_LIST_REQUEST, GET_MERCHANT_LIST_SUCCESS, GET_MERCHANT_LIST_FAILED
        ],
        endpoint: `api/v1/merchant?page=1&limit=10`,
        method: 'get'
      }
    } 
  }
}
