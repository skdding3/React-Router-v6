import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return <div>#{id}번째 포스트 입니다.</div>;
};

export default Profile;
