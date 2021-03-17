const CoursHeading = (props) => {
  return (
    <>
      <div className="flex">
        <h1
          className=" lg:text-7xl  font-semibold tracking-wide leading-tight md:text-6xl  
lg:text-gray-500 md:text-blue-800  sm: w-screen text-4xl pr-4 lg:relative lg:px-32 pt-40 font-sans md:px-84
 text-right flex-2"
        >
          {props.heading}
        </h1>
        <img
          src="http://www.pngmart.com/files/4/Coder-PNG-Clipart.png"
          className=" w-52  h-72  top-40 relative right-8 flex-4 hidden lg:block" alt="a anime piret"
        />
      </div>
    </>
  );
};

export default CoursHeading;
