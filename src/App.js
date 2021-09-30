import Navigation from "./Navigation";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div>
      <Navigation />
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
};

export default App;
