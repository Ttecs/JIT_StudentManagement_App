import { STUDENTS, getCommonAxios } from "./Apis";

//create a callback method that handle the request for post a student in axios
export const createStudent = (data, callback) => {
  console.log("data", data);
  let datamodel = {
    FirstName: data.firstName,
    LastName: data.lastName,
    ContactPerson: data.contactPerson,
    ContactNo: data.contactNo,
    EmailAddress: data.email,
    DateOfBirth: data.dateOfBirth,
    Age: data.age,
    ClassroomID: parseInt(data.selectedValue),
  };

  getCommonAxios()
    .post(STUDENTS, datamodel)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};

export const getStudents = (callback) => {
  getCommonAxios()
    .get(STUDENTS)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK_GET");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};

export const deleteStudent = (id, callback) => {
  getCommonAxios()
    .delete(STUDENTS + "/" + id)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK_DELETE");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};

export const updateStudent = (data, callback) => {
  console.log("data", data);
  let datamodel = {
    FirstName: data.firstName,
    LastName: data.lastName,
    ContactPerson: data.contactPerson,
    ContactNo: data.contactNo,
    EmailAddress: data.email,
    DateOfBirth: data.dateOfBirth,
    Age: data.age,
    ClassroomID: parseInt(data.selectedValue),
  };

  getCommonAxios()
    .patch(STUDENTS + "/" + data.studentId, datamodel)
    .then((response) => {
      console.log("response", response);
      callback(response, "OK_UPDATE");
    })
    .catch((error) => {
      console.log("error", error);
      callback(error, "ERROR");
    });
};
