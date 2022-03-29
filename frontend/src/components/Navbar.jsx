import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircle, IoMdSearch } from "react-icons/io";


const Navbar = () => {
  const navigate = useNavigate();


    return (
      <div className="flex gap-2 md:gap-2 w-full mt-5 pb-2  z-50 ">
        <div className="flex justify-start items-center w-full px-2 rounded-md  border-2 outline-none focus-within:shadow-sm">
          <IoMdSearch color="#764BC4 " fontSize={21} className="ml-1" />
          <input
            type="text"
            placeholder="Search by Category"
            value=""
            onFocus={() => navigate("/search")}
            className="p-2 w-full outline-none"
          />
        </div>
      </div>
    );
  }



export default Navbar;
