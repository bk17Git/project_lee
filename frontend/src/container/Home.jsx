import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { Sidebar  } from "../components";
import Scrapes from "./Scrapes";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef(null);


  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenuAlt1
            fontSize={40}
            className="cursor-pointer text-green-500"
            onClick={() => setToggleSidebar(true)}
          />
          <Link to="/">
          <span className=" font-extrabold text-3xl logo"><span className="text-purple-600">Review</span><span className="text-green-500">-2-</span><span className="text-purple-600">Shop</span></span>
          </Link>
          <div className="w-9 h-9 rounded-full "></div>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in ">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer text-green-500"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar}  />
          </div>
        )}
      </div>
      <div className=" flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          {/* <Route path="/user-profile/:userId" element={<UserProfile />} /> */}
          <Route path="/*" element={<Scrapes />} />
          {/* <Route path="/*" element={<Feed />} />  */}
        </Routes>
      </div>
    </div>
  );
};

export default Home;
