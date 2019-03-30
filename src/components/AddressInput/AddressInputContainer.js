import {connect} from 'react-redux'
import AddressInput from './AddressInput'
import { addError, clearError, fetchRoute } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
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

const Container = connect(mapStateToProps, mapDispatchToProps)(AddressInput)

export default Container