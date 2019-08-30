import React from "react";
import "./Component.css";
import { connect } from "react-redux";

import Task from "./Task";

// new Date()
// .toJSON()
// .slice(0, 10)
// .replace(/-/g, "/") +
// " " +
// Date.now().getTime()
var GetDate_Time = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + " " + time;
};

var ListTask = props => {
  return (
    <div className="ListTask">
      <div className="TaskTitle">
        <div className="col1" />
        <div className="col2">Title</div>
        <div className="col3">Content</div>
        <div className="col4">Updated Date</div>
      </div>
      {props.data.data.map((x, index) => (
        <Task
          keys={index}
          title={x.id}
          content={x.title}
          date={GetDate_Time()}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(ListTask);
