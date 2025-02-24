import { useState } from "react"

const Authentication = () => {

  const [signIn, setSignIn] = useState(true);

  const manageSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="min-h-[100svh] w-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-7xl mb-5 font-bold">BLOGeez.</p>
        <div className="bg-[#f5c02f] flex flex-col w-[80%] min-h-[55svh] mb-10 rounded-xl border-2 border-black">
            {
            (signIn === true)?<>
            <p className="text-3xl text-center font-bold p-2 mt-2">Create Your Account</p>

            <div className="w-full h-full flex-1 p-5 text-center">
              <p className="text-lg font-medium text-left">Username</p>
              <input className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your username" />
              <p className="text-lg font-medium text-left">Email Address</p>
              <input className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your email" />
              <p className="text-lg font-medium text-left">Password</p>
              <input className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your password" />
              <p className="text-lg font-medium text-left">Confirm Password</p>
              <input className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Confirm your password" />
            
              <button className="w-1/2 mb-2.5 bg-white py-1 rounded-full border-2 border-black font-medium">Sign Up</button>
              <p className="text-nowrap">Already have an account? <span onClick={() => manageSignIn()} className="underline cursor-pointer text-blue-700">Sign In</span></p>
            </div></>
            :<>
              <p className="text-3xl text-center font-bold p-2 mt-2">Log into Your Account</p>

              <div className="w-full h-full flex-1 p-5 text-center">
                <p className="text-lg font-medium text-left">Email Address</p>
                <input className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your email" />
                <p className="text-lg font-medium text-left">Password</p>
                <input className="mb-5 px-1.5 py-1 w-full bg-white rounded-md border-2 border-black" placeholder="Enter your password" />

                <button className="w-1/2 mb-2.5 bg-white py-1 rounded-full border-2 border-black font-medium">Sign In</button>
                <p className="text-nowrap">Don't have an account? <span onClick={() => manageSignIn()} className="underline cursor-pointer text-blue-700">Sign Up</span></p>
              </div>
            </>
            }
        </div>
      </div>
    </div>
  )
}

export default Authentication