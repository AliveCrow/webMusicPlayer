import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Progress, Spin } from 'shineout';
import './player.scss';
import PlayList from './components/play_list';
import PlayLyric from './components/play_lyric';
import MusicPlayerQQ from "./components/player";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    playList: [],
    isPlaying: null,
    loading: true,
    player: {
      songInfo: null,
      loading: false,
      url: ''
    }
  }

  getPlayList() {
    axios.get(`/recommend/newSong`).then(res => {
      this.setState({
        playList: res.data.list,
        loading: false
      })
    })
  }


  componentDidMount() {
    this.getPlayList()
  }
  componentDidUpdate(){
    this.PlayList.scrollTop = 60 * window.currentIndex
  }

  setPlayUrl = (songInfo, index) => {
    this.setState({
      player: {
        ...songInfo,
        url: '',
        loading: true,
        isPlaying: index
      }
    })
    axios.get(`/song/url?id=${songInfo.mid}`).then(res => {
      this.setState({
        player: {
          ...songInfo,
          url: res.url,
          loading: false
        }
      }, () => {
        window.audio.src = res.url
        window.audio.autoplay = true;
        
      })
    })
  }
  scrollToAnchor = (anchorName) => {
    
  }
  render() {
    return (
      <Fragment>
        <MusicPlayerQQ playerInfo={this.state.player} />
        <div className="poly-music-content">
          <div  className="poly-music-content-left"  ref={(ref)=>{this.PlayList = ref}}>
            <PlayList isPlaying={this.state.isPlaying} setPlayUrl={this.setPlayUrl} loading={this.state.loading} playList={this.state.playList}></PlayList>
          </div>
          <div className="poly-music-content-right">
            <PlayLyric></PlayLyric>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default Player;