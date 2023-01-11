import {
  CartesianGrid,
  Legend,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line as L,
} from "recharts";
import { chartData } from "../../api";

export function Line({ data }: LineComponentProps) {
  return (
    <LineChart
      width={900}
      height={300}
      data={data.response}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <L type="monotone" dataKey="close" stroke="red" />
      <L type="monotone" dataKey="open" stroke="green" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
    </LineChart>
  );
}

interface LineComponentProps {
  data: chartData;
}
