import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

const Navigation = ({ setSearchQuery }) => {
  const [searchString, setSearchString] = useState("");

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
    </header>
  );
};

export default Navigation;
