import React, {Component, button} from 'react';
import './Directions.css'

class Directions extends Component {

	_getRoute = () => {
		this.props.fetchRoute([this.props.start, this.props.end])
	}
    render() {
        return(
            <div class="directionsContainer">
            	<div class="inputContainer">
            	</div>
            	<button class="directionsButton"
            			onClick={this._getRoute}>
            		Go
            	</button>
            </div>
        );
    }
}

export default Directions;