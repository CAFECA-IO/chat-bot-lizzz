import { IMessage } from '../interfaces/message';
export interface IMessageProps {
  message: IMessage;
}

const Message = ({ message }: IMessageProps) => {
  const position = message.sender === 'user' ? 'self-end' : 'self-start';

  return (
    <div className={`${position}	my-1 w-fit max-w-[90%] rounded-lg bg-zinc-200 px-2 py-1`}>
      {message.content}
    </div>
  );
};

export default Message;
