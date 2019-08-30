export var reducerShowNewTask = (state = false, action) => {
  switch (action.type) {
    case "SET_SHOW_NEWTASK":
      return !state;
    default:
      return state;
  }
};

export var reducerShowEditTask = (state = false, action) => {
  switch (action.type) {
    case "SET_SHOW_EDITTASK":
      return !state;
    default:
      return state;
  }
};
export var reducerIdEditTask = (state = null, action) => {
  switch (action.type) {
    case "SET_ID_EDITTASK":
      return action.keys;
    default:
      return state;
  }
};

var defaultFetchTask = {
  data: [],
  err: null
};

export var reducerFecthTask = (state = defaultFetchTask, action) => {
  switch (action.type) {
    case "REQUEST_TASK":
      return state;
    case "FETCHTASK_SUCCESS":
    case "ADD_TASK":
      return { ...state, data: action.res.concat(state.data) };
    case "FETCHTASK_FAIL":
      return { ...state, err: action.err };
    case "EDIT_TASK":
      return {
        ...state,
        data: state.data.map((x, index) =>
          index === action.keys
            ? { ...x, id: action.newTitle, title: action.newContent }
            : x
        )
      };
      
    case "SET_REMOVE":
      return {
        ...state,
        data: state.data.filter((x, index) => index !== action.keys)
      };
      case "SET_SEARCH":
      return {
        ...state,
        data: state.data.filter(x => x.title.includes(action.sort))
      };
    default:
      return state;
  }
};
