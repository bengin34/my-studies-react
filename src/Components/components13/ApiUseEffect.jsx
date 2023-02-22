import { useEffect, useState } from "react";

const ApiUseEffect = () => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

  const getData = async (search) => {
    try {
      const response = await fetch(
        "https://63f2206c4f17278c9a20b961.mockapi.io/XeaulRhbieQEoiRMvQb010Gj6txxiC/1/WaOCjSyQfLisj2OInHhlPmnx016dpX"
      );

      const data = await response.json();
      // console.log(data);

      const x = data.filter((o) => o.cityName.startsWith(search))

      console.log(x);

      setData(x)

    } catch (error) {
      console.log(error);
    }
  };

  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getData(search);
    
  },[search])
  
  

  return (
    <div className="">
      <h1 className="text-center text-4xl text-blue-500">
        use UseEffect in API
      </h1>
        <input onChange={handleSearch} className="border border-slate-500 mx-20 my-10 p-5" type="search" />

        {
          
        }
    </div>
  );
};

export default ApiUseEffect;
