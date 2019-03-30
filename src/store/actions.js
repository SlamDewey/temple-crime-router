import Constant from './constants'
import fetch from 'cross-fetch'

const host = 'placeholder';

export const addError = error =>
    ({
        type: Constant.ADD_ERROR,
        payload: error
    })

export const clearError = index =>
    ({
        type: Constant.CLEAR_ERROR,
        payload: index
    })


export const fetchRoute = addresses => dispatch => {

    dispatch({
        type: Constant.FETCH_ACHIEVEMENTS
    })

   fetch(host + '/' + JSON.stringify(addresses))
        .then(response => response.json())
        .then(achievements => {
            dispatch({
                type: Constant.UPDATE_ROUTE,
                payload: achievements
            })

        })
        .catch(error => {

            dispatch(
                addError(error.message)
            )

            dispatch({
                type: Constant.CANCEL_FETCHING
            })

        })
}