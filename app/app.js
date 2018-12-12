import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './routers'
import { Provider } from 'react-redux'
import {
    createStore
} from "redux"

import reducers from './reducers'
// import './public/ift.js'


const store = createStore(
    reducers
)



ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Routers />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);