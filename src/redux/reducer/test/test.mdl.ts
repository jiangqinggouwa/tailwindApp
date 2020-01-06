import { AnyAction, MiddlewareAPI, Dispatch } from "redux";
import * as constant from "./test.constant";
import * as actions from "./test.action"

        
export const testMdl = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: {
    type: string;
    payload: any;
}) => {
    
    next(action);
        if(action.type === constant.REQUEST){
            fetch('https://www.googleapis.com/books/v1/volumes?q=react')
            .then(res=>res.json())
            .then(data=>{console.log(data)
            store.dispatch(actions.returnData(data))}
            )
            .catch(error=>console.log(error)
            )
        }
};