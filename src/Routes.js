import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatApp from './components/ChatApp';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ChatApp} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;