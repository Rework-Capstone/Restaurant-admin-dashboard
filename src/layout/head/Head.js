import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>{props.title ? props.title + " m| " : null} Bistro React Admin Template</title>
    </Helmet>
  );
};
export default Head;
