import './header.css'
import homeImage from '../../assets/sunset.jpg';

export default function Header() {
  return (
    <div className="header">
          <div className="headerTitles">
              <span className='headerTitleSm'>React and Node</span>
              <span className='headerTitleLg'>Blog</span>
          </div>
          <img className='headerImage' src={homeImage} alt='' />
    </div>
  )
}
