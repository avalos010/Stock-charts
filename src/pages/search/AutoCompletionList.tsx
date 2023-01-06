import React, { createContext, useState } from "react";
import { useAutoCompletion } from "../../hooks/useAutoCompletion";
import { Compare } from "./Compare";
export const ComparisonContext = createContext<string[]>([]);

function AutoCompletionList({ query }: AutoCompletionListProps) {
  const { data } = useAutoCompletion(query);
  const [compare, setCompare] = useState<string[]>([]);

  function addToCompare(symbol: string) {
    if (!compare.includes(symbol)) {
      setCompare([...compare, symbol]);
    }
  }

  return (
    <ComparisonContext.Provider value={compare}>
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
                    onClick={() => addToCompare(symbol)}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Add
                  </button>
                </div>
              );
            })
          )}
      </div>

      <Compare />
    </ComparisonContext.Provider>
  );
}

export { AutoCompletionList };

interface AutoCompletionListProps {
  query: string;
}
