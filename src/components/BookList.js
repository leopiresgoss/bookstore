import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const bookList = useSelector((state) => state.books);

  return (
    <>
      <ul className="book-list">
        {bookList.map((bookItem) => (
          <Book key={bookItem.id} bookItem={bookItem} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookList;
