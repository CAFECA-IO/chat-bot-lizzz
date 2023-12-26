import { IMessage } from "../interfaces/message";
export interface IMessageProps {
  message: IMessage;
}

export const Message = ({ message }: IMessageProps) => {
  const color = message.sender === "user" ? "self-end" : "self-start";

  return (
    <div className="flex flex-col">
      <div className={`${color}	border rounded-lg	 w-fit px-2 py-1	`}>
        {message.content}
      </div>
      {/* <div className={color}>{message.content}</div> */}
    </div>
  );
};
