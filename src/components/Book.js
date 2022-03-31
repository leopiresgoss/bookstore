import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { bookItem } = props;
  const dispatch = useDispatch();

  const removeBook = (e) => {
    const btn = e.currentTarget;
    const id = btn.getAttribute('data-id');

    dispatch(removeBookAction(id));
  };

  return (
    <li className="book">
      <div className="details">
        <p className="category">{bookItem.category}</p>
        <h3 className="title">{bookItem.title}</h3>
        <p className="author">{bookItem.author}</p>
      </div>
      <div className="buttons">
        <button type="button" className="remove-btn" data-id={bookItem.item_id} onClick={removeBook}>
          Remove
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookItem: PropTypes.exact({
    item_id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
