import styled from "styled-components";

export const FormContainer = styled.div`
  display: block;
  padding: 24px;
  background: #252933;
  border-radius: 12px;
  box-sizing: border-box;
`;

export const Title = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 15px;
`;

export const Description = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: #b2b6c2;
  text-align: justify;
  padding: 0 10px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #3a3f4b;
  margin: 8px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  color: #222121;
  background-color: #ccc9c9;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 5px 0 20px 0;
  width: 100%;
`;

export const SubmitButton = styled.input<{ disabled?: boolean }>`
  padding: 10px 16px;
  font-size: 14px;
  color: #000000;
  background-color: ${({ disabled }) => (disabled ? "#b36969" : "#6d8d5a")};
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`;

export const TextareaStyled = styled.textarea`
  padding: 10px;
  font-size: 14px;
  color: #222121;
  background-color: #ccc9c9;
  border: 1px solid #222121;
  border-radius: 6px;
  margin: 10px 0 5px 0;
  width: 100%;
  box-sizing: border-box;
`;

export const InputStyled = styled.input`
  padding: 10px;
  font-size: 14px;
  color: #222121;
  background-color: #ccc9c9;
  border: 1px solid #222121;
  border-radius: 6px;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
`;

export const LabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
  color: #222121;
  background-color: #ccc9c9;
  border: none;
  border-radius: 6px;
  margin: 10px 0 5px 0;
  width: 100%;
  box-sizing: border-box;
`;
