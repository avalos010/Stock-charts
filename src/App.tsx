import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { useAutoCompletion } from "./hooks/useAutoCompletion";
import React from "react";

function App() {
  const [query, setQuery] = useState("");
  const { data } = useAutoCompletion(query);

  return (
    <div className="App">
      <SearchInput onChange={(e) => setQuery(e.target.value)} />
      {data && (
        <div className="list-group">
          {/* TODO: Break this down into another component */}
          {React.Children.toArray(
            data.bestMatches.map((symbl: any) => {
              const name = symbl["1. symbol"];
              const symbol = symbl["2. name"];
              return (
                <div>
                  <p>
                    {name} - {symbol}
                  </p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default App;
