import React from "react";
import { Grid } from "@mui/material";
import homelogo from "../../assets/images/home-5-xxl.png";
import arrowRight from "../../assets/images/arrow-right-xxl.png";
import studentIcon from "../../assets/images/icons8-student-center-48.png";
function AddTeacher() {
  return (
    <div className="addSubject_container">
      {/* topbar section start */}
      <div className="addSubject_topbar">
        <div className="addSubject_topbar_firstIcon">
          <img src={homelogo} alt="HomeIcon" className="addSubject_homelogo" />
        </div>
        <div className="addSubject_topbar_SecondIcon">
          <img
            src={arrowRight}
            alt="HomeIcon"
            className="addSubject_homelogo"
          />
        </div>
        <div className="addSubject_topbar_secondTect">AddTeacher</div>
      </div>
      {/* topbar section end */}
      {/* student form section */}
      <div className="addSubject_studentForm">
        {/* student form topbar */}
        <div className="addSubject_studentForm_smalltopbar">
          <div className="addSubject_studentForm_logo">
            <img src={studentIcon} alt="student_icon" className="studentIcon" />
          </div>
          <div className="addSubject_studentForm_smalltopbar_text">
            Teacher Details
          </div>
        </div>
        {/* student form topbar end */}
        {/* student form body */}
        <div className="addSubject_studentForm_body">
          {/* addSubject material ui  grid for 8 fileds and 3 buttons */}

          <Grid container spacing={2} className="addSubject_grid1">
            <Grid item xs={12} sm={6} className="addSubject_grid2">
              <p>First name</p>
              <input type="text" className="addSubject_inputFiled" />
              {/* 
              onChange={(event) => setFirstName(event.target.value)}
               */}
            </Grid>
            <Grid item xs={12} sm={6} className="addSubject_grid2">
              <p>Last name</p>
              <input type="text" className="addSubject_inputFiled" />
              {/* 
              onChange={(event) => setFirstName(event.target.value)}
               */}
            </Grid>
            <Grid item xs={12} sm={6} className="addSubject_grid2">
              <p>Contact No</p>
              <input type="text" className="addSubject_inputFiled" />
              {/* 
              onChange={(event) => setFirstName(event.target.value)}
               */}
            </Grid>
            <Grid item xs={12} sm={6} className="addSubject_grid2">
              <p>Email</p>
              <input type="text" className="addSubject_inputFiled" />
              {/* 
              onChange={(event) => setFirstName(event.target.value)}
               */}
            </Grid>

            <Grid item xs={12} sm={6} className="addSubject_grid23">
              <button className="addSubject_save_button">Save</button>

              <button className="addSubject_save_button3">Reset</button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
