import React from 'react';
import { Progress, Spin } from "shineout";



let audio = new Audio();
class MusicPlayerQQ extends React.Component {
    init(url) {
        audio.autoplay = true;
        audio.src = url
    }

    componentDidUpdate() {
        this.init(this.props.playerInfo.url)
    }
    // componentWillReceiveProps() {
    // }

    render() {
        return (
            <Spin loading={this.props.playerInfo.loading} size={20} name="wave" color="#6190E8">
                {
                    <div className="poly-music-player">
                        <div className="poly-music-player-info">
                            <img height="80px" width="90px" src={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${this.props.playerInfo.album&&this.props.playerInfo.album.mid}.jpg`}
                                alt=""  />
                            <div className="poly-music-player-info-right">
                                <div className="song-info">
                                    <div className="song-name">{this.props.playerInfo.name}</div>
                            -
                            <div className="song-singer">{
                                        this.props.playerInfo.singer && this.props.playerInfo.singer.map(v => (
                                            <span key={v.id}>{v.name}</span>
                                        ))
                                    }</div>
                                </div>
                                <div className="song-duration">00:00/3:21</div>
                                <Progress value={60} color="#6190E8" strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                }
            </Spin>

        )
    }
}

export default MusicPlayerQQ