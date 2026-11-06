import { MessageStyled } from "./Message.styled";

type MessageProps = {
  isValid: boolean;
  messageDesc: string;
};

function Message({ isValid, messageDesc }: MessageProps) {
  return <MessageStyled $isValid={isValid}>{messageDesc}</MessageStyled>;
}

export default Message;
