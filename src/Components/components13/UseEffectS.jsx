import { useEffect, useState } from "react";

const UseEffectS = () => {
  const [message, setMessage] = useState("hello");
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0)


//   useEffect(() => {
//     const header = document.getElementById("header");
//     console.log(header);

//     console.log("effect");
//   }, [message, count]);


    // useEffect(() => {
    //     console.log('did Mount');
    // }, [])


    useEffect(() => {
        const myTimer = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000);
      return () => {
        clearInterval(myTimer)
      }
    }, [])

    useEffect(() => {
        console.log('timer: ', timer);
    }, [timer])
    
    
    


  return (
    <div>
      <h1
        id="header"
        className="text-center text-slate-700 text-5xl font-light uppercase my-5 border-b border-slate-500 py-2"
      >
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

      <span className="m-2">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white px-5 py-1 rounded-lg transition-colors"
      >
        inc
      </button>
    </div>
  );
};

export default UseEffectS;
