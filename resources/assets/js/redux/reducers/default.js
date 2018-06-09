//import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE} from '../Constants'
import * as type from '../actions/types'
import createReducer from '../../lib/createReducer'

const defaultState = {
    idCompany: '',
    nameCompany:'',
    cuenta:'',
    enlace:""
};

export const defaultData=  createReducer(defaultState, {

   [type.DEFAULT_COMPANY](state,action){
        return Object.assign({},action)
    }
});
