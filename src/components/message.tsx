import {IMessage} from '../interfaces/message';
export interface IMessageProps {
  message: IMessage;
}

export const Message = ({message}: IMessageProps) => {
  const color = message.sender === 'user' ? 'self-end' : 'self-start';

  return <div className={`${color}	w-fit rounded-lg	 border px-2 py-1	`}>{message.content}</div>;
};
