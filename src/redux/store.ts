import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducer/index";
import {testMdl} from './reducer/test/test.mdl' 

export type StoreState = ReturnType<typeof reducers>;
let enhancer = null;
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
enhancer = composeEnhancers(
    applyMiddleware(testMdl)
)
export const store = createStore(reducers, enhancer);