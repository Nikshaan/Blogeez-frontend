import { NavLink } from "react-router-dom"

const FeedBlog = ({blog}) => {

  return (
    <div className=" font-roboto w-full h-[10%] border-2 relative pb-2 mt-2">
      <NavLink to={`/blog/${blog._id}`}>
        <div className="w-full bg-gray-200 max-h-14  overflow-hidden flex gap-10 justify-between px-2 py-1 mb-1 font-bold">
            <p className="whitespace-pre-wrap font-raleway font-bold">{blog.title}</p>
        </div>
        <p className="text-right px-2 font-medium whitespace-pre-wrap">{blog.firstName + " " + blog.lastName}</p>
        <p className="px-2 max-h-28 overflow-hidden whitespace-pre-wrap">
            {blog.content}
        </p>
      </NavLink>
    </div>
  )
}

export default FeedBlog