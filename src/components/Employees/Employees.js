import { BiDotsVerticalRounded } from "react-icons/bi";
import "./Employees.css";

const Employees = () => {
  return (
    <div className='employee-bg-container'>
    
      <div className="header-container">
        <h1 className="heading">Employee</h1>
        <button className="button">Create New</button>
      </div>
      <hr className="hr-line" />
      <div className="employee-header-container">
        <div className="employee-header">
          <h1 className="employee">Employee</h1>
          <p className="role">Role</p>
        </div>
      
      </div>
      <div className="employee-list-item">
        <div className="role-container">
          <div className="employee-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
              alt="employee"
              className="employee-img"
            />
            <p className="employee-name">Naveen Challa</p>
          </div>
          <p className="employee-role">Role</p>
        </div>
        <BiDotsVerticalRounded className="dots" />
      </div>
      <div className="employee-list-item">
        <div className="role-container">
          <div className="employee-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
              alt="employee"
              className="employee-img"
            />
            <p className="employee-name">Naveen Challa</p>
          </div>
          <p className="employee-role">Role</p>
        </div>
        <BiDotsVerticalRounded className="dots" />
      </div>
      <div className="employee-list-item">
        <div className="role-container">
          <div className="employee-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
              alt="employee"
              className="employee-img"
            />
            <p className="employee-name">Naveen Challa</p>
          </div>
          <p className="employee-role">Role</p>
        </div>
        <BiDotsVerticalRounded className="dots" />
      </div>
      <div className="employee-list-item">
        <div className="role-container">
          <div className="employee-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
              alt="employee"
              className="employee-img"
            />
            <p className="employee-name">Naveen Challa</p>
          </div>
          <p className="employee-role">Role</p>
        </div>
        <BiDotsVerticalRounded className="dots" />
      </div>
      <div className="employee-list-item">
        <div className="role-container">
          <div className="employee-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
              alt="employee"
              className="employee-img"
            />
            <p className="employee-name">Naveen Challa</p>
          </div>
          <p className="employee-role">Role</p>
        </div>
        <BiDotsVerticalRounded className="dots" />
      </div>
      <div className="employee-list-item">
        <div className="role-container">
          <div className="employee-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
              alt="employee"
              className="employee-img"
            />
            <p className="employee-name">Naveen Challa</p>
          </div>
          <p className="employee-role">Role</p>
        </div>
        <BiDotsVerticalRounded className="dots" />
      </div>
      </div>
      
    
  )
}
export default Employees