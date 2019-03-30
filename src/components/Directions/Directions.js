import React, {Component, button} from 'react';
import './Directions.css'

class Directions extends Component {

	_getRoute = () => {
		this.props.fetchRoute([this.props.start, this.props.end])
	}
    render() {
        return(
            <div className="directionsContainer">
            	<div className="inputContainer">
            	</div>
            	<button className="directionsButton"
            			onClick={this._getRoute}>
            		Go
            	</button>
            </div>
        );
    }
}

export default Directions;