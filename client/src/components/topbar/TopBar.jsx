import "./topbar.css";
import profilePic from "../../assets/profile.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

  }
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-medium"></i>
        </div>
        <div className='topCenter'>
              <ul className='topList'>
                  <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                  <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                  <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                  <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>  
        </div>
      <div className='topRight'>
        {user ? (
          <img
              className="topImage"
              src={user.profilePic}
              alt="" />
        ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
        )
        }
              
              <i className="topSearchIcon fas fa-search"></i>
          </div>
    </div>
  )
}
