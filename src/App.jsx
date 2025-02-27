import { Route, Routes } from "react-router-dom"
import Feed from "./pages/Feed"
import Profile from "./pages/Profile"
import Authentication from "./pages/Authentication"
import Blog from "./pages/Blog"
import CreateBlog from "./pages/createBlog"
import Usercard from "./pages/Usercard"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/profile/view/:userId" element={<Usercard />} />
      </Routes>
    </>
  )
}

export default App
