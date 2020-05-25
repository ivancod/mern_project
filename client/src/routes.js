import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth } from './containers/Auth'
import { Create } from './containers/Create'
import { Links } from './containers/Links'
import { Detail } from './containers/Detail'

export const useRoute = isAuth => {
    if(isAuth) {
        return (
            <Switch>
                <Route path="/create" exact>
                    <Create />
                </Route>
                <Route path="/links" exact>
                    <Links />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}