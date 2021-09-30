import { useEffect, useState } from "react";

const SearchResults = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setSearchResults(data.items);
        }
      });
  }, [searchQuery]);

  return (
    <main>
      {searchQuery === "" ? (
        "No search"
      ) : (
        <div>
          <p>You have searched for {searchQuery}</p>
          {searchResults.map((searchResult) => (
            <div>
              <img
                style={{ maxHeight: 120 }}
                src={searchResult.avatar_url}
                alt={searchResult.login}
              />
              {searchResult.login}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default SearchResults;
