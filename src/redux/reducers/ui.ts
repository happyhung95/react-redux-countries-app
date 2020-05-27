import { UiState, UiAction, SEARCH_COUNTRY, TOGGLE_MENU } from './../../types'

function uiReducer(
  state: UiState = {
    searchKey: '',
    isMenuOpened: false,
  },
  action: UiAction
): UiState {
  switch (action.type) {
  case SEARCH_COUNTRY: {
    const { searchKey } = action.payload
    return { ...state, searchKey: searchKey }
  }
  case TOGGLE_MENU: {
    const { isMenuOpened } = action.payload
    return { ...state, isMenuOpened: isMenuOpened }
  }

  default:
    return state
  }
}

export default uiReducer
