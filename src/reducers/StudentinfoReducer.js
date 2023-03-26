import { LOAD_CLASSROOM_DATA, LOAD_STUDENT_DATA } from "../actions/ActionTypes";

const initialState = {
  student_data: [],
  classRoom_data: [],
};

const StudentInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENT_DATA:
      console.log("Reducer : LOAD_STUDENT_DATA - action.data : ", action.data);
      return {
        ...state,
        student_data: action.data,
      };
    case LOAD_CLASSROOM_DATA:
      console.log(
        "Reducer : LOAD_CLASSROOM_DATA - action.data : ",
        action.data
      );
      return {
        ...state,
        classRoom_data: action.data,
      };

    default:
      return state;
  }
};

export default StudentInfoReducer;
