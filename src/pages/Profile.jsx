import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { useState } from "react";
import Usercard from "./Usercard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Profile = () => {
  const user  = useSelector((store) => store.user);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleSignOut = async() => {
    try {
       await axios.post(
        `http://localhost:7777/signout`, {},
      {withCredentials: true}
      );
      dispatch(removeUser());
      return navigate("/authentication");

      } catch (err) {
      console.log("Something went wrong" + err);
      }
    }
  
  return (
    <div className="font-roboto">
    <button className="border-2 bg-white  absolute top-26 right-4 z-40 px-2 cursor-pointer font-medium" onClick={() => handleSignOut()}>Sign Out</button>
    <button className="border-2 absolute bg-white z-40 top-18 right-4 px-2 cursor-pointer font-medium" onClick={() => setEdit(!edit)}>Edit</button>
    {
    (user && edit === true)?(
      <div>
        <EditProfile user={user} />
      </div>
    ):<Usercard />
  }
    </div>
  );
};
export default Profile;