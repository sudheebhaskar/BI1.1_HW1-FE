import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: [],
    language: "",
    country: "",
    rating: 0,
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        genre: checked
          ? [...prevState.genre, value]
          : prevState.genre.filter((g) => g !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "publishedYear" || name === "rating" ? parseInt(value) || "" : value,
      }));
    }
  };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         "https://be4assignment1-one.vercel.app/books", 
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to add book");
//       }
//       const data = await response.json();
//       console.log("Added Book", data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(
        "https://be4assignment1-one.vercel.app/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const data = await response.json();
  
      console.log("Backend response:", data);
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to add book");
      }
  
      console.log("Added Book:", data);
  
    } catch (error) {
      console.error("Error while adding book:", error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Author:</label>
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Published Year:</label>
        <br />
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Genre:</label>
        <br />
        {[
          "Fiction",
          "Non-Fiction",
          "Mystery",
          "Thriller",
          "Science Fiction",
          "Fantasy",
          "Romance",
          "Historical",
          "Biography",
          "Self-help",
          "Other",
        ].map((genre) => (
          <div key={genre}>
            <input
              type="checkbox"
              name="genre"
              value={genre}
              checked={formData.genre.includes(genre)}
              onChange={handleChange}
            />
            <label>{genre}</label>
          </div>
        ))}
        <br />

        <label>Language:</label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Country:</label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Rating (0-10):</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Summary:</label>
        <br />
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Cover Image URL:</label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;