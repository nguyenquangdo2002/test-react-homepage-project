import React, { useContext } from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import Snowfall from "react-snowfall";
import { SettingsContext } from "./snow.tsx";

function Home() {
  const { color, snowflakeCount, setColor, setSnowflakeCount } =
    useContext(SettingsContext);

  return (
    <>
      <Snowfall color={color} snowflakeCount={snowflakeCount} />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
