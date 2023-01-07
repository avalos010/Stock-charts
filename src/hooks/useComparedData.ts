import { useQuery } from "@tanstack/react-query";
import { getComparedData } from "../api";

const symbolsFetched: string[] = [];

export function useComparedData(symbols: string[]) {
  return useQuery(
    ["comparedData", symbols],
    async () => {
      const data = [];
      for (let symbol of symbols) {
        if (!symbolsFetched.includes(symbol)) {
          //dont refetch symbol data if we have it already
          const res = await getComparedData(symbol);
          data.push([res]);
          symbolsFetched.push(symbol);
        }
      }
      return data;
    },
    {
      enabled: !!symbols.length,
      staleTime: 60000,
      refetchOnWindowFocus: false,
    }
  );
}
