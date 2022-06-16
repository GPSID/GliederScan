import { useState } from "react";
import Cookies from "js-cookie";
import Header from "../Header/Header";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
  };
  const history = useHistory();
  const [state, setState] = useState(initialState);

  const onChangeUsername = (event) => {
    setState({ ...state, username: event.target.value });
  };

  const onChangePassword = (event) => {
    setState({ ...state, password: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data =  await response.json();
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };
  const onSubmitFailure = (errorMsg) => {
    setState({ showSubmitError: true, errorMsg });
  };

  return (
    <>
      <Header />
      <div className="bg-container">
        <div className="login-container">
          <h1 className="social-dist-heading">
            Ensuring Social Distancing During
            <span style={{ color: "#ef5350" }}> Covid 19</span>
          </h1>
          <form className="form-container" onSubmit={submitForm}>
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              onChange={onChangeUsername}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
            <div className="forget-container">
              <Link to="/forgot" style={{ textDecoration: "none" }}>
                <p className="forgot">Forgot Password ?</p>
              </Link>
              <button className="login-button" type="submit">
                SIGN IN
              </button>
            </div>
            {state.showSubmitError && (
              <p className="err-msg">{state.errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
