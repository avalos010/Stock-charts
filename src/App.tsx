import { Route, Routes, useLocation } from "react-router-dom";
import { Search } from "./pages/search/Search";
import { Chart } from "./pages/search/Chart";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav currentURL={useLocation().pathname} />
      <h3>Stocks charts</h3>

      {/* TODO: remove routing if were not going to make use of it. */}
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/chart/:symbol" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
