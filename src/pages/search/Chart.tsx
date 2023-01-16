import { useChartData } from "../../hooks/useChartData";
import { useParams } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

export function Chart() {
  const { symbol } = useParams();
  const { data } = useChartData(symbol as string);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const sortedDates = data?.response.sort(
    // @ts-ignore
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const options: Highcharts.Options = {
    title: {
      text: symbol?.toUpperCase(),
    },
    yAxis: {
      title: {
        text: "Price ($)",
      },
    },
    xAxis: {
      categories: sortedDates?.map((i) => i.date),
    },
    //TODO: Figure out these ts errors.
    series: [
      //@ts-ignore
      { name: "Open", data: sortedDates?.map((d) => d.open) },
      //@ts-ignore
      { name: "Close", data: sortedDates?.map((d) => d.close) },
    ],
  };

  if (data?.response) {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    );
  } else {
    return null;
  }
}
