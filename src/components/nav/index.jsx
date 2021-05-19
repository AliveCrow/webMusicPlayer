import {NavLink} from 'react-router-dom';

import './nav.scss';

function Nav() {


  return (
    <header className="box-sd">
      <div className="nav-left ">
        <div className="logo">
          logo
        </div>
      </div>
      <div className="nav-right">
        <ul className="navbar">
          <li>
            <NavLink className="nav-text" activeClassName="selected-nav" to="/QQmusic/">QQ音乐</NavLink>
          </li>
          <li>
            <NavLink className="nav-text" activeClassName="selected-nav" to="/music163/">网易云音乐</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav;