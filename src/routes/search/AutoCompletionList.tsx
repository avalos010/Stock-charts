import { autoComplete } from "../../api";
import React from "react";
import { useAutoCompletion } from "../../hooks/useAutoCompletion";

function AutoCompletionList({ query }: AutoCompletionListProps) {
  const { data } = useAutoCompletion(query);

  return (
    <div className="list-group">
      <div className="list-group"></div>
      {React.Children.toArray(
        data?.bestMatches.map((symbl: any) => {
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
  );
}

export { AutoCompletionList };

interface AutoCompletionListProps {
  query: string;
}
