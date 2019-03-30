import React, {Component, button} from 'react';
import './Directions.css'
import AddressInput from '../AddressInput/AddressInputContainer'
class Directions extends Component {

	_getRoute = () => {
		this.props.fetchRoute([this.props.start, this.props.end])
	}
    render() {
        return(

            <div class="directionsContainer">
                <div class="inputContainer">
                    <AddressInput
                        first={true}
                    />
                    <AddressInput
                        first={false}
                    />
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