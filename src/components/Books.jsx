//  import useFetch from "../useFetch"
 
//  const Books = () => {

//     const { data, loading, error } = useFetch("https://be4assignment1-one.vercel.app/books");


//     return(
//         <div>
//             <h1>All Books</h1>
//             <ul>
//             { data?.map(book => <li> {book.title}</li>)}
//             </ul>
//         </div>
//     )
//  }

//  export default Books;

import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("https://be4assignment1-one.vercel.app/books");

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`https://8e642f54-f184-4b46-8429-30553e12739b-00-2eurj0kurc5wi.sisko.replit.dev/books/${bookId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete book.");
      }

      setSuccessMessage("Book deleted successfully");
     
      const updatedData = data.filter(book => book._id !== bookId);
      setSuccessMessage(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}{" "}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};

export default Books;
