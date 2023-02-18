import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePaswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleSubmitForm(event) {
    console.log("Im here")
    event.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("response", response.data);
      localStorage.setItem("authToken", response.data.authToken);
      //Setting the logged user in the context
      authenticateUser();
      toast.success("User logged in");
      navigate("/");
    } catch (e) {
      toast.error(`Invalid login`);
      console.log("err")
    }
  }
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={handlePaswordChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/signup">Signup</Link>
    </>
  );
}
export default Login;