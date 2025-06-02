import { createStore } from 'redux';

// Initial State
const initialState = {
  favorites: []
};

// Reducer
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload.id)
      };

    default:
      return state;
  }
}

// Create Store
const store = createStore(movieReducer);

export default store;