

const ComponentScond = (props) => {
  return (<>

    <div className="">
      <h1 className=" lg:text-5xl  text-2xl md:text-4xl text-gray-800 border-l-4 md:border-l-8  pl-6  lg:border-l-8 font-medium lg:font-semibold  md:pl-6 w-72 border-gray-300   " >{props.heading}</h1>
      <p className="py-8  pr-12 lg:text-lg text-md ">{props.para}</p>
    </div>
  </>)
}
export default ComponentScond;