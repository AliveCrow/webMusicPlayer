import './rank.scss';
import React, { Fragment } from 'react';
import axios from '@libs/axiosLibs'
import { Radio, Spin } from 'shineout'

import CList from '@components/list'

class Rank extends React.Component {
  state = {
    rankListData: [],
    rankType: '巅峰榜',
    rank: '飙升榜',
    songInfoList: [],
    loading: true,
    typeLoading: true
  }

  componentDidMount() {
    this.init()
  }

  init() {
    axios.get('/rank').then(res => {
      this.setState({
        rankListData: res.list,
        loading: false
      }, () => {
        this.getListData(res.list[0].toplist[0].topId)
      })
    })
  }

  selectRankType(e) {
    this.setState({
      rankType: e,
    })
  }
  selectRank(e, toplist) {
    this.setState({
      rank: e,
      loading: true,
    }, () => {
      let topId = toplist.find(v => v.title === e).topId
      this.getListData(topId)
    })
  }
  getListData(topId) {
    axios.get(`/rank/top?topId=${topId}`).then(res => {
      this.setState({
        songInfoList: res.data.songInfoList,
        loading: false,
        typeLoading: false
      })
    })
  }

  renderFooter() { }

  render() {
    const rankList = this.state.rankListData.filter(v => v.groupName === this.state.rankType)[0]
    return (
      <Fragment>
        <div className="rank-group" >
          <Radio.Group button keygen='groupId' data={this.state.rankListData} format="groupName" onChange={(e) => this.selectRankType(e)} renderItem="groupName" defaultValue={this.state.rankType} />
        </div>
        <Spin loading={this.state.typeLoading} size={20} name="ring" color="#6190E8 ">
          <div className="rank-group" >
            <Radio.Group button keygen='topId' onChange={(e) => this.selectRank(e, rankList.toplist)} data={rankList && rankList.toplist} defaultValue={this.state.rank} format="title" renderItem="title" />
          </div>
        </Spin>

        <Spin loading={this.state.loading} size={54} name="cube-grid" color="#6190E8 ">
          <div className="rank-list " style={{ padding: '10px' }} >
            <CList songInfoList={this.state.songInfoList}></CList>
          </div>
        </Spin>
      </Fragment>
    );
  }
}

export default Rank;
