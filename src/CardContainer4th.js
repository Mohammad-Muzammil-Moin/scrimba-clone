import Cards from "./Cards";
const CardsContainer4th = (props) => {
    return (
        <>
            <div className="bg-green-100">

                <h1 className=" text-center pt-12 font-bold lg:text-4xl text-2xl underline ">
                    {props.heading}
                </h1>
                <p className="text-lg pt-3 text-center">{props.para}</p>

                {/* card container below */}
                <div className="sm: md:ml-16 sm:flex mr-9 ">
                    <div className="lg:flex sm">
                        <Cards
                            heading="The Frontend Developer Career Path"
                            schedule="921 lesson | 75 houre with "
                            teacherName="PAr Harald Borgan"
                            courseLevel="Beginner"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />

                        <Cards
                            heading="The React Bootcamp"
                            schedule="128 lesson | 12 houre with "
                            teacherName="Bob Ziroll"
                            courseLevel="Advanced"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />
                    </div>
                    <div className="lg:flex ">
                        <Cards
                            heading="Learn React for free "
                            schedule="58 lesson | 1 houre with "
                            teacherName="Bob Ziroll"
                            courseLevel="Intermediate"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />

                        <Cards
                            heading="Build movie search app in React"
                            schedule="12 lesson | 55 houre with "
                            teacherName="James Q Quick"
                            courseLevel="Intermediate"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />
                    </div>
                </div>
                <div className="  flex item-center justify-center mt-20 pb-12 ">
                    <button className="bg-gray-300 px-4 rounded-xl "> Show more</button>
                </div>


            </div>        </>
    );
};
export default CardsContainer4th;
