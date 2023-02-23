import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from "react";
function Navbar() {
  const { loggedUser, logout } = useContext(UserContext);
  return (
    <nav className="navbarcss">
      <div>
        {loggedUser ? (
          <div>
            <p>Welcome {loggedUser.email}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <NavLink to="/signup">Signup</NavLink>
            </div>
          </>
        )}
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {loggedUser && (
        <>
          <div>
            <NavLink to="/subjects">Subjects</NavLink>
          </div>
          <div>
            <NavLink to="/StateshookAndEvents">State Hook And Events</NavLink>
          </div>
          <div>
            <NavLink to="/CondicionalRendering">Condicional Rendering</NavLink>
          </div>
          <div>
            <NavLink to="/ListKey">List and Keys</NavLink>
          </div>
          <div>
            <NavLink to="/comments">Commments</NavLink>
          </div>
        </>
      )}
    </nav>
  );
}
export default Navbar;
