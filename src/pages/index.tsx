import Message from '../components/message';
import Button from '../components/button';
import {useState} from 'react';

const dummyMessages = [
  {
    id: 100,
    content: 'Hello, I am a chat bot. My name is Lizzz.',
    sender: 'lizzz',
    createdTime: 723648168742,
  },
  {id: 101, content: 'Hello', sender: 'user', createdTime: 723648168743},
  {
    id: 102,
    content: 'Hello, how are you?',
    sender: 'lizzz',
    createdTime: 723648168744,
  },
];

const Homepage = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState(dummyMessages);

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
  };

  const handleSendMessage = () => {
    dummyMessages.push({
      id: Math.random(),
      content: userInput,
      sender: 'user',
      createdTime: Date.now(),
    });
    setMessages(dummyMessages);
    setUserInput('');
  };

  return (
    <main className="flex min-h-screen items-center justify-center border-2 border-red-600">
      {/* Container */}
      <div className="w-full max-w-screen-sm border-2	">
        <div className="flex items-end	">
          <h1 className="mr-2 text-2xl">ChatBot</h1>
          <p>Talk to AI chatbot about anything</p>
        </div>

        {/* Message Box */}
        <div className="border-2">
          <div className="flex flex-col border-2 p-2">
            {messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>

        {/* Input Box */}
        <div className="flex border-2	">
          <div className="w-5/6">
            <input
              className="w-full"
              type="text"
              value={userInput}
              placeholder="Say something..."
              onChange={handleTextInput}
            />
          </div>
          <div className="w-1/6 text-center	">
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
