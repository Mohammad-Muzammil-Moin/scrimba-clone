import img from "./Untitled.png";

const BottomContent = () => {
    return (<>
        <div className=" lg:flex bg-pink-100 lg:pl-12 ">

            <div className="p-3 lg:w-1/2 lg:pt-0 pt-12" ><img src="https://scrimba.com/static/art/about-video-cover.jpg" className="rounded-lg sm:p-3" /> </div>
            <div className="  lg:w-1/2 lg:pl-12
            p-8
            " > <h1 className="
pb-4 text-3xl lg:text-4xl font-bold text-gray-800
            ">
                    About the platform
            </h1>
                <p className="pb-8">
                    Scrimba is the next-generation platform for learning how to code. Our screencasts enable you to interact with the code directly in the player. This way, you'll have more fun and learn faster.
</p><p>
                    Our courses cover subjects like HTML, CSS, JavaScript, React, Vue, and more. They're all made with the goal of advancing your career. So pick a course and give your career a boost!</p>
            </div>



        </div>
        <div className="lg:flex  p-8 lg:p-12">
            <div className="lg:w-1/2">
                <h1
                    className="
pb-4 text-2xl lg:text-4xl font-bold text-gray-800">
                    Hi! from the founders
                </h1>
                <p>
                    Our goal is to create the best possible coding school at the lowest possible cost for students. If we succeed with this, it’ll give anyone who wants to become a software developer a realistic shot at succeeding. Regardless of where they live and the size of their wallets.
                </p>
                <p>
                    “To achieve this, we’ve created a new video format for code screencasts. We call it “scrims”.
                    
</p>
<p>

This format is the backbone of our school. Not only because it results in a superior learning experience. But also because it enables us to iterate more quickly, to attract better teachers, to facilitate better peer-learning, to keep server costs low, and much more.
</p>
            </div>
            <div className=" lg:w-1/2  lg:pl-48     ">
                <img  src="https://scrimba.com/static/art/founders.jpg" className="rounded-lg  mt-12 transform rotate-3 w-64 lg:w-72 h-4/5  "/>
                <p className="pb-8 pt-3 font-light ">Connect with us on Twitter</p>
                <div className="lg:pl-12 lg:flex w-72 flex-col "> 
                <button className="pb-4 border border-black px-3 rounded-lg py-2">SAY HI @ SINDREAAS</button>
                <button className="pb-4 rounded-lg border border-black px-3 py-2 mt-3">   SAY HI @ PERBORGEN</button>

                </div>
            </div>


        </div>
<div className="lg:flex block md:flex justify-between bg-pink-200 px-12 mt-52">




<div className="lg:flex flex-col pt-16 pr-12 ">
<div className="flex   ">
          <img  src={img} className="rounded-full w-8 h-8 mr-1 " alt="logo" />
          <h1 className=" pb-16 text-xl font-bold  text-pink-800">scrimba</h1>
        </div>
                <p className="lg:pb-16 pb-8 ">
    Discord
</p>
<p className="lg:pb-16 pb-8 ">Twitter</p>
<p className="lg:pb-16 pb-8 ">YouTube</p>
<p className="lg:pb-16 pb-8 ">GitHub</p>    


</div>

<div className="lg:flex flex-col  mt-16">
    <h3 className="lg:pb-16 pb-8">Resources</h3>
    <p className="lg:pb-16 pb-8 ">Bloge</p>
    <p className="lg:pb-16 pb-8 ">FAQ</p>
    <p className="lg:pb-16 pb-8 ">Terms</p>
    <p className="lg:pb-16 pb-8 ">Privecy</p>



</div>
<div className="lg:flex flex-col mt-16">
    <h1 className="lg:pb-16 pb-8" >Courses</h1>
    <p className="lg:pb-16 pb-8 ">All courses</p>
    <p className="lg:pb-16 pb-8 ">intro courses</p>
    <p className="lg:pb-16 pb-8 ">Learn JavaScript</p>

    <p className="lg:pb-16 pb-8 ">Learn React</p>


</div>
<div className="lg:flex flex-col mt-16"> <h3 className="lg:pb-16 pb-8">Company</h3>
<p className="lg:pb-16 pb-8 ">About us</p>
<p className="lg:pb-16 pb-8 ">Contect us</p>
<p className="lg:pb-16 pb-8 ">Support chat</p>
<p className="lg:pb-16 pb-8 ">Start teaching</p>



</div>





</div>

    </>)
}

export default BottomContent;