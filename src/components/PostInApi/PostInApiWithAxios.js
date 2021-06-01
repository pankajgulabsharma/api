import React, { useState, useEffect } from "react";
import axios from "axios";

const PostInApiWithAxios = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { userId: 12, title: "my title", body: "Hi how r u bro?" }
      );
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
      {/* <ul>
        {state.map((currData) => (
          <li key={currData.id}>{currData.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default PostInApiWithAxios;
