import Constant from './constants';
import { combineReducers } from 'redux'


export const errors = (state=[], action) => {
  switch(action.type) {
    case Constant.ADD_ERROR :
    	return [
         ...state,
         action.payload
    	]
    case Constant.CLEAR_ERROR : 
      return state.filter((message, i) => i !== action.payload)
  	default: 
  		return state
  }
}

export const fetching = (state=false, action) => {
	switch(action.type) {
		case Constant.FETCH_ROUTE :
			return true
		case Constant.CANCEL_FETCH :
			return false
		default : 
			return state
	}
}

export const route = (state=[], action) => {
	switch(action.type) {
		case Constant.FETCH_ROUTE :
			return state
		case Constant.CANCEL_FETCH :
			return state
		default:
			return state 
	}
}

export const markers = (state=[], action) => {
	switch(action.type) {
		case Constant.UPDATE_ROUTE :
			return state
		default:
			return state
	}
}

export const safetyRating = (state=-1, action) => {
	switch(action.type) {
		case Constant.FETCH_ROUTE :
			return state
		case Constant.CANCEL_FETCH :
			return state
		default:
			return state 
	}
}

export const start = (state='', action) => {
	switch (action.type) {
		case Constant.UPDATE_START :
			return action.payload
		default :
			return state
	}
}

export const end = (state='', action) => {
	switch (action.type) {
		case Constant.UPDATE_END :
			return action.payload
		default :
			return state
	}
}

const rootReducer = combineReducers ({
 	route,
 	safetyRating,
 	fetching,
 	errors,
 	markers,
 	start,
 	end,
})

export default rootReducer