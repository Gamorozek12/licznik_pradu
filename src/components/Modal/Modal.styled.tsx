import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 15px;
`;

export const ModalContainer = styled.div`
  background: #d3e7ff;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  color: #333333;
`;

export const CloseButton = styled.button`
  background-color: #c40d0d;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px 20px;
  cursor: pointer;
  color: black;
  margin: 5px 20px;
  border: none;

  &:hover {
    background-color: #c13e3e;
  }
`;

export const AcceptButton = styled.button`
  background-color: #13ad2c;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px 20px;
  padding-top: 8px;
  cursor: pointer;
  color: black;
  margin: 5px 20px;
  text-decoration: none;

  &:hover {
    background-color: #387642;
  }
`;

export const Content = styled.div`
  font-size: 18px;
  color: #444444;
  margin: 10px;
  white-space: pre-line;
`;
