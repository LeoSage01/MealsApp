import { useState } from "react";
import { useGlobalContext } from '../context'

const Search = () => {
  const [text, setText] = useState('')

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefsult()
    if (text) {
      setSearchTerm(text)
      setText('')
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type favourite meal" value={text} onChange={handleChange} className="form-input" />
        <button type="submit" className=" btn">Search</button>
        <button type="button" className="btn btn-hipster" onClick={handleRandomMeal} >suprise me!</button>
      </form>
    </header>
  )
}
export default Search;