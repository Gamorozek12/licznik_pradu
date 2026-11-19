import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  background-color: #95d0ed80;
  padding: 40px;

  clip-path: polygon(
    20px 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    20px 100%,
    0 calc(100% - 20px),
    0 20px
  );
`;
