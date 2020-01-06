import *as constant from './test.constant'
import *as action from './test.action'

export class TestState {
    action = {...action};
    addString : string = ''
    items : any[] = []
}

export interface TestAction{
    type: keyof typeof constant;
    payload:TestState;
}