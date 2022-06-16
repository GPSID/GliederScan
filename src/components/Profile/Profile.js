import "./Profile.css";

import { useState } from "react";

const Profile = () => {
  const initialState = {
    name: "",
    email: "",
    location: "",
    company: "",
    branch: "",
    loginId: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="profile-container">
      <div className="profile-header-container">
        <h1 className="profile-heading">Profile</h1>
        <button type="button" className="edit-button">
          Edit
        </button>
      </div>
      <div className="profile-details-container">
        <img
          src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png"
          alt="profile"
          className="profile-img"
        />
        <div className="profile-details">
          <h1 className="sub-heading">Personal Details </h1>
          <hr className="hr-line" />
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="label">Name</label>
              <input
                className="input"
                name="name"
                value={state.name}
                onChange={handleChange}
                type="text"
                placeholder="Name.."
              />
            </div>
            <div className="input-container">
              <label className="label">Email</label>
              <input
                className="input"
                name="email"
                value={state.email}
                onChange={handleChange}
                type="text"
                placeholder="E-Mail.."
              />
            </div>
            <div className="input-container">
              <label className="label">Location</label>
              <input
                className="input"
                name="location"
                value={state.location}
                onChange={handleChange}
                type="email"
                placeholder="Location.."
              />
            </div>
            <h1 className="sub-heading">Company Details</h1>
            <hr className="hr-line" />
            <div className="input-container">
              <label className="label">Company</label>
              <input
                className="input"
                name="company"
                value={state.company}
                onChange={handleChange}
                placeholder="Company.."
              />
            </div>
            <div className="input-container">
              <label className="label">Branch</label>
              <input
                className="input"
                name="branch"
                value={state.branch}
                onChange={handleChange}
                placeholder="Branch.."
              />
            </div>
            <h1 className="sub-heading">Account Details</h1>
            <hr className="hr-line" />
            <div className="input-container">
              <label className="label">Login Id</label>
              <input
                className="input"
                name="loginId"
                value={state.loginId}
                onChange={handleChange}
                placeholder="LoginId.."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
