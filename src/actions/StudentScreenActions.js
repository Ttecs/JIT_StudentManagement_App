import { LOAD_CLASSROOM_DATA, LOAD_STUDENT_DATA } from "./ActionTypes";

export function StudentDataLoading(data) {
  console.log("Action : StudentScreenLoading - progress_message : ", data);

  return {
    type: LOAD_STUDENT_DATA,
    data: data,
  };
} // end of StudentDataLoading

export function classroomDataLoading(data) {
  console.log("Action : StudentScreenLoading - progress_message : ", data);

  return {
    type: LOAD_CLASSROOM_DATA,
    data: data,
  };
} // end of StudentDataLoading
