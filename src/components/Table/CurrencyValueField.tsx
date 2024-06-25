import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { TableDataType } from "../../types";

export const CurrencyValueField = ({ data }: TableDataType) => {
  const { code, currency, mid } = data;
  return (
    <Stat>
      <StatLabel>Current Value</StatLabel>
      <StatNumber>PLN {mid}</StatNumber>
      <StatHelpText>Feb 12 - Feb 28</StatHelpText>
    </Stat>
  );
};
