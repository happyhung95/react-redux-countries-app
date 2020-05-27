import {
  SEARCH_COUNTRY,
  UiAction,
  HANDLE_INPUT_TO_SAGA,
  TOGGLE_MENU,
} from './../../types'

export function searchCountry(searchKey: string): UiAction {
  return {
    type: SEARCH_COUNTRY,
    payload: {
      searchKey: searchKey,
    },
  }
}

export function handleInputToSaga(searchKey: string): UiAction {
  return {
    type: HANDLE_INPUT_TO_SAGA,
    payload: {
      searchKey: searchKey,
    },
  }
}

export function toggleMenuOpen(isMenuOpened: boolean): UiAction {
  return {
    type: TOGGLE_MENU,
    payload: {
      isMenuOpened: isMenuOpened,
    },
  }
}
