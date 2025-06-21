import axios from "axios";
import { useEffect, useState } from "react";
import FeedBlog from "./FeedBlog";

const MyBlogs = ({userId}) => {
    const [blogs, setBlogs] = useState([]);
    
    const fetchBlogs = async() => {
        try {
          const res = await axios.get(
            `https://blogeez-backend-1.onrender.com/blogs/user/${userId}`,
          { headers: {
        'Content-Type': 'application/json',  
      },
      withCredentials: true}
          );
          setBlogs(res.data);
      
          } catch (err) {
          console.log("Something went wrong" + err);
          }
        };

    useEffect(() => {
        fetchBlogs();
      }, []);

  return (
    <div className="my-5 m-2">
        <p className="font-medium text-xl font-raleway">My Blogs:</p>
        {
          (blogs.length === 0)?<p className="text-xl mt-1 font-light">Feels empty! :(</p>
          :blogs.map((blog, index) => (
              <FeedBlog key={index} blog={blog}/>   
          ))
        }
    </div>
  )
}

export default MyBlogs