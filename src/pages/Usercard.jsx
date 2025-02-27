import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

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
      `http://localhost:7777/profile/view/${userId}`,
    {withCredentials: true}
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
        <div className="min-h-[100svh] flex flex-col">
        <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center flex-1 pb-16">
        <div className="bg-[#f5c02f] relative w-full min-h-[70svh] overflow-hidden h-full p-5 text-center text-lg">
          <div className="mb-5 flex justify-center items-center">
            <img src={userData.photoUrl} alt="profile_pic" className="h-32 border-2 bg-white" />
          </div>
          <p className="font-medium text-left">First name: {userData.firstName}</p>
          <p className="font-medium text-left">Last name: {userData.lastName}</p>
          <p className="font-medium text-left">Age: {userData.age}</p>
          <p className="font-medium text-left">Gender: {userData.gender}</p>
          <p className="font-medium text-left">About: {userData.about}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Usercard