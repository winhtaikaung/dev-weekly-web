/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducers.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducers */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ScratchCardReducer from '../containers/scratchcard/reducers/ScratchCardReducer'
import MerchantListReducer from '../containers/merchantlist/reducers/MerchantListReducer'

const reducers = {
    routing: routerReducer,
    ScratchCardReducer,
    MerchantListReducer

};
const combined = combineReducers(reducers);
module.exports = combined;
