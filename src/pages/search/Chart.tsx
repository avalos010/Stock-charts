import { useChartData } from "../../hooks/useChartData";
import { useNavigate, useParams } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useContext, useEffect, useRef, useState } from "react";
import { convertDate } from "../../utils/convertDate";
import { SavedChartsContext } from "../../App";
import { Action, State } from "../../reducer/chartsReducer";
import { ErrorAlert } from "../../components/ErrorAlert";
import { Spinner } from "../../components/Spinner";
import { options } from "../../chartOptions/options";
import { Button } from "../../components/Button";

export function Chart() {
  const { state, dispatch } = useContext(SavedChartsContext) as {
    state: State;
    dispatch: React.Dispatch<Action>;
  };
  const { symbol } = useParams();
  const navigate = useNavigate();
  const lastYear = new Date();
  lastYear.setFullYear(lastYear.getFullYear() - 1);
  const [dates, setDates] = useState<string[]>([]);
  const { data, isLoading, isError } = useChartData(symbol as string, dates);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const sortedData = data
    ? data.response.sort(
        // @ts-ignore
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    : [];
  const isSaved = state.savedCharts.some((chart) => chart.name === symbol);
  useEffect(() => {
    setDates([convertDate(lastYear), convertDate(new Date())]);
  }, []);

  useEffect(() => {
    if (isError) {
      setTimeout(() => navigate("/"), 5000);
    }
  }, [isError]);

  return (
    <div className="container">
      {!!isLoading && <Spinner />}
      {isError && (
        <ErrorAlert message="No Data available you will be redirected in a few seconds..." />
      )}

      {!!sortedData.length ? (
        <Button
          text={isSaved ? "Remove from Saved" : "Add to Saved"}
          type="primary"
          onClick={() =>
            isSaved
              ? dispatch({
                  type: "remove_from_saved",
                  payload: { symbol },
                })
              : dispatch({
                  type: "add_to_saved",
                  payload: { data: sortedData, symbol },
                })
          }
        />
      ) : null}
      {!!sortedData.length ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={options(symbol as string, sortedData)}
          ref={chartComponentRef}
        />
      ) : null}
    </div>
  );
}
