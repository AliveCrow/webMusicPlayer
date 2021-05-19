import { CardGroup } from 'shineout';
import AreaList from './area_list';

function newSongList(props) {
  return (
    <div className="new-song-list">
      <h1 style={{ fontSize: '2rem', margin: '40px', textAlign: "center" }} >新歌推荐</h1>
      <AreaList areaList={props.areaList} currentIndex={props.currentIndex} setArea={(area, index) => props.setArea(area, index)} />
      <CardGroup columns={4} className="new-song-list-gard-group">
        {
          props.newSongList.map((item, index) => {
            if (index >= 20) return;
            return (
              <CardGroup.Item key={item.id} className="song-detail">
                {/* <div className="song-detail" key={item.id}> */}
                <>
                  <div className="song-img">
                    <img src={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album.mid}.jpg`} alt="" />
                  </div>
                  <div className="song-detail-list">
                    <span className="song-name">{item.album.name}</span>
                    <span className="song-singer">{item.singer[0].name}</span>
                  </div>
                </>

                {/* </div> */}
              </CardGroup.Item>

            )
          })
        }
      </CardGroup>


    </div>

  )
}

export default newSongList