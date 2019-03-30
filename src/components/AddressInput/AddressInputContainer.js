import {connect} from 'react-redux'
import AddressInput from './AddressInput'
import { addError, clearError, fetchRoute, updateStart, updateEnd } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        start       : state.start,
        end         : state.end
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateStart(index) {
            dispatch (updateStart(index))
        },
        updateEnd(index) {
            dispatch (updateEnd(index))
        },
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AddressInput)

export default Container