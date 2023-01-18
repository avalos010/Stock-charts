import { chartData } from "../api";

export const options = (symbol: string, data: chartData[]) => {
  return {
    title: {
      text: symbol?.toUpperCase(),
    },
    subtitle: {
      text: `from ${data[0].date} to ${data[data.length - 1].date}`,
    },
    yAxis: {
      title: {
        text: "Price ($)",
      },
    },
    tooltip: {
      shared: true,
      valueDecimals: 2,
      valuePrefix: "$",
      valueSuffix: " USD",
    },
    xAxis: {
      categories: data.map((i) => i.date),
    },
    series: [
      { name: "Open", data: data.map((d) => d.open) },
      { name: "Close", data: data.map((d) => d.close) },
    ],
  };
};
