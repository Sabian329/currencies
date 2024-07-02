import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { TableDataType } from "../../types";
import { format } from "date-fns";

export const CurrencyValueField = ({ data }: { data: TableDataType }) => {
  const { mid } = data;
  const updateMessage = `Last update ${format(
    new Date(),
    "yyyy-MM-dd, HH:mm"
  )}`;
  return (
    <Stat>
      <StatLabel>Current Value</StatLabel>
      <StatNumber>PLN {mid}</StatNumber>
      <StatHelpText>{updateMessage}</StatHelpText>
    </Stat>
  );
};
