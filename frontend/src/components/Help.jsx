import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHelp from "./NavbarHelp";

const Help = () => {

  useEffect(() => {
    document.title = "Help | Review-2-Shop";
 }, []);
  const navigate = useNavigate();
  const [activeFooter, setActiveFooter] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveFooter(false);
    } else {
      setActiveFooter(true);
    }
  }, [screenSize]);

  const goTohome = () => {
    navigate("/");
  };
  const goToAbout = () => {
    navigate("/about");
  };
  const goToAboutPost = () => {
    navigate("/how-to-share-post");
  };

  return (
    <div>
      <NavbarHelp goback={goTohome} name="Help Centre"/>
      <hr style={{ borderTop: "1px solid #764BC4 " }}></hr>
      <div
        className="cursor-pointer"
        onClick={goToAbout}
        style={{
          backgroundColor: " white",
          margin: "auto",
          paddingTop: '23px',
        }}
      >
        <p
          style={{
            fontSize: "20px",
            paddingLeft: "15px",
            fontWeight: "bold",
            color: "grey",
            paddingBottom: '18px'
          }}
        >
          About Review-2-Shop
        </p>
      </div>
      <hr style={{ borderTop: "1px solid grey" }}></hr>
      <div
        className="cursor-pointer"
        onClick={goToAboutPost}
        style={{
          backgroundColor: " white",
          margin: "auto",
          paddingTop: '18px',
        }}
      >
        <p
          style={{
            fontSize: "20px",
            paddingLeft: "15px",
            paddingBottom: '18px',
            fontWeight: "bold",
            color: "grey",
          }}
        >
          How to share your post?
        </p>
      </div>
      <hr style={{ borderTop: "1px solid grey" }}></hr>
      {/* <div
        className="cursor-pointer"
        
        style={{
          backgroundColor: " white",
          margin: "auto",
          paddingTop: '18px',
        }}
      >
        <p
          style={{
            fontSize: "20px",
            paddingLeft: "15px",
            paddingBottom: '18px',
            fontWeight: "bold",
            color: "grey",
          }}
        >
          FAQs (Frequently Asked Questions)
        </p>
      </div> */}
      <hr style={{ borderTop: "1px solid grey" }}></hr>
    </div>
  );
};

export default Help;
