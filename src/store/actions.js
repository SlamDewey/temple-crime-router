import Constant from './constants'
import fetch from 'cross-fetch'

const host = 'http://localhost:8081/';

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
export const updateStart = address =>
    ({
        type: Constant.UPDATE_START,
        payload: address
    })
export const updateEnd = address =>
    ({
        type: Constant.UPDATE_END,
        payload: address
    })



export const fetchRoute = addresses => dispatch => {

    dispatch({
        type: Constant.FETCH_ROUTE
    })

   fetch(host + 'getMapRoutes')
        .then(response => response.json())
        .then(route => {
            dispatch({
                type: Constant.UPDATE_ROUTE,
                payload: route
            })

        })
        .catch(error => {

            dispatch(
                addError(error.message)
            )

            dispatch({
                type: Constant.CANCEL_FETCH
            })

        })
}