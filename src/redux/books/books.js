let nextId = 0;

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

// Action creators
/*
  book = {
    id:
    title:
    author:
  }
*/
export function addBookAction(book) {
  nextId += 1;

  return {
    type: ADD_BOOK,
    payload: {
      ...book,
      id: nextId,
    },
  };
}

export function removeBookAction(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
