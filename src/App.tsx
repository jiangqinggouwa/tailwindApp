import React from 'react'
import { StoreState } from './redux/store'
import { connect } from './models/ReactReduxConnect'
import { TestState } from './redux/reducer/test/test.state'
import { Dispatch } from 'redux'
import './assets/css/style.css'
import './assets/css/link.css'


// @connect((state: StoreState) => ({state:state.TestReducer}))

// className App extends React.Component<{state?:TestState,dispatch?:Dispatch}>{
//     constructor(props:any) {
//         super(props)
//         console.log(this.props.state.items);
        
//     }
//     AddHandle=()=>{
//         // this.props.dispatch(this.props.state.action.add({addString:'1242353465'}))
//         this.props.dispatch(this.props.state.action.request())
//     }
//     render(){
//         if(this.props.state.items.length === 0){
             
//             return <div onClick={this.AddHandle}>fjkdshgau
//             <div>{this.props.state.addString}</div>
//             </div>
//         }else{

//         return(
            
//             <p>{this.props.state.items[0].id}</p>
//             )
//         }
            
           
       
//     }
// }
class App extends React.Component{
    constructor(props:any) {
        super(props)
        
    }
    render(){
      return(
        <div className="">
          <button className="text-blue-600 hover:text-red-600 ...">
            Button
          </button>
          <div className="red"></div>
          <button>
            Button2222
          </button>
      </div>   
      )  
    }
}

export default App

