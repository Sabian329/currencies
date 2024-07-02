import { TableDataType } from "../types";
import { CurrencyNameField } from "../components/Table/CurrencyNameField";
import { CurrencyValueField } from "../components/Table/CurrencyValueField";

export type ColumnConfigType = {
  name: string;
  label: string;
  isNumeric: boolean;
  customComponent?: (data: TableDataType) => JSX.Element | undefined;
};

export const useTableConfig = (): { columnConfig: ColumnConfigType[] } => {
  const columnConfig = [
    {
      name: "currency",
      label: "CURRENCY",
      isNumeric: false,
      customComponent: (data: TableDataType) => {
        return <CurrencyNameField data={data} />;
      },
    },
    // { name: "code", label: "CODE", isNumeric: false },
    {
      name: "mid",
      label: "MID",
      isNumeric: true,
      customComponent: (data: TableDataType) => {
        return <CurrencyValueField data={data} />;
      },
    },
  ];
  return { columnConfig };
};
