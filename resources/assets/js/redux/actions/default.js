import * as type from './types'


export const setSomeDefaultValue = (value) => {
   
    return  Object.assign({type:type.DEFAULT_VALUE},value);
    
};
