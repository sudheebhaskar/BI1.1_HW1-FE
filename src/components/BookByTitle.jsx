import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://be4assignment1-one.vercel.app/books/title/${encodeURIComponent(title)}`
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && !data.error && (
        <div>
          <h2>
            <strong>{data.title}</strong>
          </h2>

          <p>
            <strong>Author:</strong> {data.author}
          </p>

          <p>
            <strong>Release Year:</strong> {data.publishedYear}
          </p>

          <p>
            <strong>Genre:</strong> {data.genre?.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookByTitle;