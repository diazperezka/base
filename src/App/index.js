import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Screens from './Screens'
import Root from './Root'

export default function App() {
    return (
        <Router>
            <Route component={Root}>{Screens}</Route>
        </Router>
    )
}