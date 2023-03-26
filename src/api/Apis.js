import axios from "axios";
export const BASE_URL = "https://dotnetapi20230325232056.azurewebsites.net";
export const STUDENTS = "/api/Student";
export const CLASSROOMS = "/api/Classroom";

export const getCommonAxios = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
