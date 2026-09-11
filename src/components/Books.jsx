import { useEffect, useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [books, setBooks] = useState([]);

  const { data, loading, error } = useFetch(
    "https://be4assignment1-one.vercel.app/books"
  );

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `https://be4assignment1-one.vercel.app/books/${bookId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete book.");
      }

      // Remove the deleted book from the UI
      setBooks((currentBooks) =>
        currentBooks.filter((book) => book._id !== bookId)
      );

      // Show success message
      setSuccessMessage("Book deleted successfully");

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {successMessage && <p>{successMessage}</p>}

      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title}{" "}
            <button onClick={() => handleDelete(book._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;