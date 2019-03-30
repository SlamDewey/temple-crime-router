import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	result = next(action)

	let { route, safetyRating, fetching, errors, markers } = store.getState()
	console.log(`
		route: ${route}
		safetyRating: ${safetyRating}
		fetching: ${fetching}
		errors: ${errors}
		markers: ${markers}
	`)

	console.groupEnd()

	return result

}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}