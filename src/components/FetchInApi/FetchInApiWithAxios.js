import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchInApiWithAxios = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);

      setState(res.data);
    } catch (error) {
      console.log("MyError:", error.response.status);
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

export default FetchInApiWithAxios;
