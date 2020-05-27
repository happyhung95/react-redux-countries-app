export const FETCH_COUNTRIES_FROM_SAGA = 'FETCH_COUNTRIES_FROM_SAGA'
export const FETCH_COUNTRIES_SUCCEED = 'FETCH_COUNTRIES_SUCCEED'
export const FETCH_COUNTRIES_FAIL = 'FETCH_COUNTRIES_FAIL'
export const HANDLE_INPUT_TO_SAGA = 'HANDLE_INPUT_TO_SAGA'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const TOGGLE_MENU = 'TOGGLE_MENU'

export type Country = {
  name: string
  flag: string
  population: number
  languages: { name: string }[]
  region: string
}

export type Exception = {
  errorMessage: string
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES_FROM_SAGA
}

export type FetchCountriesSucceedAction = {
  type: typeof FETCH_COUNTRIES_SUCCEED
  payload: {
    countries: Country[]
  }
}

export type FetchCountriesFailAction = {
  type: typeof FETCH_COUNTRIES_FAIL
  payload: {
    exception: Exception
  }
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    name: string
  }
}

export type SearchCountryAction = {
  type: typeof SEARCH_COUNTRY
  payload: {
    searchKey: string
  }
}

export type HandleInputToSagaAction = {
  type: typeof HANDLE_INPUT_TO_SAGA
  payload: {
    searchKey: string
  }
}

export type ToggleMenuAction = {
  type: typeof TOGGLE_MENU
  payload: {
    isMenuOpened: boolean
  }
}


// Use this union in reducer
export type UiAction = 
| SearchCountryAction
| HandleInputToSagaAction
| ToggleMenuAction


export type CountriesAction =
  | FetchCountriesAction
  | FetchCountriesSucceedAction
  | FetchCountriesFailAction
  | AddCountryAction
  | RemoveCountryAction


// Using dynamic keys from an enum
export type UiState = {
  searchKey: string
  isMenuOpened: boolean
}

export type CountriesState = {
  inCart: Country[]
  countries: Country[]
  exception?: Exception
}

export type AppState = {
  countries: CountriesState
  ui: UiState
}
