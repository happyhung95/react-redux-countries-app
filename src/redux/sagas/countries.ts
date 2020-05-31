import { takeLatest, call, put } from 'redux-saga/effects'

import { FETCH_COUNTRIES_FROM_SAGA, Country } from './../../types'
import { fetchCountriesSucceed, fetchCountriesFail } from '../actions'
import { getAllCountries } from '../../services/getAllCountries'

function* fetchCountries() {
  try {
    const allCountries: Country[] = yield call(getAllCountries)

    // sort countries name in ascending order
    allCountries.sort((a, b) => (a.name > b.name ? 1 : -1))

    yield put(fetchCountriesSucceed(allCountries))
  } catch (exception) {
    yield put(fetchCountriesFail(exception))
  }
}

export default [takeLatest(FETCH_COUNTRIES_FROM_SAGA, fetchCountries)]
