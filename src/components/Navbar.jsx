import userPfp from "../assets/userPfp.jpg";
import add from "../assets/add.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#f5c02f] flex justify-center items-center p-2">
        <p className="text-2xl font-bold">BLOGeez.</p>
        <input className="bg-white mx-2 rounded-xl px-2 border-2 mt-1" placeholder="Search for a blog"/>
        <img src={add} alt="newPost" className="h-8 mr-1" />
        <img src={userPfp} alt="profile" className="rounded-full h-8 border-2" />
    </div>
  )
}

export default Navbar