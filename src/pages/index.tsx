import Message from '../components/message';
import Button from '../components/button';
import { useState } from 'react';
import { IMessage } from '../interfaces/message';
import getBotResponse from '../services/chatgpt_service';

const Homepage = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([] as IMessage[]);

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

    const userMessage: IMessage = {
      id: Math.random(),
      content: userInput,
      sender: 'user',
      createdTime: Date.now(),
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);

    // InFo: step 2 - Clear user input (20240102 - Liz)
    setUserInput('');

    // InFo: step 3 - Add ... message to Message Box (20240102 - Liz)

    const pendingMessage: IMessage = {
      id: Math.random(),
      content: '...',
      sender: 'lizzz',
      createdTime: Date.now(),
    };

    setMessages(prevMessages => [...prevMessages, pendingMessage]);

    // InFo: step 4 - Send user message to backend (20240102 - Liz)

    const response: IMessage = await getBotResponse(userInput);

    // InFo: step 5 - Get response from backend (20240102 - Liz)

    const responseMessage: IMessage = {
      id: response.id,
      content: response.content,
      sender: 'lizzz',
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
    if (e.key === 'Enter') {
      handleSendMessage();
    }
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
          <div className="flex items-center justify-between gap-6 rounded-3xl border border-gray-400 px-3 py-4 ">
            <div className="flex-1">
              <input
                className="size-full outline-none focus:outline-none"
                type="text"
                value={userInput}
                placeholder="Say something..."
                onChange={handleTextInput}
                onKeyUp={handleKeyUp}
              />
            </div>
            <div className=" text-center	">
              <Button className="text-amber-500" onClick={handleSendMessage}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
