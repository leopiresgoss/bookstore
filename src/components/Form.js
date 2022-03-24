const Form = () => (
  <form method="POST" action="/" className="add">
    <h3>ADD NEW BOOK</h3>
    <input type="text" name="title" id="title" placeholder="Book title" />
    <input type="text" name="author" id="author" placeholder="Author" />
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
