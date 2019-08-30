import React from "react";
import "./Component.css";

var ErrorInput = (props) => {
  return (
    <div className="ErrorInput">
      <div className="tilte">
        {props.children}
      </div>
      <i class="fa fa-close" />
    </div>
  );
};

export default ErrorInput;
