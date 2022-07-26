import React from "react";
import "./Popup.scss";

interface Props {
  comp: JSX.Element;
}

const createPopup = (props: Props): React.ReactElement => {
  const { comp: Body } = props;
  return (
    <div className="popUpContainer">
      <div className="popup-content">{Body} </div>
    </div>
  );
};

export default createPopup;
