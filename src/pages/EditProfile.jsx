import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useState } from "react";
import axios from "axios";
import pfp from "../assets/userPfp.jpg"
import { useNavigate } from "react-router-dom";

const EditProfile = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || pfp);
  const [age, setAge] = useState(user.age || "-");
  const [gender, setGender] = useState(user.gender || "-");
  const [about, setAbout] = useState(user.about || "-");
  const [error, setError] = useState("");


  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        "http://localhost:7777/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate(`/profile/view/${user._id}`)
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="min-h-[100svh] flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center flex-1 pb-16">
        <div className="bg-[#f5c02f] relative w-full min-h-[70svh] overflow-hidden h-full p-5 text-center text-lg">
          <div className="mb-5 flex justify-center items-center">
            <img src={photoUrl} alt="profile_pic" className="h-32 border-2 bg-white" />
          </div>
          <p className="font-medium text-left">First name:</p>
          <input className="bg-white border-2 px-1.5" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <p className="font-medium text-left">Last name:</p>
          <input className="bg-white border-2 px-1.5" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <p className="font-medium text-left">Age:</p>
          <input className="bg-white border-2 px-1.5" type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
          <p className="font-medium text-left">Gender:</p>
          <input className="bg-white border-2 px-1.5" type="text" value={gender} onChange={(e) => setGender(e.target.value)}/>
          <p className="font-medium text-left">About:</p>
          <input className="bg-white border-2 px-1.5" type="text" value={about} onChange={(e) => setAbout(e.target.value)}/>
          <p className="font-medium text-left">Picture URL:</p>
          <input className="bg-white border-2 px-1.5" type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}/>
          <p className="text-red-500 mb-2">{error}</p>
          <button className="absolute bottom-5 right-[38%] bg-white p-0.5 px-4 border-2" onClick={() => saveProfile()}>save changes</button>
        </div>
      </div>
    </div>
  )
}
//add my blogs section.
export default EditProfile