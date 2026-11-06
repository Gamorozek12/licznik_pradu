import styled from "styled-components";

export const TableContainer = styled.div`
  background: white;
`;

export const TableHeader = styled.div`
  display: flex;
  background: #474646;
  font-weight: bold;
  border-bottom: 2px solid #3c3c3c;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  background: #8a8a8a;
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #5e5d5d;

  &:last-child {
    border-bottom: none;
  }
`;

export const Col = styled.div`
  flex: 1;
  width: 90px;
  padding: 10px;
`;
