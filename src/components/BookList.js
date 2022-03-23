import Book from './Book';

const BookList = () => {
  const bookList = [
    {
      id: 0,
      title: 'Book example',
      author: 'Ronald McDonald',
    },
  ];
  return (
    <ul className="book-list">
      {bookList.map((bookItem) => (
        <Book key={bookItem.id} bookItem={bookItem} />
      ))}
    </ul>
  );
};

export default BookList;
