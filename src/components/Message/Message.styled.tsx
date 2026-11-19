import styled from "styled-components";

export const MessageStyled = styled.p<{ $isValid?: boolean }>`
  font-size: 10px;
  color: ${({ $isValid }) => ($isValid ? "green" : "red")};
`;
