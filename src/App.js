import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import LoadingScreen from "./components/Pages/LoadingPage";
import AboutSection from "./components/Sections/AboutSection";
import TechStackSection from "./components/Sections/TechStackSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}
      <NavigationBar />
      <div
        style={{
          fontWeight: 900,
          fontSize: "11.2vw",
          fontStyle: "bold",
          color: "rgb(119, 119, 119)",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        FULL
        <br />
        STACK
        <br />
        {/* Hey, don't touch me! */}
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            border: "solid 1px",
            borderLeftColor: "rgb(119, 119, 119)",
            display: "inline",
            borderRadius: "10px",
          }}
        >
          DEVELOPER
        </div>
      </div>
      <AboutSection title={"About"}>
        Hi, I am Ertan. I interested in web and mobile technologies. I can use
        Dart Language, Flutter Framework for developing mobile applications and
        I am also learning CSS - HTML and JavaScript.
      </AboutSection>

      <TechStackSection title={"Tech Stack"} />
    </>
  );
}

export default App;
