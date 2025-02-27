import userPfp from "../assets/userPfp.jpg";
import add from "../assets/add.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../utils/blogSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleInput = (search) => {
    dispatch(addBlog(search));
  }

  return (
    <div className="w-full h-16 bg-[#f5c02f] flex justify-center items-center p-2">
        <NavLink to="/">
          <p className="text-2xl font-bold">BLOGeez.</p>
        </NavLink>
        <input onChange={(e) => handleInput(e.target.value)} className="bg-white mx-2 rounded-xl px-2 border-2 mt-1" placeholder="Search for a blog"/>
        <NavLink to="/create">
          <img src={add} alt="newPost" className="h-8 mr-1" />
        </NavLink>
        <NavLink to="/profile">
          <img src={userPfp} alt="profile" className="rounded-full h-8 border-2" />
        </NavLink>
    </div>
  )
}

export default Navbar