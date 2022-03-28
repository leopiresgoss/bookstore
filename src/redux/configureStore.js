import { combineReducers } from 'redux';
import categories from './categories/categories';
import books from './books/books';

const rootReducer = combineReducers({
  books,
  categories,
});

export default rootReducer;
