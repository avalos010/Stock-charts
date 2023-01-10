import axios from "axios";
const key = import.meta.env.API_KEY;
const baseURL = "https://www.alphavantage.co/query?";

export interface autoComplete {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
  }[];
}

export async function getAutoComplete(query: string) {
  const res = await axios.get(
    `${baseURL}function=SYMBOL_SEARCH&keywords=${query}&apikey=${key}`
  );
  const data: autoComplete = res.data;
  return data;
}

export async function getChartData(symbol: string) {
  const res = await axios.get(
    `${baseURL}function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${key}`
  );
  const data = res.data;
  return data;
}
