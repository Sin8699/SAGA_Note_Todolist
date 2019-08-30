import React from "react";
import "./App.css";
// import { connect } from "react-redux";
import ListTask from "./Componnet/ListTask";
import AddTask from "./Componnet/AddTask";
import NewTask from "./Componnet/NewTask";
import EditTask from "./Componnet/EditTask";
import { connect } from "react-redux";


var App = props => {
  return (
    <div className="App">
      <div
        className="contain_Opacity"
        style={props.showNewTask || props.showEditTask ? { opacity: "0.2" } : { opacity: "1" }}
      >
        <div className="title">
          <i
            class="fa fa-address-book-o"
            aria-hidden="true"
            onClick={() => {
              props.dispatch({ type: "REQUEST_TASK"});
            }}
          />
          <p>NOTE WORX</p>
        </div>
        <AddTask />
        <ListTask />
      </div>
      {props.showNewTask && (
        <div className="background_NewTask" id="background">
          <NewTask />
        </div>
      )}
       {props.showEditTask && (
        <div className="background_EditTask">
          <EditTask />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showNewTask: state.showNewTask,
    showEditTask:state.showEditTask,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: () => dispatch({ type: "API_CALL_REQUEST" })
//   };
// };connect(mapStateToProps, mapDispatchToProps)

export default connect(mapStateToProps)(App);
