import { useEffect, useState } from "react";

const ApiUseEffect = () => {
  const [search, setSearch] = useState("");
  const [dataDom, setDataDom] = useState([]);

  const getData = async (search) => {
    try {
      const response = await fetch(
        "https://63f2206c4f17278c9a20b961.mockapi.io/XeaulRhbieQEoiRMvQb010Gj6txxiC/1/WaOCjSyQfLisj2OInHhlPmnx016dpX"
      );

      const data = await response.json();
      // console.log(data);

      const filterData = data.filter((o) => o.cityName.startsWith(search));

      console.log(filterData);

      setDataDom(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData(search);
  }, [search]);

  return (
    <div className="">
      <h1 className="text-center text-4xl text-blue-500">
        use UseEffect in API
      </h1>
      <input
        onChange={handleSearch}
        className="border border-slate-500 mx-20 my-10 p-5"
        type="search"
      />

      <div className="container mx-auto p-10">
        {dataDom.map((o) => (
          <div>
            <p>{o.cityName}</p>
            <img className="w-48" src={o.image} alt={o.cityName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiUseEffect;
