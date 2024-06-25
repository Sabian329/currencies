import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import { TableDataType } from "../../types";

export const CurrencyNameField = ({ data }: TableDataType) => {
  const { code, currency, mid } = data;
  return (
    <Flex>
      <Avatar
        src={`https://flagicons.lipis.dev/flags/1x1/${code
          .toLowerCase()
          .slice(0, -1)}.svg`}
      />
      <Box ml="3">
        <Text fontWeight="bold">
          {currency}
          <Badge ml="1" colorScheme="green"></Badge>
        </Text>
        <Text fontSize="sm">{code}</Text>
      </Box>
    </Flex>
  );
};
