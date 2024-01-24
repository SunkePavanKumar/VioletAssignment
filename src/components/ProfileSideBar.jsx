import profilePhoto from "../assets/profilePhoto.jpg";
import { IoToggle } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";

function ProfileSideBar() {
  return (
    <div className=" w-full relative z-50 bottom-16 h-[100%]">
      <div className=" flex flex-col items-center">
        <img
          src={profilePhoto}
          alt="profilePhoto"
          className=" rounded-full w-24"
        />
        <p className="font-sans font-bold text-gray-700">Pavan Kumar Sunke</p>
        <span className=" font-sans font-semibold text-gray-400 m-0 p-0 text-[12px]">
          full stack developer
        </span>
        <div className="flex justify-center items-center gap-2">
          <div className=" flex justify-center items-center gap-1">
            <FaPeopleGroup className=" text-[12px]" />
            <p className=" text-[10px] font-semibold text-gray-700">
              100 followers
            </p>
          </div>
          <div className=" text-[10px] font-semibold text-gray-700">
            500 following
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center mt-6 gap-1">
            <p className=" text-center text-[13px] font-sans font-semibold text-gray-500">
              Make my profile visible to employers
            </p>
            <IoToggle className=" text-xl text-blue-500" />
          </div>
          <p className=" ml-1 text-[12px] font-sans font-medium   text-gray-400">
            your details will be available to the employers when search on the
            database
          </p>
        </div>
        <div className="">
          <div className="flex items-center justify-between  mt-8 gap-1 ml-1 mr-1">
            <p className=" text-center text-[13px] font-sans font-semibold text-gray-500">
              Other links
            </p>
            <AiFillPlusCircle className=" text-xl text-blue-500" />
          </div>
          <p className="text-[12px] font-sans font-medium   text-gray-400 ml-1">
            add your online portfolio links to increase your strengths
          </p>
        </div>

        <div className=" flex items-center justify-center mt-6 w-[92%] gap-4 rounded-lg border-[2px] border-blue-200 bg-blue-100 p-3 ml-[6%] mr-[6%]">
          <SiReact className=" text-2xl text-blue-700" />
          <SiMongodb className=" text-2xl text-green-800" />
          <FaNodeJs className=" text-2xl  text-green-700" />
        </div>
        <div className=" flex flex-col items-center justify-center mt-6 w-[92%]  h-[92%] gap-4 rounded-lg border-[2px] border-blue-200  p-3 ml-[6%] mr-[6%]">
          <p className=" text-sm font-sans text-gray-500 font-semibold">
            Wheel of opportunities
          </p>
          <CircularProgressbarWithChildren value={35} className=" h-[150px]">
            <p></p>
            <div
              style={{ fontSize: 12, marginTop: -5 }}
              className=" flex flex-col items-center justify-center"
            >
              <strong className=" text-xl"> 350</strong>
              <p className=" font-sans font-semibold text-sm text-gray-500">
                Sphere Rating
              </p>
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className="flex  flex-col justify-center  items-center w-full mt-12 ">
          <p className=" text-sm font-sans font-semibold text-gray-500 mb-2">
            Your Ranking
          </p>
          <ProgressBar
            completed={180}
            maxCompleted={200}
            bgColor="blue"
            className=" w-[92%] text-blue-500"
          />
          <p className=" mt-2 text-sm text-gray-500 font-sans font-semibold">
            Hurray! you are on top
            <span className=" text-sm text-blue-700 font-sans font-semibold ">
              27%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
