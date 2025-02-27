import axios from "axios";
import { useEffect, useState } from "react";
import FeedBlog from "./FeedBlog";

const MyBlogs = ({userId}) => {
    const [blogs, setBlogs] = useState([]);
    
    const fetchBlogs = async() => {
        try {
          const res = await axios.get(
            `http://localhost:7777/blogs/user/${userId}`,
          {withCredentials: true}
          );
          setBlogs(res.data);
      
          } catch (err) {
          console.log("Something went wrong" + err);
          }
        }
    useEffect(() => {
        fetchBlogs();
      }, []);

  return (
    <div>
        {
          (blogs.length === 0)?<p className="text-2xl font-medium">Loading...</p>
          :blogs.map((blog, index) => (
              <FeedBlog key={index} blog={blog}/>   
          ))
        }
    </div>
  )
}

export default MyBlogs