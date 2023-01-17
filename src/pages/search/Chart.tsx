import { useChartData } from "../../hooks/useChartData";
import { useParams } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
import { convertDate } from "../../utils/convertDate";

export function Chart() {
  const { symbol } = useParams();
  const lastYear = new Date();
  lastYear.setFullYear(lastYear.getFullYear() - 1);
  const [dates, setDates] = useState<string[]>([]);
  const { data, isLoading } = useChartData(symbol as string, dates);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const sortedData = data?.response.sort(
    // @ts-ignore
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  useEffect(() => {
    setDates([convertDate(lastYear), convertDate(new Date())]);
  }, []);

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
      categories: sortedData?.map((i) => i.date),
    },
    //TODO: Figure out these ts errors.
    series: [
      //@ts-ignore
      { name: "Open", data: sortedData?.map((d) => d.open) },
      //@ts-ignore
      { name: "Close", data: sortedData?.map((d) => d.close) },
    ],
  };

  return (
    <div>
      {!!isLoading && <p>Loading...</p>}
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}
