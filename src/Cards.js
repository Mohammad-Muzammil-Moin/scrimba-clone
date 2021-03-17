const Cards = (props) => {
  return (
    <>
      <div className="  lg:w-auto  bg-blue-100 shadow-xl rounded-xl h-60 my-12 my-12 mr-4 md:ml-1 ml-12 ">
        <h1 className=" text-gray-500 pt-8 h-24 text-right pr-2  pl-4 font-bold  lg:text-2xl text-xl">

          {props.heading}
        </h1>

        <div className="flex text-gray-500 pr-4  pl-4">
          <p className=" z-20 pt-4 text-xs  w-52 lg:w-48 md:pt-8 font-light  ">
            <code>{props.schedule}</code>
            <span className=" text-sm font-bold">{props.teacherName}</span>
          </p>
          <img
            className=" mt-8 ml-12 w-12 h-12 rounded-full"
            src={props.image}
            alt="image of office worker"
          />
        </div>
        <h4 className="mt-8 ml-3 text-xs font-bold   ">{props.courseLevel}</h4>
      </div>
    </>
  );
};
export default Cards;
