import styled, { css } from "styled-components";

export const Table = styled.table`
  border-radius: 10px;
  padding: 15px;
  border: 1px solid lightgray;
  width: 1500px;
  margin: 50px auto;
  border-collapse: collapse;
`;

Table.Thead = styled.thead`
  position: relative;
  text-align: center;
  background-color: lightgray;
  padding: 10px;
`;

Table.Th = styled.th`
  border: 1px solid grey;
  padding: 10px;
`;
Table.Td = styled.td`
  font-size: 18px;
  padding: 10px;
  border: 1px solid grey;
`;
