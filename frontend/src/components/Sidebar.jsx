import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiInformationFill } from "react-icons/ri";
import { BsNewspaper } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { categories } from "../utils/data";
import { GrArticle } from "react-icons/gr";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 text-green-500 font-bold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";
const isNotActiveStyle2 =
  "flex items-center px-5 gap-3 text-purple-600 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle2 =
  "flex items-center px-5 gap-3 text-green-500 font-bold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";


const Sidebar = ({ closeToggle }) => {

  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full  overflow-y-scroll min-w-210 hide-scrollbar z-50 shadow-2xl">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex pr-5 pl-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          {/* <img src={logo} alt="logo" className="w-full" /> */}
          <span className=" font-extrabold logo"><span className="text-purple-600">Review</span><span className="text-green-500">-2-</span><span className="text-purple-600">Shop</span></span>
        </Link>
        <div className="flex flex-col gap-5 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <BsNewspaper />
            Latest
          </NavLink>

          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <GrArticle  />
              {category.name}
            </NavLink>
          ))}
          <NavLink
            to="/helpnone"
            className={({ isActive }) =>
              isActive ? isActiveStyle2 : isNotActiveStyle2
            }
            onClick={handleCloseSidebar}
          >
            <RiInformationFill />
            About
          </NavLink>
        </div>
      </div>
    </div>

    
  );
};

export default Sidebar;
