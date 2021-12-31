import React from "react";
import web from "../src/images/log-in-girl.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your bussiness with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
