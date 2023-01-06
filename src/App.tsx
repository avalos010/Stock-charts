import { Link, Route, Routes } from "react-router-dom";
import { Search } from "./routes/search/Search";

function App() {
  return (
    <div className="App">
      <h3>Stocks charts</h3>
      <Link to="/search">Search</Link>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
