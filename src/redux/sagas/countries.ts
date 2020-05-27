import { takeLatest, call, put } from 'redux-saga/effects'

import { FETCH_COUNTRIES_FROM_SAGA, Country } from './../../types'
import { fetchCountriesSucceed, fetchCountriesFail } from '../actions'

function* fetchCountries() {
  try {
    const allCountries: Country[] = yield call(getAllCountries)
    // sort name in ascending order
    const sortedCountries = allCountries.sort((a,b) => (a.name > b.name)? 1: -1) 
    yield put(fetchCountriesSucceed(sortedCountries))
  } catch (exception) {
    yield put(fetchCountriesFail(exception))
  }
}

async function getAllCountries() {
  const URL = 'https://restcountries.eu/rest/v2/all'
  const cacheStorage = await caches.open('AllCountries')
  let cacheResponse = await cacheStorage.match(URL)

  if (!cacheResponse || !cacheResponse.ok) {
    await cacheStorage.add(URL)
    cacheResponse = await cacheStorage.match(URL)
  }

  return await cacheResponse?.json()
}

export default [takeLatest(FETCH_COUNTRIES_FROM_SAGA, fetchCountries)]
