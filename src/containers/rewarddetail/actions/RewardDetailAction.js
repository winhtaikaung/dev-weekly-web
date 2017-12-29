import {CALL_API} from '../../../middleware/api'
import {GET_REWARD_DETAIL_REQUEST, GET_REWARD_DETAIL_SUCCESS, GET_REWARD_DETAIL_FAILED} from "../../../actions/const";

export function getRewardDetail(rewardId) {
  if (rewardId) {
    return {
      [CALL_API]: {
        types: [
            GET_REWARD_DETAIL_REQUEST, GET_REWARD_DETAIL_SUCCESS, GET_REWARD_DETAIL_FAILED
        ],
        endpoint: `api/v1/reward_items/${rewardId}`,
        method: 'get'
      }
    }
  }
}
