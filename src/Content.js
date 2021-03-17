import BottomContainer from "./BottomContainer";
import CardsContainer2nd from "./CardContainer2nd";
import CardsContainer3rd from "./CardContainer3rd";
import CardsContainer4th from "./CardContainer4th";
import CardsContainer from "./CardsContainer";
import ComponentScond from "./Component-2";
const { default: Button } = require("./Button");
const { default: Component } = require("./Card component");
const { default: CoursHeading } = require("./Components");
const { default: Image } = require("./Image");

const Content = () => {
  return (
    <>
      <div className="pb-72">
        <CoursHeading
          heading="Become a frontend  developer with hands-on courses
"
        />

        <Button button="TRY THE FRONTEND PATH" />
      </div>
      <div className="lg:flex justify-between  ">
        <Image />
        <div className=" md:flex lg:flex px-12 ">
          <Component
            heading="Learn by doing"
            para="bye bye static video! Our interactive screencasts lets you edit the teacher's code."
          />
          <ComponentScond
            heading="Learn with others"
            para="Scrimba is more than just courses, you'll join a community of learners across the globe."
          />
        </div>
      </div>
      <CardsContainer
        heading="#Popular courses"
        para="Get started with these popular intro courses.
"
      />
      <CardsContainer2nd
        heading="#Bootcamps"
        para="Comprehensive courses on various topics
.
"
      />{""}
      <CardsContainer3rd
        heading="#Freebies"
        para="High-quality Scrimba courses that doesn't cost a dime.
"
      />{" "}


      <CardsContainer
        heading="#Popular courses"
        para="Get started with these popular intro courses.
"
      />
      <CardsContainer2nd
        heading="#Bootcamps"
        para="Comprehensive courses on various topics
.
"
      />{""}
      <CardsContainer3rd
        heading="#Freebies"
        para="High-quality Scrimba courses that doesn't cost a dime.
"
      />{" "}


      {""}
      <CardsContainer3rd
        heading="#Freebies"
        para="High-quality Scrimba courses that doesn't cost a dime.
"
      />{" "}
      <CardsContainer4th
        heading="#React.js
"
        para="React is the worlds most popular library for building user interface.

"
      />


      {/* CardContainer */}
      <BottomContainer />
    </>
  );
};
export default Content;
