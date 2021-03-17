import Cards from "./Cards";
const CardsContainer = (props) => {
  return (
    <>
      <div className="bg-pink-100 ">
        <h1 className=" text-center pt-12 font-bold lg:text-4xl text-2xl underline ">
          {props.heading}
        </h1>
        <p className="text-lg pt-3 text-center">{props.para}</p>

        {/* card container below */}
        <div className="sm: md:ml-16 sm:flex mr-9 ">
          <div className="lg:flex sm">
            <Cards
              heading="21 Web Dev Tips for 2021"
              schedule="25 lesson | 1 houre with "
              teacherName="Ania Kubow"
              courseLevel="Beginner"
              image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
            />

            <Cards
              heading="HTML & CSS Crash Course"
              schedule="30 lesson | 4 houre with "
              teacherName="Kevin Powell"
              courseLevel="Beginner"
              image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
            />
          </div>
          <div className="lg:flex ">
            <Cards
              heading="Learn React for free "
              schedule="50 lesson | 1 houre with "
              teacherName="Bob Ziroll"
              courseLevel="Beginner"
              image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
            />

            <Cards
              heading="Learn UI Design Fundamentals"
              schedule="25 lesson | 1 houre with "
              teacherName="Ania Kubow"
              courseLevel="Intermediate"
              image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
            />
          </div>
        </div>
        <div className="  flex item-center justify-center mt-20 pb-12">
          <button className="bg-gray-300 px-4 rounded-xl "> Show more</button>
        </div>
      </div>
    </>
  );
};
export default CardsContainer;
