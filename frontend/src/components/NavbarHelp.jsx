import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const NavbarHelp = ({ goback, name }) => {
  return (
    <div
        className=" flex "
        style={{
          backgroundColor: "#ffffffff",
          padding: "10px",
          flexDirection: "row",
        }}
      >
        <button
          onClick={goback}
          style={{
            color: "#764BC4 ",
            fontSize: "23px",
            paddingRight: "10px",
            fontWeight: "bold",
          }}
        >
          <BsArrowLeft />
        </button>
        <h1 style={{ color: "#764BC4 ", fontSize: "23px", fontWeight: "bold" }}>
          {name}
        </h1>
      </div>
  )
}

export default NavbarHelp