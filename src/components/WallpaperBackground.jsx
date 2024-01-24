import wallpaper from "../assets/backgorund-wallpaper.webp";
import { FiEdit2 } from "react-icons/fi";
function WallpaperBackground() {
  return (
    <>
      <img
        src={wallpaper}
        alt="wallpaper"
        className=" w-full h-[100%] -z-0 relative"
      />
      <div className=" absolute top-[20px] right-[30px] w-5 h-5 bg-white rounded-full p-1">
        <FiEdit2 className=" text-[11px] text-blue-600" />
      </div>
    </>
  );
}

export default WallpaperBackground;
