import "./style.scss";
import { useNavigate } from "react-router-dom";
import signin from "./images/signin.jpg";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../firebase/AuthProvider";
import { useRef } from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

const Login = ({ showAlert }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useUserAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(emailRef.current.value, passwordRef.current.value).then(
        (response) => {
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          history("/");
          showAlert("Login successfully", "success");
          console.log(response.message);
        }
      );
    } catch (error) {
      showAlert("Invalid credentials", "error");

      console.log(error.message);
    }
  };
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signin} alt="sing up " />
                <Link to="/signup" className="signup-image-link">
                  Create an account
                </Link>
              </figure>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                  <label htmlFor="your_email">
                    <EmailIcon sx={{ fontSize: "20px" }} />
                  </label>
                  <input type="email" ref={emailRef} placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <LockIcon sx={{ fontSize: "20px" }} />
                  </label>
                  <input
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" className="form-submit" value="Log in" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
