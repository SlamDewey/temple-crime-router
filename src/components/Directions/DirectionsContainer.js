import {connect} from 'react-redux'
import Directions from './Directions'
import { addError, clearError, fetchRoute } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        fetching: state.fetching,
        safetyRating: state.safetyRating,
        route: state.route,
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Directions)

export default Container