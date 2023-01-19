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
import { DateChange } from "../../components/DateChange";

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
  // const [showDatePicker, setShowDatePicker] = useState(false);
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
        <div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
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

          {/* <Button
            text="Change Dates"
            type="primary"
            onClick={() => setShowDatePicker(true)}
          /> */}

          <div className="border d-flex flex-row mt-2">
            <div className="m-3">
              <p>From:</p>
              <DateChange
                date={new Date(dates[0])}
                onChange={(date) =>
                  setDates((prev) => [convertDate(date), prev[1]])
                }
              />
            </div>
            <div className="m-3">
              <p>To:</p>
              <DateChange
                date={new Date(dates[1])}
                onChange={(date) =>
                  setDates((prev) => [prev[0], convertDate(date)])
                }
              />
            </div>
          </div>
        </div>
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
