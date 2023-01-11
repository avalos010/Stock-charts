import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const oddKey = import.meta.env.VITE_ODDS_API_KEY;

export interface autoComplete {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
  }[];
}

console.log(key, "woooo");

export async function getAutoComplete(query: string) {
  const res = await axios.get(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${key}`
  );
  const data: autoComplete = res.data;
  return data;
}

export async function getChartData(symbol: string) {
  const res = await axios.get(
    `/api/historicstockprices?&symbol=${symbol}&from=2021-01-04&to=2022-01-07&fields=symbol,date,open,close&apikey=${oddKey}&format=json`
  );
  const data = res.data;
  return data;
}
