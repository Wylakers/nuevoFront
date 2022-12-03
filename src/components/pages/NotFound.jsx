import React from "react";
import Layout from "../layout";
import NotFoundError from "../Historias/404";

const NotFound = () => {
  return (
    <>
      <Layout main={<NotFoundError />} />
    </>
  );
};

export default NotFound;
