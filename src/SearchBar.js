const SearchBar = ({ searchString, setSearchString }) => (
  <input
    type="search"
    value={searchString}
    onChange={(event) => {
      setSearchString(event.target.value);
    }}
  />
);

export default SearchBar;
