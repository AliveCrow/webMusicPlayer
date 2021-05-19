import React, { Component } from 'react';
import CList from '@components/list';
import axios from '@libs/axiosLibs';
import { Spin } from 'shineout'
class Daily extends Component {
  state = {
    dailyInfo: [],
    loading: true
  }

  componentDidMount() {
    this.getDailyList()
  }

  getDailyList() {
    axios.get('/recommend/daily').then(res => {
      this.setState({
        dailyInfo: res.data.cdlist[0],
        loading: false
      })
    })
  }

  render() {
    return (
      <Spin loading={this.state.loading} size={54} name="cube-grid" color="#6190E8 ">
        <div style={{ display: 'flex', margin:'20px'}}>
          <img className="pic" src={this.state.dailyInfo.dir_pic_url2} alt="" />
          <div style={{ alignSelf:'flex-start',margin:'30px'}}>
            <span>{this.state.dailyInfo.desc}</span>
            <div style={{fontSize:'22px',marginTop:'20px'}}>{this.state.dailyInfo.dissname}</div>
          </div>
        </div>
        <CList songInfoList={this.state.dailyInfo.songlist}></CList>
      </Spin>
    );
  }
}

export default Daily