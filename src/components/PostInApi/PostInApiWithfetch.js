import React, { useState, useEffect } from "react";
import axios from "axios";

const PostInApiWithfetch = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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

export default PostInApiWithfetch;
