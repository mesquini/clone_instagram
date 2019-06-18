import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Feed from './pages/Feed'
import New from './pages/New'
import Login from './pages/Login'
import LoginErro from './pages/LoginErro'

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component = {Feed} />
            <Route path="/new" component = {New} />
            <Route path="/login" component = {Login} />
            <Route path="/loginError" component = {LoginErro} />
        </Switch>
    )
}

export default Routes