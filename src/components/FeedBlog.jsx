const FeedBlog = () => {
  return (
    <div className="bg-gray-100 w-full h-[10%] border-2 relative pb-10">
        <div className="w-full bg-gray-200 flex items-center justify-between px-2 py-1 mb-1 font-medium">
            <p>TITLE</p>
            <p>username</p>
        </div>
        <p className="px-2 max-h-24 overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit incidunt placeat provident earum, nesciunt similique recusandae et magnam reiciendis esse consequuntur ex fugit non enim. Consequuntur numquam labore veritatis sit!   
        </p>
        <div className="absolute bottom-0 right-0 mr-2 mb-1 flex gap-2 justify-center items-center">
            <p>^</p>
            <p>v</p>
            <p>Cmts</p>
        </div>
    </div>
  )
}

export default FeedBlog