import { Link } from "react-router-dom";
import "./Sidebar.css"
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa";
import { MdAddLocation, MdPeopleAlt } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { RiVirusFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";
import { useState } from "react";
import Popup from "reactjs-popup";


const Sidebar = () => {

  const [isHoveringDashboard, setIsHoveringDasboard] = useState(false);
  const [isHoveringAttendance, setIsHoveringAttendance] = useState(false);


  const mouseOver = () => {
    setIsHoveringDasboard(true)
    setIsHoveringAttendance(true)

  }
  const mouseOut = () => {
    setIsHoveringDasboard(false)
    setIsHoveringAttendance(false)

  }
  return (
    <div className="sidebar-container">
      <Link to="/dashboard">
        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <RiDashboardFill className="menu-icons" />
          {isHoveringDashboard &&
            <span style={{ color: '#ffffff' }}>dashboard</span>
          }
        </div>
      </Link>
      <Link to="/attendance">
        <div>
          <FaCalendarDay className="menu-icons" />
          {isHoveringAttendance &&
            <span style={{ color: '#ffffff' }}>attendance</span>
          }
        </div>
      </Link>
      <Link to="/allzones">
        <div>
          <MdAddLocation className="menu-icons" />
          {/* {isHovering &&
            <span style={{ color: '#ffffff' }}>allzones</span>
          } */}
        </div>
      </Link>
      <MdLocationOn className="menu-icons" />
      <RiVirusFill className="menu-icons" />
      <Link to="/employees">
        <div>
          <MdPeopleAlt className="menu-icons" />
          {/* {isHovering &&
            <span style={{ color: '#ffffff' }}>employees</span>
          } */}
        </div>
      </Link>
      <IoMdBriefcase className="menu-icons" />
    </div>
  );
};
export default Sidebar;
