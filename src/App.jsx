import './App.css'
import Books from "./components/Books"
import BookByTitle from "./components/BookByTitle"
import BookByAuthor from "./components/BookByAuthor"
import AddBookForm from './components/AddBookForm'

function App() {
 

  return (
    <>
      <AddBookForm />
     

      <Books />

<BookByTitle title="Deep Work " />

<BookByAuthor author="Cal Newport" />

    </>
  )
}

export default App
