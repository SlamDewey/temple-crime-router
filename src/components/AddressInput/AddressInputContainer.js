import {connect} from 'react-redux'
import AddressInput from './AddressInput'
import { addError, clearError, fetchRoute, updateStart, updateEnd } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        errors      : state.errors,
        fetching    : state.fetching,
        safetyRating: state.safetyRating,
        route       : state.route,
        address     : state.address,
        start       : state.start,
        end         : state.end
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addError(message) {
            dispatch (addError(message))
        },
        clearError(index) {
            dispatch (clearError(index))
        },
        updateStart(index) {
            dispatch (updateStart(index))
        },
        updateEnd(index) {
            dispatch (updateEnd(index))
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AddressInput)

export default Container