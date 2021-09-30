import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

const Navigation = () => {
  const [searchString, setSearchString] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header>
      <nav>
        <a href="https://github.com/">GitHub</a>
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <SearchButton
          searchString={searchString}
          setSearchQuery={setSearchQuery}
        />
      </nav>
      {searchQuery === ""
        ? "No search"
        : `You have searched for ${searchQuery}`}
    </header>
  );
};

export default Navigation;