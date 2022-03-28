import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    // build book obj
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const book = {
      title: titleInput.value,
      author: authorInput.value,
    };

    dispatch(addBookAction(book));

    // clear values
    titleInput.value = '';
    authorInput.value = '';
  };

  return (
    <form method="POST" action="/" className="add" onSubmit={(e) => submitForm(e)}>
      <h3>ADD NEW BOOK</h3>
      <input type="text" name="title" id="title" placeholder="Book title" required />
      <input type="text" name="author" id="author" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
