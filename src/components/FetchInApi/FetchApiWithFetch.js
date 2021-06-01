import React, { useState, useEffect } from "react";

const FetchApiWithFetch = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      const data = await res.json();
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {state.map((currData) => (
          <li key={currData.id}>{currData.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApiWithFetch;
