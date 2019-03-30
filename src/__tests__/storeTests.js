import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import Constant from '../store/Constants'
import { addError, clearError, fetchRoute } from '../store/actions'
import { errors, fetching } from '..//store/reducers'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('actions.js', () => {

	describe('addError()', () => {
		it ('should add error message to [error] state', () => {
			const payload = "test error message"
			const expectedAction = {
				type: Constant.ADD_ERROR,
				payload
			}
			expect(addError(payload)).toEqual(expectedAction)
		})
	})


	describe('clearError()', () => {
		it ('should remove error at payload index from [error] state', () => {
			const payload = 0
			const expectedAction = {
				type: Constant.CLEAR_ERROR,
				payload
			}
			expect(clearError(payload)).toEqual(expectedAction)
		})
	})
})


describe('reducers.js', () => {

	describe('errors reducer', () => {

		  it('should add an error to state', () => {
		     expect(
	      		errors([], {
	        		type: Constant.ADD_ERROR,
	        		payload: "add test error"
	      		})
	    	).toEqual(["add test error"])
		  })


		  it('should remove an error from state', () => {
		     expect(
	      		errors(["this error should stay", "this error should be removed", "this error should also stay"], {
	        		type: Constant.CLEAR_ERROR,
	        		payload: 1
	      		})
	    	).toEqual(["this error should stay", "this error should also stay"])
		  })


	})



	describe('fetching reducer', () => {


		  it('should return true when fetching', () => {
		     expect(
	      		fetching(false, {
	        		type: Constant.FETCH_ACHIEVEMENTS,
	      		})
	    	).toEqual(true)
		  })


		  it('should return false when fetching is canceled', () => {
		     expect(
	      		fetching(true, {
	        		type: Constant.CANCEL_FETCHING,
	      		})
	    	).toEqual(false)
		  })
	})

})