import {IMessage} from '../interfaces/message';
export interface IMessageProps {
  message: IMessage;
}

const Message = ({message}: IMessageProps) => {
  const color = message.sender === 'user' ? 'self-end' : 'self-start';

  return (
    <div className={`${color}	my-1 w-fit rounded-lg bg-slate-200 px-2 py-1	`}>{message.content}</div>
  );
};

export default Message;
