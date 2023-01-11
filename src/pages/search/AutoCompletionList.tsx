import React, { createContext, useState } from "react";
import { useAutoCompletion } from "../../hooks/useAutoCompletion";
import { Chart } from "./Chart";
export const ChartContext = createContext<string>("");

function AutoCompletionList({ query }: AutoCompletionListProps) {
  const { data } = useAutoCompletion(query);
  const [symbol, setSymbol] = useState("");

  function addSymbol(str: string) {
    setSymbol(str);
  }

  return (
    <ChartContext.Provider value={symbol}>
      <div className="list-group">
        {!!data?.bestMatches &&
          React.Children.toArray(
            data?.bestMatches.map((symbl: any) => {
              const symbol = symbl["1. symbol"];
              const name = symbl["2. name"];
              return (
                <div className="d-flex flex-row align-items-center justify-content-between border-top border-bottom">
                  <p className="mb-0">
                    {name} - {symbol}
                  </p>
                  <button
                    onClick={() => addSymbol(symbol)}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Add
                  </button>
                </div>
              );
            })
          )}
      </div>

      {symbol && <Chart />}
    </ChartContext.Provider>
  );
}

export { AutoCompletionList };

interface AutoCompletionListProps {
  query: string;
}
