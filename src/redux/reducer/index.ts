import { combineReducers } from "redux";
import { setTest } from "./test/test.reducer";
export const reducers = combineReducers({
    TestReducer:setTest
})