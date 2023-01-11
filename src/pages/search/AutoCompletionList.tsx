import React from "react";
import { useAutoCompletion } from "../../hooks/useAutoCompletion";
import { Link } from "react-router-dom";

function AutoCompletionList({ query }: AutoCompletionListProps) {
  const { data } = useAutoCompletion(query);

  return (
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
                <Link
                  to={`/chart/${symbol}`}
                  className="btn btn-outline-dark btn-sm"
                >
                  View Chart
                </Link>
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
