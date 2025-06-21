import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log('Token:', localStorage.getItem('token'));
const Authentication = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async() => {
    console.log(BACKEND_URL)
    try {
      const res = await axios.post(
        `${BACKEND_URL}/signin`,
      {
        emailId,
        password,
      },
      { headers: {
        'Content-Type': 'application/json', 
      },
      credentials: 'include',
      withCredentials: true}
      );

      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err)
    }
  };

  const handleSignUp = async() => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/signup`,
        {firstName, lastName, emailId, password},
       { headers: {
        'Content-Type': 'application/json', 
      },
       credentials: 'include',
      withCredentials: true}
      );
      dispatch(addUser(res.data.data));
      return navigate("/feed");
    } catch(err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err)
    }
  };

  const manageSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="min-h-[100svh] w-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-7xl mb-2 font-bold font-raleway">BLOGeez.</p>
        <div className="bg-white flex  font-roboto flex-col w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] min-h-[55svh] mb-10 rounded-xl border-2 border-black">
            {
            (signIn === true)?<>
            <p className="text-3xl text-center font-bold p-2 mt-2 font-raleway">Create Your Account</p>

            <div className="w-full h-full flex-1 p-5 text-center justify-start items-start flex-col flex">
              <p className="text-lg font-medium text-left">First name</p>
              <input  onChange={(e) => setFirstName(e.target.value)} className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your First name: " />
              <p className="text-lg font-medium text-left">Last name</p>
              <input  onChange={(e) => setLastName(e.target.value)} className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your Last name: " />
              <p className="text-lg font-medium text-left">Email address</p>
              <input  onChange={(e) => setEmailId(e.target.value)} className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your Email: " />
              <p className="text-lg font-medium text-left">Password</p>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your Password: " />
              <p className="text-red-500 mb-2">{error}</p>
              <div className="w-full flex flex-col justify-center items-center">
                <button onClick={() => handleSignUp()} className="w-1/4 mb-2.5 bg-white py-1 rounded-full border-2 border-black font-medium cursor-pointer">Sign Up</button>
                <p className="text-nowrap">Already have an account? <span onClick={() => {manageSignIn(), setError("")} } className="underline cursor-pointer text-blue-700">Sign In</span></p>
              </div>
            </div></>

            :<>
              <p className="text-3xl text-center font-bold p-2 mt-2 font-raleway">Log into Your Account</p>

              <div className="w-full h-full flex-1 p-5 text-center">
                <p className="text-lg font-medium text-left">Email Address</p>
                <input type="text" onChange={(e) => setEmailId(e.target.value)} className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your email" />
                <p className="text-lg font-medium text-left">Password</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your password" />
                <p className="text-red-500 mb-2">{error}</p>
                <div className="w-full flex flex-col justify-center items-center">
                  <button onClick={() => handleSignin() } className="w-1/4 mb-2.5 bg-white py-1 rounded-full border-2 border-black font-medium cursor-pointer">Sign In</button>
                  <p className="text-nowrap">Don&apos;t have an account? <span onClick={() => { manageSignIn(), setError("") }} className="underline cursor-pointer text-blue-700">Sign Up</span></p>
                </div>
              </div>
            </>
            }
        </div>
      </div>
    </div>
  )
}

export default Authentication