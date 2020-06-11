import {SET_PROFILE_USER} from '../actions/types';
import isEmpty from '../validation/is-empty'
const initialState={
    
    profile:{}
    
};
//we take initial state and add into it we do not change the state
export default function (state=initialState,action) {
    switch (action.type) {
     case SET_PROFILE_USER:
     return{
       ...state,
       
       profile:action.payload
     }
        default:
        return state;
            
    }
            
      
}  
   