import { useContext } from "react";
import { Action, State } from "../../reducer/chartsReducer";
import { SavedChartsContext } from "../../App";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { chartData } from "../../api";

export function Saved() {
  const { state, dispatch } = useContext(SavedChartsContext) as {
    state: State;
    dispatch: React.Dispatch<Action>;
  };

  const options = (symbol: string, data: chartData[]) => {
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
      xAxis: {
        categories: data.map((i) => i.date),
      },
      series: [
        { name: "Open", data: data.map((d) => d.open) },
        { name: "Close", data: data.map((d) => d.close) },
      ],
    };
  };

  return (
    <div>
      {state.savedCharts.map((chart) => {
        const opts = options(chart.name, chart.data);
        console.log(opts);
        return (
          <div key={chart.name}>
            <button
              onClick={() =>
                dispatch({
                  type: "remove_from_saved",
                  payload: { symbol: chart.name },
                })
              }
            >
              remove from saved
            </button>
            <HighchartsReact
              key={chart.name}
              highcharts={Highcharts}
              options={opts}
              // ref={chartComponentRef}
            />
          </div>
        );
      })}
    </div>
  );
}
