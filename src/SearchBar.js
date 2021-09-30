const SearchBar = ({ searchString, setSearchString }) => {
  return (
    <input
      type="search"
      value={searchString}
      onChange={(event) => {
        setSearchString(event.target.value);
      }}
    />
  );
};

export default SearchBar;
