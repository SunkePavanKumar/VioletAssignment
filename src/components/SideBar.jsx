import React from "react";
import { PiSquaresFourFill } from "react-icons/pi";
import { FcInvite } from "react-icons/fc";
import { IoMdAnalytics } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { ImChrome } from "react-icons/im";
import CommunityFeed from "./CommunityFeed";
function SideBar() {
  return (
    <>
      <div className=" mt-4">
        <div className="flex items-center ml-5 gap-2 mb-2 bg-blue-200 rounded-sm p-2">
          <PiSquaresFourFill className=" text-xl text-blue-500" />
          <p className=" text-sm font-serf font-semibold text-gray-500">Home</p>
        </div>
        <div className="flex items-center ml-5 gap-2 mb-2 p-2">
          <FcInvite className=" text-xl text-blue-500" />
          <p className=" text-sm font-serf font-semibold text-gray-500">
            Job Invites
          </p>
        </div>
        <div className="flex items-center ml-5 gap-2 mb-2 p-2">
          <IoMdAnalytics className=" text-xl text-blue-500" />
          <p className=" text-sm font-serf font-semibold text-gray-500">
            Analytics
          </p>
        </div>
        <div className="flex items-center ml-5 gap-2 mb-2 p-2">
          <FaUser className=" text-xl text-blue-500" />
          <p className=" text-sm font-serf font-semibold text-gray-500">
            Profile
          </p>
        </div>
        <div className="flex items-center ml-5 gap-2 mb-2 p-2">
          <ImChrome className=" text-xl text-blue-500" />
          <p className=" text-sm font-serf font-semibold text-gray-500">
            Explore
          </p>
        </div>
      </div>

      <div className="line bg-gray-400 border-[1px] border-gray-400 ml-2 mr-2"></div>
      <div className="community-feed ml-5">
        <CommunityFeed />
      </div>
    </>
  );
}

export default SideBar;
