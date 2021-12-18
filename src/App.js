import React, { useEffect, useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LoadingScreen from "./components/Pages/LoadingPage";



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
    </>
  );
}

export default App;
