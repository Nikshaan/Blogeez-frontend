import { NavLink, useNavigate, useParams } from "react-router-dom";
import back from "../assets/back.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Blog = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user);
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({});
  const [updateBlog, setUpdateBlog] = useState(false);
  const [editBlog, setEditBlog] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchBlog = async() => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/blog/view/${blogId}`,
    {withCredentials: true}
    );
    setBlogData(res.data);
    setTitle(res.data.title);
    setContent(res.data.content);
    if(res.data.userId === loggedInUser._id){
      setUpdateBlog(true);
    }

    } catch (err) {
    console.log("Something went wrong" + err);
    }
  }
  
  const handleDelete = async() => {
    try {
      await axios.delete(`${BACKEND_URL}/blog/delete/${blogId}`);
      return navigate("/feed");
    } catch (err) {
      console.log("something went wrong" + err);
    }
  }

  const handleEdit = async() => {
    try {
      await axios.patch(`${BACKEND_URL}/blog/edit/${blogId}`,
      {
        title,
        content,
      },
      { headers: {
        'Content-Type': 'application/json', 
      },
      withCredentials: true});
      return navigate("/feed");
    } catch (err) {
      console.log("something went wrong " + err);
    }
  }

  useEffect(() => {
    fetchBlog()
  }, []);

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="flex flex-col min-h-[100svh] w-full mb-10">
      <Navbar />
      <NavLink to="/feed">
        <img src={back} alt="back" className="absolute top-18 left-2 h-8" />
      </NavLink>
      <div className="w-full font-roboto sm:w-[90%] md:w-[85%] lg:w-[80%] 2xl:w-[60%] m-auto flex-1 mt-12 pb-10 px-2">
          <div className="m-">
            <p className="text-2xl mx-4 mb-2 whitespace-pre-wrap font-raleway font-bold">{blogData.title}</p>
            <NavLink to={`/profile/view/${blogData.userId}`}>
              <p className="-mt-1 mx-4 whitespace-pre-wrap text-right px-2 font-raleway font-light cursor-pointer underline underline-offset-2">{blogData.firstName + " " + blogData.lastName}</p>
            </NavLink>
            <p className="p-4 whitespace-pre-wrap">{blogData.content}</p>
          </div>
      </div>
      {
        updateBlog && <div className="w-full flex justify-between sm:w-[90%] md:w-[85%] lg:w-[80%] 2xl:w-[60%] sm:m-auto mb-2">
            <button className="m-1 border-2 px-2 cursor-pointer font-raleway font-bold" onClick={() => handleDelete()}>delete</button>
            <button className="m-1 border-2 px-2 cursor-pointer font-raleway font-bold" onClick={() => setEditBlog(!editBlog)}>edit</button>
          </div>
      }
      {
        editBlog && <div className="border-2 h-full flex flex-col gap-2 p-2 mb-5 sm:w-[90%] md:w-[85%] lg:w-[80%] m-1 2xl:w-[60%] sm:m-auto">
              <textarea className="border-2 p-1" type="text" value={title} onChange={(e) => setTitle(e.target.value) } />
              <textarea className="border-2 p-1" rows={40} type="text" value={content} onChange={(e) => setContent(e.target.value) } />
                <button className="border-2 px-2 cursor-pointer font-raleway font-bold" onClick={() => handleEdit()}>save changes</button>
          </div>
      }
    </div>
  )
}

export default Blog