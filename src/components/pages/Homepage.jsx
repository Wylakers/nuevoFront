import React from "react";
import Layout from "../layout";
import Home from "../Historias/Home";

const Homepage = () => {
  return (
    <>
      <Layout main={<Home />} isHome={true} />
    </>
  );
};

export default Homepage;
