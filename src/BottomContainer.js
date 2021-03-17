import BottomContent from "./BottomContent"
import img from "./pngfind.com-youtube-live-png-1273085.png"
const BottomContainer = () => {
    return (<>


        <div className="z-30 text-center">
            <h1 className="text-gray-800 md:text-4xl lg:text-5xl  font-bold  pt-12  ">Join our Discord chat</h1>
            <div className="flex justify-center items-center "><p className=" md:text-xl  lg:text-2xl pr-4 ">500+online</p><span><img className="w-3 h-3" src="https://www.pngfind.com/pngs/m/269-2698936_green-dot-icon-png-green-online-icon-png.png" /></span></div>
            <button className=" active:font-light active:border-2 rounded-md border-black py-2 px-4 mt-12 z-40 border border-solid"> ENTER CHAT</button>

        </div>
        <img src={img} className="relative bottom-60 z-10  hidden  lg:block h-80  left-40 pb-12  lg:w-4/5 " />
        <BottomContent />






    </>)


}
export default BottomContainer;