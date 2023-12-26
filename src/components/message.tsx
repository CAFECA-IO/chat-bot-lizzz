import { IMessage } from "../interfaces/message";
export interface IMessageProps {
  message: IMessage;
}

export const Message = ({ message }: IMessageProps) => {
  const color = message.sender === "user" ? "text-right" : "text-left";

  return (
    <div>
      <div className={color}>{message.content}</div>
    </div>
  );
};
