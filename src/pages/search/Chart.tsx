import { useContext } from "react";
import { ComparisonContext } from "./AutoCompletionList";
import { useChartData } from "../../hooks/useChartData";

export function Chart() {
  const symbol = useContext(ComparisonContext);
  const { data } = useChartData(symbol);
  const { ["Meta Data"]: metaData, ["Monthly Adjusted Time Series"]: series } =
    data;

  console.log(metaData, series);

  return <div>charts here</div>;
}
