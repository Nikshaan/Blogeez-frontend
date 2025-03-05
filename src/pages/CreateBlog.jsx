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
      return navigate("/feed");

    } catch(err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err)
    }
  };

  return (
    <div className="flex font-roboto flex-col min-h-[100svh]">
      <Navbar />
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] 2xl:w-[60%] m-auto my-5 p-5 flex-col justify-center">
        <p className="font-bold font-raleway">Title: </p>
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Blog Title: " className="bg-white border-2 px-1.5 w-full"/>
        <p className="font-bold font-raleway mt-4">Content: </p>
        <textarea onChange={(e) => setContent(e.target.value)} type="text" className="bg-white whitespace-break-spaces text-wrap border-2 px-1.5 w-full" rows={20} />
        <div className="w-full flex justify-end items-center">
          <button className="bg-white border-2 px-1 py-0.5 font-medium font-raleway cursor-pointer" onClick={() => handleBlogPost()}>Post Blog</button>
        </div>
        <p className="text-red-500 mb-2">{error}</p>
      </div>
    </div>
  )
}
export default CreateBlog