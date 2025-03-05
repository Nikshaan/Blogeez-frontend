import add from "../assets/add.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../utils/blogSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user  = useSelector((store) => store.user);
  const handleInput = (search) => {
    dispatch(addBlog(search));
  }

  return (
    <div className="w-full h-16 flex justify-between items-center p-2">
        <NavLink to="/feed">
          <p className="text-2xl md:text-3xl font-bold font-raleway">BLOGeez.</p>
        </NavLink>
        <input onChange={(e) => handleInput(e.target.value)} className="bg-white font-roboto w-1/2 mx-2 xl:w-1/3 2xl:w rounded-xl px-2 py-0.2 xl:py-0.5 border-2 mt-1" placeholder="Search for a blog"/>
        <div className="flex justify-center items-center">
        <p className="font-raleway font-bold px-2 hidden md:block">Hey {user.firstName}</p>
        <NavLink to="/create">
          <img src={add} alt="newPost" className="h-8 xl:h-9 mr-1" />
        </NavLink>
        <NavLink to="/profile">
          <img src={user.photoUrl} alt="profile" className="rounded-full h-8 xl:h-9 border-2" />
        </NavLink>
        </div>
    </div>
  )
}

export default Navbar