import { useEffect, useState } from "react";
import FeedBlog from "../components/FeedBlog"
import Navbar from "../components/Navbar"
import axios from "axios";
import { useSelector } from "react-redux";

const Feed = () => {
  const search = useSelector((store) => store.blog); 
  const [feed, setFeed] = useState([]);
  const [filteredFeed, setFilteredFeed] = useState([]);

  const getFeed = async() => {
    try {
      const res = await axios.get("http://localhost:7777/feed", {
        withCredentials: true,
      });
      setFeed(res?.data?.data);
      setFilteredFeed(res?.data?.data);
      
    } catch (err) {
      console.log("Something went wrong" + err);
    }
  }
  
  const applyFilter = () => {
    let blogsCopy = feed.slice();
    blogsCopy = blogsCopy.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredFeed(blogsCopy)
  };

  useEffect(() => {
    applyFilter();
  }, [search]);

  useEffect(() => {
    getFeed();
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-[90%] relative flex flex-col items-center my-10 gap-2">
        {
          (filteredFeed.length === 0)?<p className="text-2xl font-medium">Loading...</p>
          :filteredFeed.map((blog, index) => (
              <FeedBlog key={index} blog={blog}/>   
          ))
        }
      </div>
    </div>
  )
}

export default Feed