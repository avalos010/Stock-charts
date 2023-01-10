import { useQuery } from "@tanstack/react-query";
import { getChartData } from "../api";

export function useChartData(symbol: string) {
  return useQuery(
    ["chartData", symbol],
    async () => {
      const data = await getChartData(symbol);
      console.log(data, "data");
      return data;
    },
    {
      enabled: !!symbol,
      staleTime: 60000,
      refetchOnWindowFocus: false,
    }
  );
}
