import { IMessage } from "../interfaces/message";
export interface IMessageProps {
  message: IMessage;
}

export const Message = ({ message }: IMessageProps) => {
  const color = message.sender === "user" ? "text-red-600" : "text-blue-600";

  return (
    <div>
      <div className={color}>{message.content}</div>
    </div>
  );
};
