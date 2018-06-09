//import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE} from '../Constants'
import * as type from '../actions/types'
import createReducer from '../../lib/createReducer'

const defaultState = {
    estadoaAPersistir: ''
   
};
export const defaultD=  createReducer(defaultState, {
   [type.DEFAULT_VALUE](state,action){return Object.assign({},action)
    }
});
