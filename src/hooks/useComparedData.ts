import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getComparedData } from "../api";

export function useComparedData(symbols: string[]) {
  const [stockData, setStockData] = useState<any[]>([]);

  useQuery(
    ["comparedData", symbols],
    async () => {
      for (let symbol of symbols) {
        setStockData([...stockData, getComparedData(symbol)]);
      }
    },
    {
      enabled: !!symbols.length,
    }
  );

  console.log(stockData);

  return stockData;
}
