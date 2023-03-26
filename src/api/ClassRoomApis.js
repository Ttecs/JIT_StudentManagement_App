import { CLASSROOMS, getCommonAxios } from "./Apis";

export const getClssRooms = (callback) => {
  getCommonAxios()
    .get(CLASSROOMS)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK_GET_ClassRooms");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};

//post a class room
export const postClassRoom = (classRoom, callback) => {
  getCommonAxios()
    .post(CLASSROOMS, classRoom)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK_POST_ClassRoom");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};
