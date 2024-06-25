import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "styled-components";
import { TableDataType } from "../../types";
import { ColumnConfigType } from "../../hooks/useTableConfig";

interface MainTableProps {
  columnConfig: ColumnConfigType[];
  tableData: TableDataType[];
}

export const MainTable = ({ columnConfig, tableData }: MainTableProps) => {
  return (
    <Wrapper>
      <TableContainerWrapper>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columnConfig?.map((item) => {
                return (
                  <Th isNumeric={item.isNumeric} key={item.name}>
                    {item.label}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((data, index) => {
              return (
                <Tr key={index}>
                  {columnConfig.map(
                    ({ name, isNumeric, customComponent }, index) => {
                      return (
                        <Td key={index} isNumeric={isNumeric}>
                          {!!customComponent
                            ? customComponent(data)
                            : data?.[name]}
                        </Td>
                      );
                    }
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainerWrapper>
    </Wrapper>
  );
};
const TableContainerWrapper = styled(TableContainer)`
  background-color: #afafaf;
  width: 40rem;
  border-radius: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;
