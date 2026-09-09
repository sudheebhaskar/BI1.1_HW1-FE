 import useFetch from "../useFetch"
 
 const Books = () => {

    const { data, loading, error } = useFetch("https://be4assignment1-one.vercel.app/books");


    return(
        <div>
            <h1>All Books</h1>
            <ul>
            { data?.map(book => <li> {book.title}</li>)}
            </ul>
        </div>
    )
 }

 export default Books;