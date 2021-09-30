const SearchButton = ({ setSearchQuery, searchString }) => (
  <button type="button" onClick={() => setSearchQuery(searchString)}>
    Search
  </button>
);

export default SearchButton;
