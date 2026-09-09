import useFetch from "../useFetch"

const BookByTitle = ({title}) => {

    const {data, loading, error} = useFetch(`https://be4assignment1-one.vercel.app/books/title/${title}`);
    return(
       <div>
        {
            data ? ( 
                <div>
                    <h2><strong>{data.title}</strong></h2>
                     <p><strong>Author:</strong> {data.author}</p>
                    <p><strong>Release Year:</strong> {data.publishedYear}</p>
                    <p><strong>Genre:</strong> {data.genre.join(", ")}</p>
                </div>
            ) : <p>Loading....</p>
        }
       </div>
    )
}

export default BookByTitle;