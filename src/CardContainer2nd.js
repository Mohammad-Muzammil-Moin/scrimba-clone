import Cards from "./Cards";
const CardsContainer2nd = (props) => {
    return (
        <>
            <div className="bg-yellow-100 ">
                <h1 className=" text-center pt-12 font-bold  lg:text-4xl text-2xl underline ">
                    {props.heading}
                </h1>
                <p className="text-lg pt-3 text-center">{props.para}</p>

                {/* card container below */}
                <div className="sm: md:ml-16 sm:flex mr-9 ">
                    <div className="lg:flex ">
                        <Cards
                            heading="The Frontend Developer Career Path"
                            schedule="921 lesson | 75 houre with "
                            teacherName="Par Harald Borgen"
                            courseLevel="Beginner"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />

                        <Cards
                            heading="The React Botcamp"
                            schedule="128 lesson | 12 houre with "
                            teacherName="Bob Ziroll"
                            courseLevel="Advanced"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />
                    </div>
                    <div className="lg:flex ">
                        <Cards
                            heading="The Responsive Web Design Bootcamp "
                            schedule="172 lesson | 15 houre with "
                            teacherName="Kevin Powell"
                            courseLevel="Intermediate"
                            image="https://thumbs.dreamstime.com/b/boy-icon-avatar-symbol-isolated-white-boy-icon-avatar-symbol-isolated-white-background-man-face-icon-color-flat-style-152379819.jpg"
                        />

                        <Cards
                            heading="The UI Design Bootcamp"
                            schedule="99 lesson | 8 houre with "
                            teacherName="Ania Kubow"
                            courseLevel="Intermediate"
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
export default CardsContainer2nd;
