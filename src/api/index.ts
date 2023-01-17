import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const oddKey = import.meta.env.VITE_ODDS_API_KEY;

export interface autoComplete {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
  }[];
}

export interface chartDataResponse {
  response: chartData[];
}

export interface chartData {
  symbol: string;
  date: string;
  open: number;
  close: number;
  volume: number;
}

export async function getAutoComplete(query: string) {
  const res = await axios.get(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${key}`
  );
  const data: autoComplete = res.data;
  return data;
}

export async function getChartData(symbol: string, dates: string[]) {
  const [from, to] = dates;
  console.log(dates, "wooo");
  const res = await axios.get(
    `/api/historicstockprices?&symbol=${symbol}&from=${from}&to=${to}&fields=symbol,date,open,close,volume&apikey=${oddKey}&format=json`
  );
  const data: chartDataResponse = res.data;
  if (typeof data.response === "string") {
    throw new Error("No Data ");
  }
  return data;
}
