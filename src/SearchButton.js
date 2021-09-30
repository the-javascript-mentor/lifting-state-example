const SearchButton = ({ setSearchQuery, searchString }) => {
  return (
    <button type="button" onClick={() => setSearchQuery(searchString)}>
      Search
    </button>
  );
};

export default SearchButton;
