import { Route, Routes } from "react-router-dom"
import Feed from "./pages/Feed"
import Profile from "./pages/Profile"
import Authentication from "./pages/Authentication"
import Blog from "./pages/Blog"
import CreateBlog from "./pages/CreateBlog"
import Usercard from "./pages/Usercard"
import { useSelector } from "react-redux"
console.log('Token:', localStorage.getItem('token'));
function App() {
  const user  = useSelector((store) => store.user);
  return (
    <>
    {
      user?
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/profile/view/:userId" element={<Usercard />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      :<Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    }
    </>
  )
}

export default App
