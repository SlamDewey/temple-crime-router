import {connect} from 'react-redux'
import Home from './Home'
import { addError, clearError, fetchRoute } from '../../store/actions'
import './Home.css'

const mapStateToProps = (state) => {
	return {
		errors: state.errors,
		fetching: state.fetching,
		safetyRating: state.safetyRating,
		route: state.route,
		markers: state.markers,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addError(message) {
			dispatch (
				addError(message)
			)
		},
		clearError(index) {
			dispatch (
				clearError(index)
			)
		},
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Container