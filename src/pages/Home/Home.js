import React, {Component, button} from 'react';
import Map from '../../components/Map/MapContainer'


class Home extends Component {

    createReduxDataStore
    _add_error = () => {
        this.props.addError("test");
    }

    render() {
        //this.fetch_street_map();
        return(
            <div>
                Hello!
                <button onClick = {this._add_error}>
                </button>
                <Map/>
            </div>
        );
    }
}

export default Home;