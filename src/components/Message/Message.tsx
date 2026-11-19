import { MessageStyled } from "./Message.styled";
import type { MessageProps } from "../../types/Message.types";

function Message({ isValid, messageDesc }: MessageProps) {
  return <MessageStyled $isValid={isValid}>{messageDesc}</MessageStyled>;
}

export default Message;
