import { createActions } from 'redux-actions'
import * as constant from './test.constant'
export const {
    add,
    request,
    returnData
} = createActions({
    [constant.ADD] : payload => payload,
    [constant.REQUEST]: payload => payload,
    [constant.RETURN_DATA]: payload => payload
})