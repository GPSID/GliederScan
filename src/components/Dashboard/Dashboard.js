import { FaCalendarDay } from "react-icons/fa";
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import { MdPeopleAlt, MdLocationOn } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { GiNinjaMask } from 'react-icons/gi'
import { Link, Route } from "react-router-dom";
import "./Dashboard.css";

export const list = () => {
  return (
    <ul className="list-container">
      <li className="list-item">
        <div className="dashboard">
          <FaCalendarDay className="icon" />
          <div>
            <h1 className="list-heading">Total Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard">
          <TiTick className="icon" />
          <div>
            <h1 className="list-heading">Present Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard">
          <ImCross className="icon" />
          <div>
            <h1 className="list-heading">Absent Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <Link to='/total-customers'>
        <li className="list-item">
          <div className="dashboard">
            <MdPeopleAlt className="icon" />
            <div>
              <h1 className="list-heading">Total Customers</h1>
              <p className="list-desc">254</p>
            </div>
          </div>
        </li>
      </Link>
      <li className="list-item">
        <div className="dashboard">
          <GiNinjaMask className='icon' />
          <div>
            <h1 className="list-heading">Mask Detection</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard">
          <MdPeopleAlt className="icon" />
          <div>
            <h1 className="list-heading">Social Distancing</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard">
          <IoMdPersonAdd className="icon" />
          <div>
            <h1 className="list-heading">New Customers</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
      <li className="list-item">
        <div className="dashboard">
          <MdLocationOn className="icon" />
          <div>
            <h1 className="list-heading">Total Employees</h1>
            <p className="list-desc">254</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-profile-container">
        <img
          src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
          alt="profile"
          className="dashboard-profile-img"
        />
        <div className="dashboard-profile">
          <h1 className="dashboard-name">
            Good Morning, <span style={{ color: "#ef5350" }}>Siva Sankar</span>
          </h1>
          <p className="dashboard-location">Spar, Kothaguda, Hyderabad</p>
        </div>
      </div>
        {list()}

    </div>
  );
};
export default Dashboard;
