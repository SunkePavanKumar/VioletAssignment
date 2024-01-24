import React from "react";

function SubNav() {
  return (
    <nav className="p-4 border-[2px] border-b-blue-400">
      <div className="flex items-center justify-evenly">
        <a
          href="#about"
          className="text-gray-500 font-sans font-bold hover:text-blue-500 "
        >
          About
        </a>
        <a
          href="#skills-certification"
          className="text-gray-500 font-sans font-bold hover:text-blue-500"
        >
          Skills & Certification
        </a>
        <a
          href="#posts"
          className="text-gray-500 font-sans font-bold hover:text-blue-500 active: border-b-4  border-blue-600 rounded"
        >
          Posts
        </a>
        <a
          href="#spaces"
          className="text-gray-500 font-sans font-bold hover:text-blue-500"
        >
          Spaces
        </a>
      </div>
    </nav>
  );
}

export default SubNav;
