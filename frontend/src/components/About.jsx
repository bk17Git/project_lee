import React, { useState, useEffect } from "react";
import logoBg from "../assets/about_bg.jpg";
import { useNavigate } from "react-router-dom";
import NavbarHelp from "./NavbarHelp";

const About = () => {
  const [activeFooter, setActiveFooter] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "About Review-2-Shop";
 }, []); 

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

  var arrow = "~>";



  const goToHelp = () => {
    navigate("/help");
  };

  return (
    <div>
      <NavbarHelp goback={goToHelp} name="About Review-2-Shop"/>
      <hr style={{ borderTop: "1px solid #764BC4 " }}></hr>
      {activeFooter && (
        <div style={{ backgroundColor: "white", margin: "auto" }}>
          <p
            style={{
              fontSize: "25px",
              paddingLeft: "15px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            What is Review-2-Shop?
          </p>
          <div className=" flex " style={{ flexDirection: "row" }}>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "grey",
              }}
            >
              Review-2-Shop is a Image Sharing Social Media Platform that offers you
              the opportunity to stock and share your favourite images. If you
              are someone who has a knack for photography or even who loves to
              write quotes, then Review-2-Shop is the perfect place for you. You can
              share skillful photographs, quotes, memes, and many more. We would
              love to welcome all informational and knowledgeable images.{" "}
            </p>
            <img
              src={logoBg}
              style={{ width: "280px", padding: "10px", borderRadius: "20px" }}
            />
          </div>
          <div className=" flex " style={{ flexDirection: "row" }}>
            <img
              src={logoBg}
              style={{ width: "270px", padding: "10px", borderRadius: "20px" }}
            />
            <p
              style={{
                fontSize: "18px",
                paddingLeft: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
                fontWeight: "bold",
                color: "grey",
              }}
            >
              The main purpose of developing this app is to remove the Bad
              Aspect from Social Media so that everyone can enjoy and use it for
              Good Cause. It is an enjoyable and useful platform for all users.{" "}
            </p>
          </div>
          <p
            style={{
              fontSize: "25px",
              paddingLeft: "15px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Why to use Review-2-Shop?
          </p>
          <p
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            {arrow} We don't use the User's data. Their data is safe with us. We
            value their privacy above all else.{" "}
          </p>
          <p
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            {arrow} We don't use data for any in-app advertisements.
          </p>
          <p
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "grey",
            }}
          >
            {arrow} We don't allow any inappropriate content. Users with any
            inappropriate content will be blocked.
          </p>
          <p
            style={{
              fontSize: "22px",
              padding: "10px",
              fontWeight: "bold",
              color: "#764BC4 ",
            }}
          >
            So, Lets Sketch Out The World!
          </p>
        </div>
      )}
      {!activeFooter && (
        <div
          style={{
            backgroundImage: `linear-gradient(to top left, #764BC4  100%, #ffffff 50%)`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" bg-blackOverlay">
            <p
              style={{
                fontSize: "30px",
                paddingLeft: "10px",
                paddingTop: "40px",
                fontWeight: "bold",
                color: "#764BC4 ",
              }}
            >
              What is Review-2-Shop?
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Review-2-Shop is a Image Sharing Social Media Platform that offers you
              the opportunity to stock and share your favourite images. If you
              are someone who has a knack for photography or even who loves to
              write quotes, then Review-2-Shop is the perfect place for you. You can
              share skillful photographs, quotes, memes, and many more. We would
              love to welcome all informational and knowledgeable images.{" "}
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              The main purpose of developing this app is to remove the Bad
              Aspect from Social Media so that everyone can enjoy and use it for
              Good Cause. It is an enjoyable and useful platform for all users.{" "}
            </p>
            <p
              style={{
                fontSize: "30px",
                paddingLeft: "10px",
                paddingTop: "40px",
                fontWeight: "bold",
                color: "#764BC4 ",
              }}
            >
              Why to use Review-2-Shop?
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ~ We don't use the User's data. Their data is safe with us. We
              value their privacy above all else.{" "}
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ~ We don't use data for any in-app advertisements.
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ~ We don't allow any inappropriate content. Users with any
              inappropriate content will be blocked.
            </p>
            <p
              style={{
                fontSize: "18px",
                padding: "8px",
                fontWeight: "bold",
                color: "#764BC4 ",
              }}
            >
              So, Lets Sketch Out The World!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
