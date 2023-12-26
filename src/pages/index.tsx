import { Message } from "@/components/message";

const Homepage = () => {
  return (
    <main>
      Container
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        Message Box
        <div>
          <Message />
        </div>
      </div>
      <div>
        Input Box
        <div>
          <input type="text" placeholder="Say something..." />
        </div>
        <div>
          <button>Send</button>
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
