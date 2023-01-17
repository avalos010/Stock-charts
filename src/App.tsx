import { Route, Routes, useLocation } from "react-router-dom";
import { Search } from "./pages/search/Search";
import { Chart } from "./pages/search/Chart";
import { Nav } from "./components/Nav";
import { createContext, useReducer } from "react";
import { chartsReducer } from "./reducer/chartsReducer";

export const SavedChartsContext = createContext();

function App() {
  const [state, dispatch] = useReducer(chartsReducer, { savedCharts: [] });
  return (
    <div className="container">
      <Nav currentURL={useLocation().pathname} />
      <h3>Stocks charts</h3>

      {/* TODO: remove routing if were not going to make use of it. */}
      <SavedChartsContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/chart/:symbol" element={<Chart />} />
        </Routes>
      </SavedChartsContext.Provider>
    </div>
  );
}

export default App;
