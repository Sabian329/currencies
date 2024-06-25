export enum TABLE_TYPE_ENUM {
  A = "a",
  B = "b",
  C = "c",
}

export interface SpecyficCurrencyQueryParamsType {
  table: TABLE_TYPE_ENUM;
  currencyCode: string;
}
export type TableDataType = { [key: string]: number | string };
