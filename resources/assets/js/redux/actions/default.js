import * as type from './types'


export const setCompany = (company) => {
   
    return  Object.assign({type:type.DEFAULT_COMPANY},company);
    
};
