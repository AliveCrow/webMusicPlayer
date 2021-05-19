import './rank.scss';
import React, { Fragment } from 'react';
import axios from '@libs/axiosLibs'
import { Radio, DataList, Button } from 'shineout'
import { Icon } from 'shineout'



const url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
const FontAwesome = Icon(url, 'FontAwesome', 'fa')

const { BaseItem } = DataList

const data = [
  {
    id: 1,
    firstName: 'Ephraim',
    lastName: 'Wisozk',
    position: 'Marketing Designer',
    start: '2012-01-29',
    time: '01:42',
    salary: 115777,
    country: 'Reunion',
    office: 'Miami',
    office5: 'Istanbul',
    height: 113.74,
  },
  {
    id: 2,
    firstName: 'Osvaldo',
    lastName: 'Beer',
    position: 'Financial Controller',
    start: '2007-09-04',
    time: '03:26',
    salary: 396093,
    country: 'Syrian Arab Republic',
    office: 'San Paulo',
    office5: 'Shenzhen',
    height: 82.13,
  },
  {
    id: 3,
    firstName: 'Dylan',
    lastName: 'Ratke',
    position: 'Development Lead',
    start: '2009-10-16',
    time: '01:45',
    salary: 236064,
    country: 'Peru',
    office: 'Boston',
    office5: 'Delhi',
    height: 179.53,
  },
  {
    id: 4,
    firstName: 'Shaniya',
    lastName: 'Jacobs',
    position: 'Developer',
    start: '2014-06-30',
    time: '02:17',
    salary: 338985,
    country: 'Peru',
    office: 'Chengdu',
    office5: 'Dallas-Fort Worth',
    height: 190.11,
  },
]

class Rank extends React.Component {
  state = {
    rankListData: [],
    rankType: '巅峰榜',
    rank: '飙升榜',
    songInfoList: []

  }

  componentDidMount() {
    this.init()
  }

  init() {
    axios.get('/rank').then(res => {
      this.setState({
        rankListData: res.list
      }, () => {
        this.getListData(res.list[0].toplist[0].topId)
      })
    })
  }

  selectRankType(e) {
    this.setState({
      rankType: e
    })
  }
  selectRank(e, toplist) {
    this.setState({
      rank: e
    }, () => {
      let topId = toplist.find(v => v.title === e).topId
      this.getListData(topId)
    })
  }
  getListData(topId) {
    axios.get(`/rank/top?topId=${topId}`).then(res => {
      this.setState({
        songInfoList: res.data.songInfoList
      })
    })
  }

  renderItem(rowData) {
    return <BaseItem
      className="base-item"
      avatar={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${rowData.album.mid}.jpg`}
      desc={
        <>
          <div>
            <span className="base-item-song-name">{rowData.name}</span> - <span style={{ color: "#8DABC4", fontSize: ".8rem" }}>{rowData.singer[0] && rowData.singer[0].name}</span>
          </div>
          <div style={{ color: "#A8C6DF", fontSize: ".8rem" }}>
            {rowData.album.name}
          </div>
        </>
      } 
      extra={[
        <FontAwesome className="play-circle" style={{marginRight: 20,fontSize:'1.2rem' }} name="play-circle" />,
        <FontAwesome className="plus" style={{marginRight: 20,fontSize:'1.2rem',fontWeight:200 }} name="plus" />
      ]}
      />
     
  }

  renderFooter() { }

  render() {
    const rankList = this.state.rankListData.filter(v => v.groupName === this.state.rankType)[0]
    return (
      <Fragment >
        <div className="rank-group" >
          <Radio.Group button keygen='groupId' data={this.state.rankListData} format="groupName" onChange={(e) => this.selectRankType(e)} renderItem="groupName" defaultValue={this.state.rankType} />
        </div>
        <div className="rank-group" >
          <Radio.Group button keygen='topId' onChange={(e) => this.selectRank(e, rankList.toplist)} data={rankList && rankList.toplist} defaultValue={this.state.rank} format="title" renderItem="title" />
        </div>
        <div className="rank-list " style={{ padding: '10px' }} >
          <DataList keygen="id" bordered data={this.state.songInfoList} renderItem={this.renderItem} />
        </div>
      </Fragment>
    );
  }
}

export default Rank;
