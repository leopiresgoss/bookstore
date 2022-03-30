import BookstoreService from '../../services/bookstoreService';

// Actions
const GET_BOOKLIST = 'GET_BOOKLIST';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_BOOKLIST:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default: return state;
  }
}

// Action creators
export const addBookAction = (book) => async (dispatch) => {
  await BookstoreService.addBook({
    ...book,
    category: '',
  });
  dispatch({
    type: ADD_BOOK,
    payload: {
      ...book,
    },
  });
};

export function removeBookAction(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export const getBookList = () => async (dispatch) => {
  const bookList = await BookstoreService.getBooks();

  const payload = Object.keys(bookList).map((key) => {
    const { title, author } = bookList[key][0];
    return {
      item_id: key,
      title,
      author,
    };
  });

  dispatch({
    type: GET_BOOKLIST,
    payload,
  });
};
