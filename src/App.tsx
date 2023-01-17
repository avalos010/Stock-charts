import { Route, Routes, useLocation } from "react-router-dom";
import { Search } from "./pages/search/Search";
import { Chart } from "./pages/search/Chart";
import { Nav } from "./components/Nav";
import { createContext, useReducer } from "react";
import { chartsReducer } from "./reducer/chartsReducer";
import { Saved } from "./pages/search/Saved";

export const SavedChartsContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(chartsReducer, { savedCharts: [] });
  return (
    <div className="container">
      <Nav currentURL={useLocation().pathname} />

      {/* TODO: remove routing if were not going to make use of it. */}
      <SavedChartsContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/chart/:symbol" element={<Chart />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </SavedChartsContext.Provider>
    </div>
  );
}

export default App;
