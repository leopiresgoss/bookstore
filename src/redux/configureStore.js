import { combineReducers, createStore } from 'redux';
import categories from './categories/categories';
import books from './books/books';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = createStore(rootReducer);

export default store;
