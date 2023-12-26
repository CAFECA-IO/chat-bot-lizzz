import { Message } from "../components/message";
import { useState } from "react";

const dummyMessages = [
  { id: 123, content: "Hello", sender: "user", createdTime: 723648168741 },
  { id: 124, content: "Hello too", sender: "lizzz", createdTime: 723648168742 },
];

const Homepage = () => {
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState(dummyMessages);

  const handleTextInput = (e) => {
    const value = e.target.value;
    setTextInput(value);
  };

  const handleSendMessage = () => {
    dummyMessages.push({
      id: Math.random(),
      content: textInput,
      sender: "user",
      createdTime: Date.now(),
    });
    setMessages(dummyMessages);
    // ToDo: fix this bug that input message not showing (20231226 - Liz)
  };

  return (
    <main>
      Container
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        Message Box
        <div>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      <div>
        Input Box
        <div>
          <input
            type="text"
            value={textInput}
            placeholder="Say something..."
            onChange={handleTextInput}
          />
        </div>
        <div>
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <div className="text-white bg-blue-500 p-4">
        This is a blue box with white text.
      </div>
      <div className="text-blue-500 bg-gray-200 p-4">
        This is a box with blue text on a gray background.
      </div>
    </main>
  );
};

export default Homepage;
