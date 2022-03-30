const API_LINK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zhiJtIiT95xrPBeUjbMJ';

// get books from api
const getBooks = async () => {
  const reqURL = `${API_LINK}/books`;
  const res = await fetch(reqURL);
  return res.json();
};

// add books to api
const addBook = async (book) => {
  const reqURL = `${API_LINK}/books`;
  await fetch(reqURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// remove book
const removeBook = async (id) => {
  const reqURL = `${API_LINK}/books/${id}`;
  await fetch(reqURL, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const BookstoreService = {
  getBooks,
  addBook,
  removeBook,
};

export default BookstoreService;
