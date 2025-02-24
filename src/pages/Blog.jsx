import back from "../assets/back.png";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-[100svh] w-full">
      <Navbar />
      <img src={back} alt="back" className="absolute top-18 left-1 h-8" />
      <div className="w-full flex-1 mt-16 pb-10">
          <div className="m-">
            <p className="text-2xl font-medium ml-4">TITLE</p>
            <p className="font-light -mt-1 mb-5 ml-4">username</p>
            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid laboriosam repudiandae! Animi ullam optio minima fugiat vero ex dolore, consectetur fuga commodi dolorem maxime!
               Voluptate unde saepe doloremque odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores placeat, ea laudantium inventore perferendis quos sequi, voluptate ipsam
               modi optio quaerat similique magni impedit reprehenderit odio nisi, earum suscipit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus alias incidunt, rerum quisquam libero nulla
               aliquid autem quod perspiciatis quidem dolores ipsam eius unde fuga cum reiciendis fugiat. Consequatur, dolores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, amet odit fugit
               in accusantium dicta vitae molestiae aliquid voluptatem dolorum voluptates maiores facere mollitia enim minima placeat earum autem corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Dolores, reiciendis incidunt ratione deleniti, tempora officiis iure ipsam ullam voluptate, nesciunt illo maxime rem. Exercitationem atque saepe iste a assumenda aspernatur. Lorem ipsum dolor sit
               amet consectetur adipisicing elit. Enim dicta suscipit quis, ullam, ipsa maxime dolorem iure qui corrupti eligendi fugiat rerum impedit. Repellat accusantium saepe provident ipsa corrupti ea!</p>
          </div>
          <div className="absolute bottom-0 right-0 mr-2 mb-1 flex gap-2 justify-center items-center">
            <p>^</p>
            <p>v</p>
            <p>Cmts</p>
          </div>
      </div>
    </div>
  )
}

export default Blog