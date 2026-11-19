import {
  Title,
  Description,
  Divider,
  SubmitButton,
  FormContainer,
  TextareaStyled,
  InputStyled,
  LabelStyled,
  SlideContainer,
  Slider,
} from "./SettingsPage.styled";
import Message from "../../components/Message/Message";
import Header from "../../components/Header/Header";
import { useState, type ChangeEvent } from "react";
import Modal from "../../components/Modal/Modal";

function SettingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(2);

  const validationMsg = {
    errorDesc: "your text is too long",
    errorApiUrl: "your API url is too long or too short",
    validMsg: "OK",
    stateDisabled: "Disabled",
    stateActive: "Active",
    stateNeutral: "You have to chose a state",
  };

  const fields = {
    description: {
      isValid: true,
      text: "",
    },
    apiUrl: {
      isValid: false,
      text: "",
    },
    state: {
      isValid: false,
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

  const isFormValid =
    formConfig.apiUrl.isValid &&
    formConfig.description.isValid &&
    formConfig.state.isValid
      ? false
      : true;

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
              validationMsg[
                formConfig.description.isValid ? "validMsg" : "errorDesc"
              ]
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
              validationMsg[
                formConfig.apiUrl.isValid ? "validMsg" : "errorApiUrl"
              ]
            }
          />
        </LabelStyled>
        <SlideContainer>
          <LabelStyled>
            Choose a state:
            <Slider
              type="range"
              min="1"
              max="3"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <Message
              isValid={
                value == 2
                  ? (formConfig.state.isValid = false)
                  : (formConfig.state.isValid = true)
              }
              messageDesc={
                validationMsg[
                  formConfig.state.isValid
                    ? value == 1
                      ? "stateDisabled"
                      : "stateActive"
                    : "stateNeutral"
                ]
              }
            />
          </LabelStyled>
        </SlideContainer>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Your data"
          description={formConfig.description.text}
          apiUrl={formConfig.apiUrl.text}
          state={value == 1 ? "disabled" : "active"}
        />
        <SubmitButton
          type="submit"
          value="Submit"
          disabled={isFormValid}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </FormContainer>
    </div>
  );
}

export default SettingsPage;
