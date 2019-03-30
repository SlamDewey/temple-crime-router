import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import storeFactory from './store/store'
import Home from './pages/Home/HomeContainer.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'


const store = storeFactory({
  route: [],
  safetyRating: -1,
  errors: [],
  fetching: false,
  })

const root = document.getElementById('root');

class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path={'/'} render={() => 
                 	<Provider store = {store}>
           				<Home />
       				 </Provider>
                
                
             } />
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