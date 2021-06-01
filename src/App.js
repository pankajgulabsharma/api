import PostInApiWithAxios from "./components/PostInApi/PostInApiWithAxios";
import PostInApiWithfetch from "./components/PostInApi/PostInApiWithfetch";
import FetchApiWithFetch from "./components/FetchInApi/FetchApiWithFetch";
import FetchInApiWithAxios from "./components/FetchInApi/FetchInApiWithAxios";

function App() {
  return (
    <div className="App">
      <PostInApiWithAxios />
      <PostInApiWithfetch />
      <FetchApiWithFetch />
      <FetchInApiWithAxios />
    </div>
  );
}

export default App;
