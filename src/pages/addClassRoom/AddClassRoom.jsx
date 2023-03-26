import React from "react";
import { Grid } from "@material-ui/core";
import homelogo from "../../assets/images/home-5-xxl.png";
import arrowRight from "../../assets/images/arrow-right-xxl.png";
import studentIcon from "../../assets/images/icons8-student-center-48.png";
import "./AddClassRoom.scss";
import { postClassRoom } from "../../api/ClassRoomApis";

function AddClassRoom() {
  const [classRoom, setClassRoom] = React.useState("");

  const callback = (response) => {
    console.log("response", response);
    if (response.status === 200) {
      alert("ClassRoom Added Successfully");
    }
  };
  const handleSubmit = () => {
    console.log("classRoom", classRoom);
    let data = {
      classroomName: classRoom,
    };

    postClassRoom(data, callback);
  };
  return (
    <div className="addClass_container">
      {/* topbar section start */}
      <div className="addClass_topbar">
        <div className="addClass_topbar_firstIcon">
          <img src={homelogo} alt="HomeIcon" className="addClass_homelogo" />
        </div>
        <div className="addClass_topbar_SecondIcon">
          <img src={arrowRight} alt="HomeIcon" className="addClass_homelogo" />
        </div>
        <div className="addClass_topbar_secondTect">addClassClassRoom</div>
      </div>
      {/* topbar section end */}
      {/* student form section */}
      <div className="addClass_studentForm">
        {/* student form topbar */}
        <div className="addClass_studentForm_smalltopbar">
          <div className="addClass_studentForm_logo">
            <img src={studentIcon} alt="student_icon" className="studentIcon" />
          </div>
          <div className="addClass_studentForm_smalltopbar_text">
            Classroom Details
          </div>
        </div>
        {/* student form topbar end */}
        {/* student form body */}
        <div className="addClass_studentForm_body">
          {/* addClass material ui  grid for 8 fileds and 3 buttons */}

          <Grid container spacing={2} className="addClass_grid1">
            <Grid item xs={12} sm={6} className="addClass_grid2">
              <p>ClassRoom name</p>
              <input
                type="text"
                className="addClass_inputFiled"
                onChange={(event) => setClassRoom(event.target.value)}
                value={classRoom}
              />
              {/* 
              onChange={(event) => setFirstName(event.target.value)}
               */}
            </Grid>

            <Grid item xs={12} sm={6} className="addClass_grid23">
              <button
                className="addClass_save_button"
                onClick={() => handleSubmit()}
              >
                Save
              </button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AddClassRoom;
