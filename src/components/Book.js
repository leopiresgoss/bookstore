import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookItem } = props;
  return (
    <li className="book">
      <h3 className="title">{bookItem.title}</h3>
      <p className="author">{bookItem.author}</p>
    </li>
  );
};

Book.propTypes = {
  bookItem: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
