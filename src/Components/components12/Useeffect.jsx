import { useEffect, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);

  // ! ComponentDitMount
  // useEffect(() => {
  //   console.log("Mounted");
  //   setTimeout(() => {
  //     // alert("data fetch");
  //   }, 3000);
  // }, []);
  // console.log("rendered");
  // ! ComponentDitMount + ComponentdDidUpdate
  // useEffect(() => {
  //   console.log("Mounted");
  //   setTimeout(() => {
  //     // alert("data fetch");
  //   }, 3000);
  // }, [count]);
  // console.log("rendered");

  // ! ComponentDitMount + ComponentWillUnmount
  // const fetchData = () => {
  //   console.log("Data Fetched");
  // };
  // useEffect(() => {
  //   const timer = setInterval(fetchData, 1000);
  //   console.log("Mounted");

  //   return () => {
  //     clearInterval(timer);
  //     console.log("Unmounted");
  //   };
  // }, []);

  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger">UseEffect</h1>
      <h3>count:{count}</h3>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        Inc
      </button>
    </div>
  );
};

export default Useeffect;
