import { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function DataFetching() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    setPost(null);
    axios
      .get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`,
      )
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
        <input type="text" value={id} onChange={(e) => { setId(Number((e.target.value)))}} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{post?.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
