import { useState } from "react";

import Navigation from "./Navigation";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navigation setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
};

export default App;
