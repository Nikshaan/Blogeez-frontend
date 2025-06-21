import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "-");
  const [gender, setGender] = useState(user.gender || "-");
  const [about, setAbout] = useState(user.about || "-");
  const [error, setError] = useState("");
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BACKEND_URL}/profile/edit`,
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { headers: {
        'Content-Type': 'application/json', 
      },
      withCredentials: true}
      );
      dispatch(addUser(res?.data?.data));
      navigate(`/profile/view/${user._id}`);

    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="h-full md:w-[80%] xl:w-[60%] 2xl:w-[50%] m-auto flex flex-col">
      <div className="absolute top-0 left-0 right-0 w-full z-40">
        <Navbar />
      </div>
      <div className="flex flex-col font-roboto gap-2 justify-center items-center flex-1 pb-16">
        <div className="relative w-full overflow-hidden h-full mt-20 p-5 text-center text-lg">
          <div className="mb-5 flex justify-center items-center">
            <img src={photoUrl} alt="profile_pic" className="h-32 border-2 bg-white rounded-full" />
          </div>
          <p className="font-medium">First name</p>
          <input className="bg-white border-2 px-1.5 mb-2 font-raleway" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <p className="font-medium">Last name</p>
          <input className="bg-white border-2 px-1.5 mb-2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <p className="font-medium">Age</p>
          <input className="bg-white border-2 px-1.5 mb-2" type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
          <p className="font-medium">Gender</p>
          <input className="bg-white border-2 px-1.5 mb-2" type="text" value={gender} onChange={(e) => setGender(e.target.value)}/>
          <p className="font-medium">About</p>
          <input className="bg-white border-2 px-1.5 mb-2" type="text" value={about} onChange={(e) => setAbout(e.target.value)}/>
          <p className="font-medium">Picture URL</p>
          <input className="bg-white border-2 px-1.5 mb-2" type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}/>
          <p className="text-red-500 mb-2">{error}</p>
          <button className="mt-5 bg-white p-0.5 px-4 border-2 cursor-pointer font-raleway" onClick={() => saveProfile()}>save changes</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile