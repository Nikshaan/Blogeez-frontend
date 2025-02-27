import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CreateBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleBlogPost = async() => {
    try {
      await axios.post(
        "http://localhost:7777/blog/create",
        {title, content},
        { withCredentials: true}
      );
      
      return navigate("/");
    } catch(err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err)
    }
  };

  return (
    <div className="flex flex-col min-h-[100svh]">
      <Navbar />
      <div className="bg-[#f5c02f] my-5 p-5 flex-col justify-center flex-1">
        <p className="font-medium">Title: </p>
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Blog Title: " className="bg-white border-2 px-1.5 w-full"/>
        <p className="font-medium">Content: </p>
        <textarea onChange={(e) => setContent(e.target.value)} type="text" className="bg-white border-2 px-1.5 w-full" rows={20}/>
        <div className="w-full flex justify-end items-center">
          <button className=" bg-white border-2 px-1 py-0.5 font-medium" onClick={() => handleBlogPost()}>Post Blog</button>
        </div>
        <p className="text-red-500 mb-2">{error}</p>
      </div>
    </div>
  )
}
export default CreateBlog