import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home.js';

import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path={'/'} render={() => <Home />} />
            </Switch>
        );
    }
}

ReactDOM.render(
<Router>
    <App />
</Router>,
root);

serviceWorker.unregister();