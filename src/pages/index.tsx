import { Message } from "../components/message";
import { useState } from "react";

const dummyMessages = [
  {
    id: 100,
    content: "Hello, I am a chat bot. My name is Lizzz.",
    sender: "lizzz",
    createdTime: 723648168742,
  },
  { id: 101, content: "Hello", sender: "user", createdTime: 723648168743 },
  {
    id: 102,
    content: "Hello, how are you?",
    sender: "lizzz",
    createdTime: 723648168744,
  },
];

const Homepage = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState(dummyMessages);

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
  };

  const handleSendMessage = () => {
    dummyMessages.push({
      id: Math.random(),
      content: userInput,
      sender: "user",
      createdTime: Date.now(),
    });
    setMessages(dummyMessages);
    setUserInput("");
    console.log({ messages });
  };

  return (
    <main className="flex min-h-screen items-center justify-center border-2 p-10">
      <div className="w-full border-2">
        Container
        <div className="border-2">
          Message Box
          <div className="border-2">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>
        <div className="flex border-2 ">
          {/* Input Box */}
          <div className="border-2">
            <input
              type="text"
              value={userInput}
              placeholder="Say something..."
              onChange={handleTextInput}
            />
          </div>
          <div>
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
