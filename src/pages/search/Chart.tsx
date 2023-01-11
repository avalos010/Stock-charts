import { useContext } from "react";
import { ChartContext } from "./AutoCompletionList";
import { useChartData } from "../../hooks/useChartData";

export function Chart() {
  const symbol = useContext(ChartContext);
  const { data } = useChartData(symbol);

  if (data) {
    const {
      ["Meta Data"]: metaData,
      ["Monthly Adjusted Time Series"]: series,
    } = data;
    console.log(metaData, series);
    return <div>charts here</div>;
  } else {
    return null;
  }
}
