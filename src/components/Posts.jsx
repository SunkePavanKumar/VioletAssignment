import React from "react";
import profilePhoto from "../assets/profilePhoto.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import postImage from "../assets/postImage.jpg";
import { BiLike } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
function Posts() {
  return (
    <>
      <div className=" flex justify-between items-center ml-2 mr-4 mt-4">
        <div className=" flex items-center">
          <div className=" flex ">
            <img
              src={profilePhoto}
              alt="profilePhoto"
              className=" rounded-full h-10 w-10 "
            />
            <div>
              <p className=" text-sm font-sans text-gray-700 font-semibold">
                Pavan Kumar Sunke
              </p>
              <div className=" flex items-center justify-start">
                <p>
                  <IoTimeOutline className=" text-gray-400 text-sm" />
                </p>
                <p className=" text-[14px] text-sm text-gray-400 font-sans">
                  14 min ago on
                  <span className=" text-gray-600 font-semibold  text-sm ml-1">
                    Figma Community
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-3">
          <div className="w-5 h-5 bg-blue-500 rounded-full p-1">
            <FiEdit2 className=" text-[11px] text-white" />
          </div>
          <div className="w-5 h-5 bg-blue-500 rounded-full p-1">
            <RiDeleteBin6Line className=" text-[11px] text-white" />
          </div>
        </div>
      </div>

      <div className=" ml-12 mr-4 mt-3">
        <p className=" font-sans line leading-tight text-sm text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          quae delectus possimus, vitae nihil iste odit eligendi! Velit,
          doloremque distinctio.
        </p>
        <img
          src={postImage}
          alt="post success"
          className=" h-[200px] w-full object-cover rounded-md"
        />
        <div className=" flex items-center  gap-7 mt-2">
          <span>
            <BiLike className=" text-blue-400" />
          </span>
          <MdOutlineMessage />
          <FaRegShareFromSquare />
        </div>
      </div>
    </>
  );
}

export default Posts;
