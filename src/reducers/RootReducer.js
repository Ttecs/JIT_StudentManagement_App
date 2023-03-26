import { combineReducers } from "redux";
import StudentInfoReducer from "./StudentinfoReducer";

const RootReducer = combineReducers({
  student_info: StudentInfoReducer,
});

export default RootReducer;
