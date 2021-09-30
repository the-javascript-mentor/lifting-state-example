const SearchResults = ({ searchQuery }) => {
  return (
    <main>
      {searchQuery === ""
        ? "No search"
        : `You have searched for ${searchQuery}`}
    </main>
  );
};

export default SearchResults;
