import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Error404 from "../views/404";

class Route404 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route component={Error404}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Route404;
