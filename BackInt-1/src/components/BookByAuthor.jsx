
import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books/author/${author}`
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <>
          <h2>Books by {author}</h2>

          <ul>
            {data.map((book) => (
              <li key={book._id}>{book.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BookByAuthor;