import { Route, Routes } from "react-router-dom";
import { Search } from "./pages/search/Search";

function App() {
  return (
    <div className="container">
      <h3>Stocks charts</h3>
      {/* TODO: remove routing if were not going to make use of it. */}
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
