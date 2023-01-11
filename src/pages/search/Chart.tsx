import { ResponsiveContainer } from "recharts";
import { useChartData } from "../../hooks/useChartData";
import { useParams } from "react-router-dom";
import { Line } from "../../components/charts/Line";

export function Chart() {
  const { symbol } = useParams();
  const { data } = useChartData(symbol as string);

  if (data?.response) {
    return (
      <div>
        <h2>{symbol?.toUpperCase()}</h2>
        <ResponsiveContainer height={400} width="90%">
          <Line data={data} />
        </ResponsiveContainer>
      </div>
    );
  } else {
    return null;
  }
}
