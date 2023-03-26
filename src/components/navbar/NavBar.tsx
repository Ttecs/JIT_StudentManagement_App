import React from "react";
import "./NavBar.scss";

// type Props = {}

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="list">
          <div className="logo">
            <span className="text">JIT</span>
          </div>
        </a>
        <div className="lists">
          {/* link button to AddClassRoom */}

          <a href="/addclassroom" className="list">
            AddClassRoom
          </a>
          <a href="/addsubject" className="list">
            AddSubject
          </a>
          <a href="/addteacher" className="list">
            AddTeacher
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
