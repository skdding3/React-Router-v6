import { NavLink } from "react-router-dom";

const activeStyle = { color: "green" };

function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Profile/1"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?detail=true"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          /about?detail=true
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
