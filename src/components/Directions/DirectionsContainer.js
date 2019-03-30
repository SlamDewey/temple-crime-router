import {connect} from 'react-redux'
import Directions from './Directions'
import { updateStart, updateEnd, addError, clearError, fetchRoute } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        fetching: state.fetching,
        safetyRating: state.safetyRating,
        route: state.route,
        start: state.start,
        end: state.end,
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
        fetchRoute(addresses) {
            dispatch (
                fetchRoute(addresses)
            )
        },
        updateStart(address) {
            dispatch (
                updateStart(address)
            )
        },
        updateEnd(address) {
            dispatch (
                updateEnd(address)
            )
        },
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Directions)

export default Container