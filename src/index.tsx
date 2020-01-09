import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/main.css'
// import { Provider } from 'react-redux'
// import { store } from './redux/store'
import App from './App'
ReactDOM.render(
    // <Provider store={store}>
    //     <App/>
    // </Provider>,
    <App/>,
    document.getElementById('root')
)