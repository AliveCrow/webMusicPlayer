import React, { Component,Fragment } from 'react';
import './index.scss'
import {
  DataList,
  
} from 'shineout';
import { Icon } from 'shineout';


const url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
const FontAwesome = Icon(url, 'FontAwesome', 'fa')
const { BaseItem } = DataList
const renderItem = (rowData) => {
  return <BaseItem
    className="base-item"
    avatar={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${rowData.album && rowData.album.mid || rowData.albummid}.jpg`}
    desc={
      <>
        <div>
          <span className="base-item-song-name">{rowData.name || rowData.songname}</span> - <span style={{ color: "#8DABC4", fontSize: ".8rem" }}>{rowData.singer[0] && rowData.singer[0].name}</span>
        </div>
        <div style={{ color: "#A8C6DF", fontSize: ".8rem" }}>
          {rowData.album && rowData.album.name || rowData.albumname}
        </div>
      </>
    }
    extra={[
      <FontAwesome className="play-circle" style={{ marginRight: 20, fontSize: '1.2rem' }} name="play-circle" />,
      <FontAwesome className="plus" style={{ marginRight: 20, fontSize: '1.2rem', fontWeight: 200 }} name="plus" />
    ]}
  />
}

function CList(props) {
  const {songInfoList} =  props
  // this.state.rankListData.filter(v => v.groupName === this.state.rankType)[0]
    return (
        <div className="rank-list " style={{ padding: '10px' }} >
          <DataList keygen={'songid'||'id'} bordered data={songInfoList} renderItem={renderItem} />
        </div>
    );
}

export default CList