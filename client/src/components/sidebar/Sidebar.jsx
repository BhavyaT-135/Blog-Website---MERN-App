import './sidebar.css';
import aboutPic from '../../assets/about.jpeg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, [])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src={aboutPic} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget egestas nisi nisi eget nisi.</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cats=${c.name}`} className="link">
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-medium"></i> 
        </div>
      </div>
    </div>
  )
}
