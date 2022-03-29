import React, { useState, useEffect } from "react";
import NavbarHelp from "./NavbarHelp";
import { useNavigate } from "react-router-dom";

function AboutSharePost() {

    const [activeFooter, setActiveFooter] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const navigate = useNavigate();
  
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
  
    useEffect(() => {
      document.title = "How to Share your post?";
   }, []); 
  
    const goToHelp = () => {
      navigate("/help");
    };
    return (
        <div>
          <NavbarHelp goback={goToHelp} name="How to share your post?" />
          <hr style={{ borderTop: "1px solid #764BC4 " }}></hr>
          {activeFooter && (
            <div style={{ backgroundColor: "white", margin: "auto" }}>
              
              <p
                style={{
                  fontSize: "25px",
                  paddingLeft: "15px",
                  paddingTop: "20px",
                  color: "#000000",
                }}
              >
                Share your post in just 4 easy steps:
              </p>
              <p
                className="flex"
                style={{
                  fontSize: "18px",
                  paddingLeft: "20px",
                  paddingTop: "20px",
                  flexDirection: "row",
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                1. Click on the Add Post Button which is on the top right corner
                in the home page.
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
                2. Click on the Click to upload button, select your image and upload it.
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
                3. Then fill out all the required fields like Title, Description, etc.
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
                4. Click on the Create button and that's all! Your Sketch is in the feed!
              </p>
              <p
                style={{
                  fontSize: "22px",
                  padding: "10px",
                  paddingLeft: "15px",
                  fontWeight: "bold",
                  color: "#764BC4 ",
                }}
              >
                So, Lets Sketch Out The World!
              </p>
            </div>
          )}
          {!activeFooter && (
            <div>
              <div>
                
                <p
                  style={{
                    fontSize: "30px",
                    paddingLeft: "10px",
                    padddingRight: "10px",
                    paddingTop: "40px",
                    color: "#000000",
                  }}
                >
                  Share your post in just 4 easy steps:
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    paddingLeft: "15px",
                    paddingTop: "20px",
                    padddingRight: "10px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  1. Click on the Add Post Button which is on the top right corner
                in the home page.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    paddingLeft: "15px",
                    paddingTop: "20px",
                    padddingRight: "10px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  2. Click on the Click to upload button, select your image and upload it.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    paddingLeft: "15px",
                    padddingRight: "10px",
                    paddingTop: "20px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  3. Then fill out all the required fields like Title, Description, etc.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    paddingLeft: "15px",
                    paddingTop: "20px",
                    padddingRight: "10px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  4. Click on the Create button and that's all! Your Sketch is in the feed!
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
}

export default AboutSharePost;
