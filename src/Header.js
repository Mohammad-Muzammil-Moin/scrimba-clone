import img from "./Untitled.png";
const Header = () => {
  return (
    <>
      <div className=" bg-white bg-opacity-90 mb-12 fixed w-screen flex justify-between  ">
        <div className="flex  justify-between p-1 ">
          <img src={img} className="w-8 h-8 mr-1" alt="logo" />
          <h1 className=" hidden sm:block text-xl font-bold  text-pink-800">scrimba</h1>
        </div>
        <div className="flex p-2 item ">
          <a
            href="#"
            className="  lis-none  hidden md:block px-5 py-1 text-pink-900 font-bold  mx-4 bg-pink-200  rounded-2xl text-sm"
          >
            Pro!
          </a>
          <a
            href="#"
            className=" lis-none mt-1 pr-5 hover:underline text-gray-400 border-r-2 h-5  text-sm	"
          >
            All courses
          </a>

          <a
            href="#"
            className=" hidden hover:underline sm:block lis-none pl-4 border-r-2 pr-5 font- mt-1   text-gray-400  text-sm"
          >
            Sign up
          </a>
          <a
            href="#"
            className=" lis-none  h-5  pl-4 hover:underline mt-1 pr-5 text-gray-400 text-sm "
          >
            Sign in
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
