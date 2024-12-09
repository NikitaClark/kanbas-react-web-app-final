import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import axios from "axios"; // Import axios

export default function Signin() {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const response = await axios.post(`${REMOTE_SERVER}/api/users/signin`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        const user = response.data; // Assuming the API returns the user data
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      // You can display an error message to the user if necessary
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h1>Sign in</h1>
      <input
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2"
        placeholder="Username"
        id="wd-username"
      />
      <input
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-2"
        placeholder="Password"
        type="password"
        id="wd-password"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="d-block text-center mt-3">
        Sign up
      </Link>
    </div>
  );
}
