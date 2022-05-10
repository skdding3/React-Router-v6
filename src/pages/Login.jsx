import LoginButton from "../components/LoginButton";

// function Login() {
//   const navigate = useNavigate();

//   function login() {
//     setTimeout(() => {
//       navigate("/"); //v5 props.history.push
//     }, 1000);
//   }
function Login() {
  return (
    <div>
      <h2>Login 페이지</h2>
      <LoginButton />
    </div>
  );
}

export default Login;
