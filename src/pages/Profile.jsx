import Navbar from "../components/Navbar";
import userPfp from "../assets/userPfp.jpg";
const Profile = () => {
  return (
    <div className="min-h-[100svh] flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center m-auto flex-1 pb-16">
        <div className="bg-[#f5c02f] rounded-xl border-2 relative min-h-[55svh] px-20 py-5 text-center text-lg">
          <div className="mb-5">
            <img src={userPfp} alt="profile_pic" className="h-32 border-2 rounded-full" />
          </div>
          <p className="font-medium mb-2 text-xl">username</p>
          <p className="text-left mb-1">age: 19</p>
          <p className="text-left mb-1">gender: male</p>
          <p className="text-left">about me</p>
          <button className="absolute bottom-5 right-[38%] bg-white p-0.5 px-4 border-2">edit</button>
        </div>
      </div>
    </div>
  )
}
//add my blogs section.
export default Profile