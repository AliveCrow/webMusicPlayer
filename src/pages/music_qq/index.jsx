import { NavLink, Route, Redirect } from 'react-router-dom';
import { Carousel, Spin } from 'shineout';


import './music_qq.scss';
import Home from '@pages/music_qq/home';
import Rank from '@pages/music_qq/rank';
import Daily from '@pages/music_qq/daily';
import MyMusic from '@pages/music_qq/my_music';
import Player from '@pages/music_qq/player';



function MusicQQ() {
  return (
    <div className="qq-music">
      <div className="poly-music-sidebar">
        <h2 className="qq-music-left-nav-title">QQ音乐</h2>
        <ul>
          <li className="qq-music-left-nav-li" >
            <NavLink className="qq-music-nav-text" activeClassName="qq-music-active-nav" to="/QQmusic/home">音乐馆</NavLink>
          </li>
          <li className="qq-music-left-nav-li">
            <NavLink className="qq-music-nav-text" activeClassName="qq-music-active-nav" to="/QQmusic/rank">排行榜</NavLink>
          </li>
          <li className="qq-music-left-nav-li">
            <NavLink className="qq-music-nav-text" activeClassName="qq-music-active-nav" to="/QQmusic/daily">日推</NavLink>
          </li>
          <li className="qq-music-left-nav-li">
            <NavLink className="qq-music-nav-text" activeClassName="qq-music-active-nav" to="/QQmusic/my-music">我的音乐</NavLink>
          </li>
          <li className="qq-music-left-nav-li">
            <NavLink className="qq-music-nav-text" activeClassName="qq-music-active-nav" to="/QQmusic/player">Player</NavLink>
          </li>
        </ul>
      </div>
      <div className="poly-music-main">
        <Route path="/QQmusic/home" component={Home} />
        <Route path="/QQmusic/rank" component={Rank} />
        <Route path="/QQmusic/daily" component={Daily} />
        <Route path="/QQmusic/my-music" component={MyMusic} />
        <Route path="/QQmusic/player" component={Player} />
      </div>
    </div>
  )
}

export default MusicQQ