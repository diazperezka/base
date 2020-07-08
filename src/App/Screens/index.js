import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppLayout from './AppLayout'

import Home from './Home'

const AppLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
                <AppLayout>
                    <Component {...matchProps} />
                </AppLayout>
            )}
        />
    )
}

const Screens = () => {
    return (
        <Switch>
            <AppLayoutRoute path='/' component={Home} />
        </Switch>
    )
}

export default Screens