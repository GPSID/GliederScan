import { Link } from "react-router-dom";
import "./Sidebar.css"
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa";
import { MdAddLocation, MdPeopleAlt } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { RiVirusFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="/dashboard">
        <RiDashboardFill className="menu-icons" />
      </Link>
      <Link to="/attendance">
        <FaCalendarDay className="menu-icons" />
      </Link>
      <Link to="/allzones">
        <MdAddLocation className="menu-icons" />
      </Link>
      <MdLocationOn className="menu-icons" />
      <RiVirusFill className="menu-icons" />
      <Link to="/employees">
        <MdPeopleAlt className="menu-icons" />
      </Link>
      <IoMdBriefcase className="menu-icons" />
    </div>
  );
};
export default Sidebar;
