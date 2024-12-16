function SearchBar() {
  return (
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search Hotels"
      />
      <button className="search__button">
        {/* How to use svg icons */}
        <svg className="search__icon">
          <use xlinkHref="/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
