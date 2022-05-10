import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home 입니다.</h2>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
