import { NavLink } from "react-router-dom"

const FeedBlog = ({blog}) => {
  console.log(blog)
  return (
    <div className="bg-gray-100 w-full h-[10%] border-2 relative pb-10">
      <NavLink to={`/blog/${blog._id}`}>
        <div className="w-full bg-gray-200 flex items-center justify-between px-2 py-1 mb-1 font-medium">
            <p>{blog.title}</p>
            <p>{blog.firstName + " " + blog.lastName}</p>
        </div>
        <p className="px-2 max-h-24 overflow-hidden">
            {blog.content}
        </p>
      </NavLink>
    </div>
  )
}

export default FeedBlog