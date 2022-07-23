import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import pic from "./images/signup.jpg";
import { useRef } from "react";
import { useUserAuth } from "../../firebase/AuthProvider";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
const SignUp = ({ showAlert }) => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signUp } = useUserAuth();

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(emailRef.current.value, passwordRef.current.value).then(
        (response) => {
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          history("/");
          showAlert("Sign Up Succefully", "success");
          console.log(response);
        }
      );
    } catch (error) {
      showAlert("Email Already in Use", "warning");
      console.log(error.message);
    }
  };

  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group" id="email">
                  <label htmlFor="username">
                    <PersonIcon sx={{ fontSize: "20px" }} />
                  </label>
                  <input
                    type="text"
                    ref={userNameRef}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group" id="email">
                  <label htmlFor="email">
                    <EmailIcon sx={{ fontSize: "20px" }} />
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group" id="password">
                  <label htmlFor="password">
                    <LockIcon sx={{ fontSize: "20px" }} />
                  </label>
                  <input
                    type="password"
                    ref={passwordRef}
                    required
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                </div>
                {/* <div className="form-group" id="password-confirm">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    ref={passwordConfirmRef}
                    required
                    placeholder="Confirm Password"
                  />
                </div> */}
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={pic} alt="loading..." />
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
