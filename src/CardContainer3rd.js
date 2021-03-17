import Cards from "./Cards";
const CardsContainer3rd = (props) => {
    return (
        <>
            <div className="bg-red-50">
                <h1 className=" text-center pt-12 font-bold lg:text-4xl text-2xl underline ">
                    {props.heading}
                </h1>
                <p className="text-lg pt-3 text-center">{props.para}</p>

                {/* card container below */}
                <div className="sm: md:ml-16 sm:flex mr-9 ">
                    <div className="lg:flex sm">
                        <Cards
                            heading="HTML & CSS Crash Course"
                            schedule="30 lesson | 4 houre with "
                            teacherName="Kevin Powell"
                            courseLevel="Beginner"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />

                        <Cards
                            heading="Learn React for free"
                            schedule="58 lesson | 1 houre with "
                            teacherName="bob Zeroll"
                            courseLevel="Beginner"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />
                    </div>
                    <div className="lg:flex ">
                        <Cards
                            heading="Learn UI Design Fundamentals "
                            schedule="15 lesson | 1 houre with "
                            teacherName="Gary Simon"
                            courseLevel="Intermediate"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />

                        <Cards
                            heading="Learn Python for free"
                            schedule="58 lesson | 5 houre with "
                            teacherName="Ania Kubow"
                            courseLevel="beginner"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />
                    </div>
                </div>
                <div className="  flex item-center justify-center mt-20 pb-12 ">
                    <button className="bg-gray-300 px-4 rounded-xl "> Show more</button>
                </div>


            </div>
        </>
    );
};
export default CardsContainer3rd;
