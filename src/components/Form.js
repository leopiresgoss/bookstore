import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const bookObj = {
      ...book,
      item_id: Date.now().toString(),
    };

    dispatch(addBookAction(bookObj));

    // clear values
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <form method="POST" action="/" className="add" onSubmit={(e) => submitForm(e)}>
      <h3>ADD NEW BOOK</h3>
      <fieldset>
        <input type="text" name="title" id="title" value={book.title} placeholder="Book title" onChange={handleChange} required />
        <input type="text" name="author" id="author" value={book.author} placeholder="Author" onChange={handleChange} required />
        <button type="submit">ADD BOOK</button>
      </fieldset>
    </form>
  );
};

export default Form;
