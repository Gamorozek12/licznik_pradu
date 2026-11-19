import {
  Overlay,
  ModalContainer,
  Header,
  Title,
  CloseButton,
  Content,
  AcceptButton,
  ButtonsContainer,
} from "./Modal.styled";
import { NavLink } from "react-router";
import type { ModalProps } from "../../types/Modal.types";
import { useDispatch } from "react-redux";
import { setSettings } from "../../pages/SettingsPage/SettingsSlice";

function Modal({
  isOpen,
  onClose,
  title,
  description,
  apiUrl,
  state,
}: ModalProps) {
  if (!isOpen) return null;
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      setSettings({
        description: description,
        apiUrl: apiUrl,
        state: state,
      }),
    );
  }

  return (
    <Overlay>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>
          Description: {description}
          <br />
          API URL: {apiUrl}
          <br />
          State: {state}
        </Content>
        <ButtonsContainer>
          <CloseButton onClick={onClose}>Close</CloseButton>
          <AcceptButton as={NavLink} to="/homepage" onClick={handleSubmit}>
            Submit
          </AcceptButton>
        </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
