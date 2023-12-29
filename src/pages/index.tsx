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
  {
    id: 101,
    content: 'Hello, if I do not commit package.json...',
    sender: 'user',
    createdTime: 723648168743,
  },
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
              />
            </div>
            <div className=" text-center	">
              <Button cx="text-amber-500" onClick={handleSendMessage}>
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
