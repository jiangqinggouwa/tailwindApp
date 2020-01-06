import { handleActions } from 'redux-actions'
import * as constant from './test.constant'
import { TestState } from './test.state';
export const setTest = handleActions({
   [constant.ADD] : (state,action) => {
       console.log(action);
       
       return {...state,addString:action.payload.addString}
   },
   [constant.RETURN_DATA]:(state,action) => {
       console.log(action);
       return {...state,items:action.payload.items}
       
   }

},
new TestState()
);