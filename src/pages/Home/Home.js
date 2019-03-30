import React, {Component, button} from 'react';


class Home extends Component {

    _add_error = () => {
        this.props.addError("test")
    }

    render() {
        //this.fetch_street_map();
        return(
            <div>
                Hello!
                <button onClick = {this._add_error}>
                </button>
            </div>
        );
    }
}

export default Home;