import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookList } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, []);

  const bookList = useSelector((state) => state.books);

  return (
    <>
      <ul className="book-list">
        {bookList.map((bookItem) => (
          <Book key={bookItem.item_id} bookItem={bookItem} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookList;
