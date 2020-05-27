import {
  FETCH_COUNTRIES_FROM_SAGA,
  FETCH_COUNTRIES_SUCCEED,
  FETCH_COUNTRIES_FAIL,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  Country,
  CountriesAction,
  Exception,

} from '../../types'

export function fetchCountriesFromSaga(): CountriesAction {
  return {
    type: FETCH_COUNTRIES_FROM_SAGA,
  }
}

export function fetchCountriesSucceed(countries: Country[]): CountriesAction {
  return {
    type: FETCH_COUNTRIES_SUCCEED,
    payload: {
      countries: countries,
    },
  }
}

export function fetchCountriesFail(exception: Exception): CountriesAction {
  return {
    type: FETCH_COUNTRIES_FAIL,
    payload: {
      exception: exception,
    },
  }
}

export function addCountry(country: Country): CountriesAction {
  return {
    type: ADD_COUNTRY,
    payload: {
      country: country,
    },
  }
}

export function removeCountry(name: string): CountriesAction {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      name: name,
    },
  }
}



