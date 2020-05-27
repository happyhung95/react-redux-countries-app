import { put, throttle } from 'redux-saga/effects'

import { searchCountry } from '../actions'
import { HANDLE_INPUT_TO_SAGA, HandleInputToSagaAction } from './../../types'

function* sendInputToReducer(action: HandleInputToSagaAction) {
  yield put(searchCountry(action.payload.searchKey))
}

// only send dispatch every 1 second, ignore everything in the meantime
export default [throttle(1000, HANDLE_INPUT_TO_SAGA, sendInputToReducer)]
