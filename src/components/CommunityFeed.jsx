import profilePhoto from "../assets/profilePhoto.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import Footer from "./Footer";
function CommunityFeed() {
  return (
    <div>
      <h1 className=" mt-4 font-semibold font-sans text-gray-500 mb-2">
        Community Feed
      </h1>
      <div className=" flex items-center gap-3 mb-2">
        <div className=" border-[1px] border-gray-500 rounded-full h-7 w-7">
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className="rounded-full w-7"
          />
        </div>
        <div>
          <p className=" text-sm font-sans text-gray-600  font-semibold">
            Pavan Full Stack
          </p>
          <p className=" text-[12px] font-sans text-gray-400  font-semibold">
            900 members
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 mb-2">
        <div className=" border-[1px] border-gray-500 rounded-full h-7 w-7">
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className="rounded-full w-7 min-w-7 min-h-7"
          />
        </div>
        <div className=" overflow-auto">
          <p className=" text-sm font-sans text-gray-600  font-semibold overflow-hidden whitespace-nowrap">
            Pavan Full Stack MERN Stack....
          </p>
          <p className=" text-[12px] font-sans text-gray-400  font-semibold">
            900 members
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 mb-2">
        <div className=" border-[1px] border-gray-500 rounded-full h-7 w-7">
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className="rounded-full w-7"
          />
        </div>
        <div>
          <p className=" text-sm font-sans text-gray-600  font-semibold">
            Pavan Full Stack
          </p>
          <p className=" text-[12px] font-sans text-gray-400  font-semibold">
            900 members
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 mb-2">
        <div className=" border-[1px] border-gray-500 rounded-full h-7 w-7">
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className="rounded-full w-7"
          />
        </div>
        <div>
          <p className=" text-sm font-sans text-gray-600  font-semibold">
            Pavan Full Stack
          </p>
          <p className=" text-[12px] font-sans text-gray-400  font-semibold">
            900 members
          </p>
        </div>
      </div>

      <div className="md:ml-10 flex gap-1 items-center">
        <p className=" text-gray-500 font-sans font-semibold text-sm">
          show 5 more
        </p>
        <MdArrowForwardIos className=" text-sm text-gray-500" />
      </div>
    </div>
  );
}

export default CommunityFeed;
