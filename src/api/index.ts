import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const oddKey = import.meta.env.VITE_ODDS_API_KEY;
const enviroment = import.meta.env.VITE_ENV;

export interface autoComplete {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
  }[];
}

export interface chartData {
  response: {
    symbol: string;
    date: string;
    open: number;
    close: number;
    volume: number;
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
  const localURL = `/api/historicstockprices?&symbol=${symbol}&from=2022-01-04&to=2022-07-07&fields=symbol,date,open,close,volume&apikey=${oddKey}&format=json`;
  const netlifyURL =
    "`/api/historicstockprices?&symbol=${symbol}&from=2022-01-04&to=2022-07-07&fields=symbol,date,open,close,volume&apikey=${oddKey}&format=json";
  const url = enviroment === "local" ? localURL : netlifyURL;

  const res = await axios.get(url);
  const data: chartData = res.data;
  return data;
}
