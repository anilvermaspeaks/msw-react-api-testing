import {useEffect, useState} from "react";
import axios from "axios";
import Post from "../../components/post/Post";

const Posts = () => {
  useEffect(() => getAllPosts(), []);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const getAllPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  return (
    <div>
      {error && <div>Error Occured!</div>}
      {!error && (
        <div className="row" data-testid="posts">
          {posts.length > 0 &&
            posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
};

export default Posts;
