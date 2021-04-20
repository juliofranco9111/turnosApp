import React from 'react'
import { Provider } from 'react-redux'
import { AuthRouter } from './routers/AuthRouter'
import { store } from './store/store'
import './App.css'


const App = () => {


    return (
        <Provider store={store}>
            <AuthRouter />
        </Provider>

    )
}

export default App
