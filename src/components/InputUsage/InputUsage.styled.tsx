import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
  background: #415257;
  border: 2px solid #292820;
  border-radius: 5px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 24px;
  background: #eee8d5;
  border: 2px solid #292820;
`;

export const InputGroup = styled.div`
  display: flex;
  flex: 1;
  min-width: 180px;
  flex-direction: column;
  gap: 9px;
`;

export const InputLabel = styled.label`
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  background: #faf7ed;
  color: #292820;

  border: 2px solid #292820;
  border-radius: 0;

  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background: #faf7ed;
  color: #292820;
  border: 2px solid #292820;
  border-radius: 0;
  font-size: 14px;
  font-weight: bold;
`;

export const UpdateButton = styled.button`
  align-self: flex-end;
  padding: 13px 25px;
  background: #d76b35;
  color: #fff8e9;
  border: 2px solid #292820;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
