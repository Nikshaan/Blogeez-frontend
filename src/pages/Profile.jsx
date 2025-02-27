import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { useState } from "react";
import Usercard from "./Usercard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyBlogs from "../components/MyBlogs";

const Profile = () => {
  const user  = useSelector((store) => store.user);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  console.log(user)
  const handleSignOut = async() => {
    try {
       await axios.post(
        `http://localhost:7777/signout`, {},
      {withCredentials: true}
      );
      navigate("/authentication")
      } catch (err) {
      console.log("Something went wrong" + err);
      }
    }
  
  
  return (
    <>
    <button className="border-2 absolute top-20 right-2 px-2" onClick={() => setEdit(!edit)}>edit</button>
    {
    (user && edit === true)?(
      <div>
        <EditProfile user={user} />
      </div>
    ):<Usercard />
  }
  <MyBlogs userId = {user._id}/>
  <button className="border-2 bg-white absolute bottom-100 right-2 px-2" onClick={() => handleSignOut()}>signOut</button>
    </>
  );
};
export default Profile;