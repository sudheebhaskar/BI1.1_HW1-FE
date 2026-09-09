import './App.css'
import Books from "./components/Books"
import BookByTitle from "./components/BookByTitle"
import BookByAuthor from "./components/BookByAuthor"

function App() {
 

  return (
    <>
     
      <Books />
      <BookByTitle title="Shoe Dog"/>
      <BookByAuthor author="Phil Knight"/>

    </>
  )
}

export default App
