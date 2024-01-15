import Message from '../components/message';
import Button from '../components/button';
import { useEffect, useState } from 'react';
import { IMessage, ILiteMessage } from '../interfaces/message';
import getBotResponse from '../services/chatgpt_service';

const Homepage = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([] as IMessage[]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(userInput.trim() === '');
  }, [userInput]);

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
  };

  const handleSendMessage = async () => {
    /**
     * ToDo: Implement handleSendMessage (20240102 - Liz)
     * 1. Add user message to Message Box
     * 2. Clear user input
     * 3. Add ... message to Message Box
     * 4. Send user message to backend
     * 5. Get response from backend
     * 6. Update response to Message Box
     * (Optional) 7. Scroll to bottom of Message Box (if needed)
     */

    // InFo: step 1 - Add user message to Message Box (20240102 - Liz)
    const randomNum1 = Math.random();
    const userMessage: IMessage = {
      id: randomNum1,
      content: userInput,
      role: 'user',
      createdTime: Date.now(),
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);

    // InFo: step 2 - Clear user input (20240102 - Liz)
    setUserInput('');

    // InFo: step 3 - Add ... message to Message Box (20240102 - Liz)
    const randomNum2 = Math.random();
    const pendingMessage: IMessage = {
      id: randomNum2,
      content: '...',
      role: 'assistant',
      createdTime: Date.now(),
    };

    const temMessages: IMessage[] = [...messages, userMessage];

    const liteMessages: ILiteMessage[] = temMessages.map(message => ({
      role: message.role,
      content: message.content,
    }));

    setMessages(prevMessages => [...prevMessages, pendingMessage]);

    // InFo: step 4 - Send user message to backend (20240102 - Liz)

    const response: IMessage = await getBotResponse(liteMessages);

    // InFo: step 5 - Get response from backend (20240102 - Liz)

    const responseMessage: IMessage = {
      id: response.id,
      content: response.content,
      role: 'assistant',
      createdTime: response.createdTime,
    };

    // InFo: step 6 - Update response to Message Box (20240102 - Liz)

    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages];
      updatedMessages.pop();
      updatedMessages.push(responseMessage);
      return updatedMessages;
    });
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && !isButtonDisabled && handleSendMessage();
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black	">
      {/* Container */}
      <div className="flex min-h-128 w-full max-w-screen-lg flex-col overflow-hidden rounded-2xl bg-white">
        {/* Container Header */}
        <div className="flex justify-between bg-sky-50 p-4">
          <div className="flex items-center gap-4 	 ">
            <h1 className="mr-2 text-2xl font-bold	">ChatBot</h1>
            <p className="font-semibold text-orange-800		">Talk to AI chatbot about anything</p>
          </div>
          <Button onClick={handleClearMessages}>Clear</Button>
        </div>

        {/* Message Box */}
        <div className="flex max-h-96 grow flex-col overflow-auto px-6 pb-16 pt-8">
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </div>

        {/* Input Box */}
        <div className="px-6 pb-8 ">
          <div className="flex items-center justify-between gap-6 rounded-3xl border border-gray-400 px-4 py-1">
            <div className="flex-auto	">
              <input
                className="w-full leading-loose outline-none focus:outline-none"
                type="text"
                value={userInput}
                placeholder="Say something..."
                onChange={handleTextInput}
                onKeyUp={handleKeyUp}
              />
            </div>
            <Button className="p-2" onClick={handleSendMessage} disabled={isButtonDisabled}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                <path
                  fill="#ff8f0f"
                  d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
