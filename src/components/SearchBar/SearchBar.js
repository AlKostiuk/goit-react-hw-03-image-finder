import style from './searchbar.module.css'








const SearchBar =({onSubmit})=> {

  return (
<header className={style.Searchbar}>
  <form className="form" onSubmit={onSubmit}>
    <button type="submit" className="button" >
      <span className="button-label">Search</span>
    </button>

    <input
      name ="search"
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  )
}



export default SearchBar
