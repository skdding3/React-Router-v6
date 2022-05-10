import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  function login() {
    setTimeout(() => {
      //페이지 이동 v6
      navigate("/");
    }, 1000);
  }

  return <button onClick={login}>Login</button>;
}

export default LoginButton;
