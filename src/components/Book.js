import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';
import './circle.css';

const Book = (props) => {
  const { bookItem } = props;
  const dispatch = useDispatch();

  const removeBook = (e) => {
    const btn = e.currentTarget;
    const id = btn.getAttribute('data-id');

    dispatch(removeBookAction(id));
  };

  // updating this number, it will also update the progress circle
  const percentage = 0.64;

  const progressCircleStyle = {
    background: `
    conic-gradient(
      #0290ff ${percentage * 360}deg,
      #e8e8e8 calc(${percentage * 360}deg
    )
    `,
  };

  return (
    <li className="book">
      <div className="details">
        <p className="category">{bookItem.category}</p>
        <h3 className="title">{bookItem.title}</h3>
        <p className="author">{bookItem.author}</p>
        <div className="buttons">
          <button type="button" className="remove-btn" data-id={bookItem.item_id} onClick={removeBook}>
            Remove
          </button>
        </div>
      </div>
      <div className="complete">
        <div className="details">
          <div className="wrapper" style={progressCircleStyle} />
          <div>
            <p className="percentage">
              {Number(percentage) * 100}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="progress">
          <h6>CURRENT CHAPTER</h6>
          <p>Chapter 1</p>
          <button type="button" className="update-btn">UPDATE PROGRESS</button>
        </div>
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
