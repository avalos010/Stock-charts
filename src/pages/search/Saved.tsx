import { useContext } from "react";
import { Action, State } from "../../reducer/chartsReducer";
import { SavedChartsContext } from "../../App";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { options } from "../../chartOptions/options";
import { Button } from "../../components/Button";

export function Saved() {
  const { state, dispatch } = useContext(SavedChartsContext) as {
    state: State;
    dispatch: React.Dispatch<Action>;
  };

  return (
    <div className="container">
      {!state.savedCharts.length && (
        <p className="fs-2 text-center">No saved charts found.</p>
      )}
      {state.savedCharts.map((chart) => {
        const opts = options(chart.name, chart.data, chart.type);
        return (
          <div key={chart.name}>
            <Button
              type="primary"
              text="remove from saved"
              onClick={() =>
                dispatch({
                  type: "remove_from_saved",
                  payload: { symbol: chart.name },
                })
              }
            />

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
