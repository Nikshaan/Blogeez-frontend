import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import back from "../assets/back.png";
import MyBlogs from "../components/MyBlogs";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const Usercard = () => {
  let { userId } = useParams();
  const user  = useSelector((store) => store.user);

  if(userId === undefined){
    userId = user._id;
  };

  const [userData, setUserData] = useState({});

  const fetchUser = async() => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/profile/view/${userId}`,
     { headers: {
        'Content-Type': 'application/json', 
      },
      credentials: 'include',
      withCredentials: true}
    );
    setUserData(res.data);

    } catch (err) {
        console.log("something went wrong" + err)
    }
  }

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <div>
        <div className="h-full md:w-[80%] xl:w-[60%] 2xl:w-[50%] m-auto flex flex-col">
        <div className="absolute top-0 right-0 left-0 w-full z-40">
            <Navbar />
        </div>
        <NavLink to="/feed">
          <img src={back} alt="back" className="absolute z-40 top-18 left-2 h-8" />
        </NavLink>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="relative w-full py-20 overflow-hidden h-full p-5 text-center text-lg">
          <div className="m-5 flex justify-center items-center">
            <img src={userData.photoUrl} alt="profile_pic" className="h-32 rounded-full border-2" />
          </div>
          <p className="text-left">First name:<span className="font-bold font-raleway"> {userData.firstName} </span></p>
          <p className="text-left">Last name:<span className="font-bold font-raleway"> {userData.lastName} </span></p>
          <p className="text-left">Age:<span className="font-bold font-raleway"> {userData.age || "-"} </span></p>
          <p className="text-left">Gender:<span className="font-bold font-raleway"> {userData.gender} </span></p>
          <p className="text-left">About:<span className="font-bold font-raleway"> {userData.about} </span></p>
        </div>
      </div>
      <MyBlogs userId = {userId} />
    </div>
    </div>
  )
}

export default Usercard