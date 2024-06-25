import axios from "axios";
import { BASE_URL, DATA_FORMAT } from ".";
import { SpecyficCurrencyQueryParamsType, TABLE_TYPE_ENUM } from "../types";

export const currenciesQueries = {
  getCurrecniesTable: ({ table }: { table: TABLE_TYPE_ENUM }) =>
    axios.get(`${BASE_URL}/tables/${table}/${DATA_FORMAT}`),
  getSpecyficCurrency: ({
    table,
    currencyCode,
  }: SpecyficCurrencyQueryParamsType) =>
    axios.get(`${BASE_URL}/rates/${table}/${currencyCode}/${DATA_FORMAT}`),
};
