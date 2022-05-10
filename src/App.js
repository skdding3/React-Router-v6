import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./pages/Links";

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        {/* 라우트 사용 */}
        {/* v6 변경점으로 element 안에 <Home /> 이런식으로 넣어준다. */}
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        {/* 낫파운드 v6 적용 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
