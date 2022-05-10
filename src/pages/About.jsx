import { useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const About = () => {
  let query = useQuery();
  const showDetail = query.get("detail") === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>디테일 true 조건 확인</p>
      {showDetail && <p>detail 값을 true로 설정</p>}
      <Link to="/Home"></Link>
    </div>
  );
};
export default About;
