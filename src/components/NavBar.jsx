import logo from "../assets/logo.svg";
import profilePhoto from "../assets/profilePhoto.jpg";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
function NavBar() {
  return (
    <div className=" flex items-center justify-between w-full h-12 mt-3">
      <div className="left ml-6 font-san font-semibold text-gray-500 flex">
        <img src={logo} alt="logo" className=" w-6" />
        <span>Spehere</span>
      </div>
      <div className="right mr-6 flex justify-center items-center gap-4">
        <div className=" flex items-center justify-center">
          <IoIosSearch className=" border-blue-200 border-2 h-9 border-r-0 rounded-lg w-9 rounded-r-none text-gray-400" />
          <input
            type="text"
            placeholder="search"
            className=" outline-none border-blue-200 border-2 border-l-0 rounded-r-lg h-9"
          />
        </div>
        <div className=" border-blue-200 border-2 rounded-lg p-1 relative">
          <IoMdNotificationsOutline className=" text-[24px] text-gray-400" />
          <span className=" absolute rounded-full bg-red-600 border-2 border-red-600 w-[6px] h-[6px] top-[10px] right-1 left-[18px]"></span>
        </div>
        <div className=" border-blue-200 border-2 rounded-lg p-1">
          <MdOutlineMail className=" text-[24px] text-gray-400" />
        </div>

        <div className=" rounded-full bg-gray-500 border-gray-500 border-2 h-9 w-9 relative">
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className=" rounded-full"
          />
          <div className=" rounded-full border-gray-800 border-1 w-[16px] h-[16px] absolute left-[20px] top-[23px] bg-white">
            <FaChevronDown className=" text-[14px] text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
