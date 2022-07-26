import React from "react";
import "./PageSpinner.scss";

function PageSpinner(): React.ReactElement {
  return (
    <div className="loader">
      <div className="inner"></div>
    </div>
  );
}

export default PageSpinner;
