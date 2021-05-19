import React, { useState } from 'react';
import axios from '@libs/axiosLibs';
import classnames from 'classnames';
import { Carousel, Spin } from 'shineout';
import './home.scss';

import AreaList from './components/area_list';
import NewSongList from './components/new_song_list';
import HotSongList from './components/hot_song_list';

const duration = 5000
const containerStyle = {
  fontSize: 40,
  color: '#fff',
  display: 'flex',
  margin: 'auto',
}

const items = ['S', 'H', 'I', 'N', 'E']

function indicatorSwitch(current, moveTo) {
  return (
    <div className="indicator">
      {items.map((item, index) => {
        const isActive = current === index
        const itemClassname = classnames('indicator-item', isActive && 'active')
        const animationStyle = isActive ? { animation: `indicator-rise ${duration / 1000}s linear` } : {}
        return (
          <div key={item} onClick={() => moveTo(index)} className={itemClassname} >
            <div className="indicator-progress">
              <div className="fg" style={animationStyle} />
              <div className="bg" />
            </div>
          </div>
        )
      })}
    </div>
  )
}


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    listData: [],
    areaList: [],
    newSongList: [],
    hotSongList: [],
    currentIndex: 0,
    loading: true
  };

  componentDidMount() {
    this.getBanner();
    this.getNewSong(0);
    this.getHotSong()
  }

  getBanner() {
    axios.get('/banner').then(res => {
      this.setState({
        listData: res.data
      })
    })
  }

  getNewSong(type = 0) {
    axios.get(`/recommend/newSong?type=${type}`).then(res => {
      this.setState({
        areaList: res.data.lanlist,
        newSongList: res.data.list,
        loading: false
      })
    })
  }

  getHotSong() {
    axios.get('/recommend').then(res => {
      this.setState({
        loading: false,
        hotSongList: res.data.list.v_hot
      })
    })
  }

  setArea(area, index) {
    this.loadChange(true)
    this.getNewSong(index)
    this.setState({
      currentIndex: index
    })
  }

  loadChange = v => {
    this.setState({
      loading: v,
    })
  }

  render() {
    const { listData, areaList, newSongList, currentIndex, hotSongList } = this.state
    return (
      <Spin loading={this.state.loading} size={54} name="cube-grid" color="#6190E8 ">
        <Carousel indicatorType={indicatorSwitch} className='carousel-container' interval={duration}>
          {listData.map(item => (
            <img key={item.id} src={item.picUrl} alt="" />
            // <div key={item.id} style={{ background: '#2e97f1', display: 'flex' }}>
            //   <div style={containerStyle}>{item.picUrl}</div>
            // </div>
          ))}
        </Carousel>
        <NewSongList
          newSongList={newSongList}
          areaList={areaList}
          currentIndex={currentIndex}
          setArea={(area, index) => this.setArea(area, index)}
          loadStatus={this.state.loading}
        />
        <HotSongList hotSongList={hotSongList} loadStatus={this.state.loading} />
      </Spin>
    );
  }
}

export default Home;
