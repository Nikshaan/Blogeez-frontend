import { NavLink, useNavigate, useParams } from "react-router-dom";
import back from "../assets/back.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
      `http://localhost:7777/blog/view/${blogId}`,
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
      await axios.delete(`http://localhost:7777/blog/delete/${blogId}`);
      navigate("/");
    } catch (err) {
      console.log("something went wrong" + err);
    }
  }

  const handleEdit = async() => {
    try {
      await axios.patch(`http://localhost:7777/blog/edit/${blogId}`,
      {
        title,
        content,
      },
      {withCredentials: true});
      navigate("/");
    } catch (err) {
      console.log("something went wrong " + err);
    }
  }

  useEffect(() => {
    fetchBlog()
  }, []);

  return (
    <div className="flex flex-col min-h-[100svh] w-full">
      <Navbar />
      <NavLink to="/">
        <img src={back} alt="back" className="absolute top-18 left-1 h-8" />
      </NavLink>
      <div className="w-full flex-1 mt-16 pb-10">
          <div className="m-">
            <p className="text-2xl font-medium ml-4">{blogData.title}</p>
            <NavLink to={`/profile/view/${blogData.userId}`}>
              <p className="font-light -mt-1 mb-5 ml-4">{blogData.firstName + " " + blogData.lastName}</p>
            </NavLink>
            <p className="p-4">{blogData.content}</p>
          </div>
      </div>
      {
        updateBlog && <div>
            <p onClick={() => handleDelete()}>delete</p>
            <p onClick={() => setEditBlog(!editBlog)}>edit</p>
          </div>
      }
      {
        editBlog && <div className="bg-red-200 flex flex-col gap-2 p-2">
              <textarea type="text" value={title} onChange={(e) => setTitle(e.target.value) } />
              <textarea type="text" value={content} onChange={(e) => setContent(e.target.value) } />
                <button className="border-2 px-2" onClick={() => handleEdit()}>save changes</button>
          </div>
      }
    </div>
  )
}

export default Blog