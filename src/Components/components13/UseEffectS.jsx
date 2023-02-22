import { useState } from "react";

const UseEffectS = () => {
  const [message, setMessage] = useState("hello");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-center text-slate-700 text-5xl font-light uppercase my-5 border-b border-slate-500 py-2">
        Effect{" "}
      </h1>

      <span className="m-2">{message}</span>
      <button
        onClick={() => setMessage("hi")}
        className="border text-green-500 border-green-500 hover:bg-green-500 hover:text-white px-5 py-1 rounded-lg transition-colors"
      >
        change
      </button>

      <br />
      <br />

      <span className="m-2">0</span>
      <button className="border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white px-5 py-1 rounded-lg transition-colors">
        change
      </button>
    </div>
  );
};

export default UseEffectS;
