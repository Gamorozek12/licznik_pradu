import {
  Title,
  Description,
  Divider,
  Select,
  SubmitButton,
  FormContainer,
  TextareaStyled,
  InputStyled,
  LabelStyled,
} from "./SettingsPage.styled";
import Message from "./Message";
import Header from "../../components/Header";
import { useState, type ChangeEvent } from "react";

function SettingsPage() {
  const fields = {
    description: {
      isValid: false,
      text: "",
      errorMsg: "your text is too long",
      validMsg: "OK",
    },
    apiUrl: {
      isValid: false,
      text: "",
      errorMsg: "your API url is too long or too short",
      validMsg: "OK",
    },
  };

  const [formConfig, setFormConfig] = useState(fields);

  const lengthValidator = (
    maxLenght: number,
    value: number,
    required?: boolean,
  ): boolean => {
    if (required) {
      if (value > 0 && value <= maxLenght) {
        return true;
      }
      return false;
    } else {
      if (value <= maxLenght) {
        return true;
      }
      return false;
    }
  };

  return (
    <div>
      <Header name="Settings" />
      <FormContainer>
        <Title>Welcome to Electricity Calculator</Title>
        <Divider />
        <Description>
          This is your ultimate tool for understanding and managing household or
          office power consumption. In a time when energy prices are constantly
          rising, knowing how much electricity you use is more important than
          ever. Our intuitive web application allows you to easily calculate
          energy costs based on wattage, usage time, and local electricity
          rates.
        </Description>
        <LabelStyled>
          Description:
          <TextareaStyled
            placeholder="Write your description here..."
            maxLength={300}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              const value = e.target.value;

              setFormConfig({
                ...formConfig,
                description: {
                  ...formConfig.description,
                  text: value,
                  isValid: lengthValidator(300, value.length, false),
                },
              });
            }}
          />
          <Message
            isValid={formConfig.description.isValid}
            messageDesc={
              formConfig.description.isValid
                ? formConfig.description.validMsg
                : formConfig.description.errorMsg
            }
          />
        </LabelStyled>
        <LabelStyled>
          Address API:
          <InputStyled
            placeholder="Write your API url..."
            maxLength={100}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;

              setFormConfig({
                ...formConfig,
                apiUrl: {
                  ...formConfig.apiUrl,
                  text: value,
                  isValid: lengthValidator(100, value.length, true),
                },
              });
            }}
          />
          <Message
            isValid={formConfig.apiUrl.isValid}
            messageDesc={
              formConfig.apiUrl.isValid
                ? formConfig.apiUrl.validMsg
                : formConfig.apiUrl.errorMsg
            }
          />
        </LabelStyled>
        <Select>
          <option>Active</option>
          <option>Disabled</option>
        </Select>

        <SubmitButton
          type="submit"
          value="Submit"
          disabled={
            formConfig.apiUrl.isValid && formConfig.description.isValid
              ? false
              : true
          }
        />
      </FormContainer>
    </div>
  );
}

export default SettingsPage;
