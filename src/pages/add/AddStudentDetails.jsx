import React, { useState } from "react";
import "./AddStudentDetails.scss";
import homelogo from "../../assets/images/home-5-xxl.png";
import arrowRight from "../../assets/images/arrow-right-xxl.png";
import studentIcon from "../../assets/images/icons8-student-center-48.png";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@material-ui/core";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "./../../api/StudentApis";
import { bindActionCreators } from "redux";
import {
  StudentDataLoading,
  classroomDataLoading,
} from "../../actions/StudentScreenActions";
import { connect } from "react-redux";
import { getClssRooms } from "../../api/ClassRoomApis";

function AddStudentDetails(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(30);
  const [selectedValue, setSelectedValue] = useState("");
  const [students2, setStudents] = useState([]);
  const [flag, setFlag] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [options, setOptions] = useState([]);

  //map the  props.student_info.classRoom_data
  React.useEffect(() => {
    console.log("props.student_info.classRoom_data", props.student_info);
    if (props.student_info.classRoom_data) {
      const options = props.student_info.classRoom_data.map((item) => {
        return { value: item.classroomID, label: item.classroomName };
      });
      setOptions(options);
    }
  }, []);

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  const callback = (res, status) => {
    if (status == "OK") {
      setFirstName("");
      setLastName("");
      setContactPerson("");
      setContactNo("");
      setEmail("");
      setDateOfBirth("");
      setAge(30);
      setSelectedValue("");
      alert("Student Created Successfully");
      //clear evry value from input fields
    } else if (status == "OK_GET") {
      setStudents(res.data);
      props.Load_StudentData(res.data);

      console.log("res.data", res.data);
    } else if (status == "OK_DELETE") {
      setFlag(!flag);
      alert("Student Deleted Successfully");
    } else if (status == "OK_UPDATE") {
      setFlag(!flag);
      alert("Student Updated Successfully");
    } else if (status == "OK_GET_ClassRooms") {
      console.log("classroom", res.data);
      props.Load_ClassRoomData(res.data);
    } else {
      alert("Student Creation Failed");
    }
    console.log(res);
  };

  React.useEffect(() => {
    props.student_info.student_data.length == 0 ? getStudents(callback) : null;

    getClssRooms(callback);
  }, [flag]);

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      contactPerson,
      contactNo,
      email,
      dateOfBirth,
      age,
      selectedValue,
    };
    console.log(data);
    //call for createStudent api
    createStudent(data, callback);
  };

  const handleDelete = () => {
    console.log("delete");
    const entereid = prompt("Please enter Student ID");
    deleteStudent(entereid, callback);
  };

  const handleEdit = () => {
    console.log("edit");
    const data = {
      firstName,
      lastName,
      contactPerson,
      contactNo,
      email,
      dateOfBirth,
      age,
      selectedValue,
      studentId,
    };
    console.log("update data", data);
    updateStudent(data, callback);
  };

  const handleRowClick = (row) => {
    console.log("row", row.dateOfBirth);
    setFirstName(row.firstName);
    setLastName(row.lastName);
    setContactPerson(row.contactPerson);
    setContactNo(row.contactNo);
    setEmail(row.emailAddress);
    setDateOfBirth(row.dateOfBirth);
    setAge(row.age);
    setSelectedValue(row.classroomID);
    setStudentId(row.studentID);
  };
  return (
    <div className="add_container">
      {/* topbar section start */}
      <div className="add_topbar">
        <div className="add_topbar_firstIcon">
          <img src={homelogo} alt="HomeIcon" className="add_homelogo" />
        </div>
        <div className="add_topbar_SecondIcon">
          <img src={arrowRight} alt="HomeIcon" className="add_homelogo" />
        </div>
        <div className="add_topbar_secondTect">Students</div>
      </div>
      {/* topbar section end */}
      {/* student form section */}
      <div className="add_studentForm">
        {/* student form topbar */}
        <div className="add_studentForm_smalltopbar">
          <div className="add_studentForm_logo">
            <img src={studentIcon} alt="student_icon" className="studentIcon" />
          </div>
          <div className="add_studentForm_smalltopbar_text">
            Student Details
          </div>
        </div>
        {/* student form topbar end */}
        {/* student form body */}
        <div className="add_studentForm_body">
          {/* add material ui  grid for 8 fileds and 3 buttons */}

          <Grid container spacing={2} className="add_grid1">
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>First name</p>
              <input
                value={firstName}
                type="text"
                className="add_inputFiled"
                onChange={(event) => setFirstName(event.target.value)}
              />
              {/* 
                onChange={(event) => setFirstName(event.target.value)}
                 */}
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>Last name</p>
              <input
                value={lastName}
                type="text"
                className="add_inputFiled"
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>Contact Person</p>
              <input
                value={contactPerson}
                type="text"
                className="add_inputFiled"
                onChange={(event) => setContactPerson(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>Contact No</p>
              <input
                value={contactNo}
                type="number"
                className="add_inputFiled"
                onChange={(event) => setContactNo(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>Email Address</p>
              <input
                value={email}
                type="email"
                className="add_inputFiled"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>Date of Birth</p>
              <input
                value={dateOfBirth}
                type="date"
                className="add_inputFiled"
                onChange={(event) => setDateOfBirth(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid2">
              <p>Class Room</p>

              <select
                value={selectedValue}
                onChange={handleChange}
                className="add_inputFiled"
              >
                <option value="">Select an option</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={12} sm={6} className="add_grid23">
              <button className="add_save_button" onClick={() => onSubmit()}>
                Save
              </button>
              <button
                className="add_save_button2"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
              <button className="add_save_button3" onClick={() => handleEdit()}>
                Update
              </button>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* student form section */}
      <div className="add_studentForm2">
        {/* student form topbar */}
        <div className="add_studentForm_smalltopbar2">
          <div className="add_studentForm_logo2">
            <img
              src={studentIcon}
              alt="student_icon"
              className="studentIcon2"
            />
          </div>
          <div className="add_studentForm_smalltopbar_text2">
            Existing Students
          </div>
        </div>
        {/* student form topbar end */}
        {/* student form body */}
        <div className="add_studentForm_body2">
          {/* add material ui  grid for 8 fileds and 3 buttons */}
          {/* create a table with 4 columns and map with data */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="left">FirstName</StyledTableCell>
                  <StyledTableCell align="left">LastName</StyledTableCell>
                  <StyledTableCell align="left">ContactPerson</StyledTableCell>
                  <StyledTableCell align="left">ContactNo</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.student_info.student_data.length != 0 ? (
                  props.student_info.student_data.map((row) => (
                    <StyledTableRow
                      key={row.studentID}
                      onClick={() => handleRowClick(row)}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.studentID}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.contactPerson}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.contactNo}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <div className="add_studentForm_body2_text">
                    No Data Found
                  </div>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  student_info: state.student_info,
});

const mapDispatchToProps = (dispatch) => ({
  Load_StudentData: bindActionCreators(StudentDataLoading, dispatch),
  Load_ClassRoomData: bindActionCreators(classroomDataLoading, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentDetails);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#999ca1",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
