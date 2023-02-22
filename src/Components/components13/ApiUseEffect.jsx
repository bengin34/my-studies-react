import { useState } from "react";

const ApiUseEffect = () => {

    const [search, setSearch] = useState('')

  const getData = async () => {
    try {
      const response = await fetch(
        "https://63f2206c4f17278c9a20b961.mockapi.io/XeaulRhbieQEoiRMvQb010Gj6txxiC/1/WaOCjSyQfLisj2OInHhlPmnx016dpX"
      );

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  const handleSearch = () => {

  }

  return (
    <div className="">
      <h1 className="text-center text-4xl text-blue-500">
        use UseEffect in API
      </h1>
        <input onChange={handleSearch} className="border border-slate-500" type="search" />
    </div>
  );
};

export default ApiUseEffect;
