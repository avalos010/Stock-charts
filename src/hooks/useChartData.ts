import { useQuery } from "@tanstack/react-query";
import { getChartData } from "../api";

export function useChartData(symbol: string, dates: string[]) {
  console.log(dates);
  return useQuery(
    ["chartData", symbol, dates],
    async () => {
      const data = await getChartData(symbol, dates);
      return data;
    },
    {
      enabled: !!symbol && !!dates,
      staleTime: 60000,
      refetchOnWindowFocus: false,
    }
  );
}
