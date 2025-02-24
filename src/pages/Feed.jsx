import FeedBlog from "../components/FeedBlog"
import Navbar from "../components/Navbar"

const Feed = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <p className="text-right my-1 mx-2 font-thin w-[90%]">Sort posts</p>
      <div className="w-[90%] relative flex flex-col items-center mt-5 mb-10 gap-2">
        <FeedBlog />
        <FeedBlog />
        <FeedBlog />
        <FeedBlog />
        <FeedBlog />
      </div>
    </div>
  )
}

export default Feed