import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgrees from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgrees
});

export default rootReducer;
