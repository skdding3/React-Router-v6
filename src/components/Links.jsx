import { Link } from "react-router-dom";

function Links() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Profile">Profile</Link>
      </li>
      <li>
        <Link to="/Profile/1">Profile/1</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/about?detail=true">/about?detail=true</Link>
      </li>
    </ul>
  );
}

export default Links;
