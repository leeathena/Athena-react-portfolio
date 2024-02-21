import "../styles/Avatar.css";
import athenaAvatar from "../images/Athena-avatar.png"; 



function Avatar() {
  return (
    <div className="avatar"> 
      <h1>Athena Lee</h1>
      <img src={athenaAvatar} alt="Athena Avatar" />
    </div>
    );
  }


export default Avatar;
