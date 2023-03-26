// import { useState } from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import AddStudentDetails from "./pages/add/AddStudentDetails";
import AddClassRoom from "./pages/addClassRoom/AddClassRoom";
import AddSubject from "./pages/AddSubject/AddSubject";
import AddTeacher from "./pages/addTeacher/AddTeacher";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddStudentDetails />} />
          <Route path="/addclassroom" element={<AddClassRoom />} />
          <Route path="/addsubject" element={<AddSubject />} />
          <Route path="/addteacher" element={<AddTeacher />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
