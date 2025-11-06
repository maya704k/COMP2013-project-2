import { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const sortedData = data.slice().sort((a, b) => b.id - a.id);
    console.log(sortedData);
    setData(sortedData);
    setLoading(false);
  };

  const handleOnChange = (e) => {
    setNewPost((prevPost) => {
      return {
        ...prevPost,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddToList = (e) => {
    e.preventDefault();
    if (newPost.title === "") {
      alert("Add a title!");
    } else if (newPost.body === "") {
      alert("Add a body!");
    } else {
      setData((prevList) => {
        return [newPost, ...prevList];
      });
      console.log(data);
      setNewPost({
        title: "",
        body: "",
      });
      console.log(data);
    }
  };

  return (
    <div>
      <h1>Fake Api App</h1>
      {loading && <h2>loading...</h2>}
      <PostForm
        newPost={newPost}
        handleOnChange={handleOnChange}
        handleAddToList={handleAddToList}
      />
      <PostsContainer data={data} />
    </div>
  );
}
