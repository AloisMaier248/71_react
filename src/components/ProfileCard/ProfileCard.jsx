import "./styles.css";
import { userData } from "./data";

function ProfileCard() {
  const { avatar, name, profession, hobby } = userData;
  //   const avatar = userData.avatar

  return (
    <div className="profile-card-wrapper">
      <h3>{name}</h3>
      <img src={avatar} alt="Jaromir Jagr" />
      <div>{profession}</div>
      <div>{hobby}</div>
    </div>
  );
}

export default ProfileCard;