import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const ViewReceipt = () => {

  return (
    <div className="back-btn">
    <Link to="/">
      <ArrowBackIcon /> Back home
    </Link>
    <div>
        <embed src="https://pdf-node.herokuapp.com/api/fetch-pdf" width="100%" height="1000px" />
    </div>
  </div>

  );
};

export default ViewReceipt;
