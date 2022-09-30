import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css"; //npm install --save aos@next
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loader/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, []);
  return <>{!isLoading ? <Layout /> : <Loading />}</>;
};

export default App;
