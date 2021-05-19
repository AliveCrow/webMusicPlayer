import { CardGroup } from 'shineout';

function HotSongList(props) {
  return (
    <div className="new-song-list">
       <h1 style={{ fontSize: '2rem', margin: '40px', textAlign: "center" }} >热门歌单</h1>
        <CardGroup columns={4} className="new-song-list-gard-group">
        {
          props.hotSongList.map((item, index) => {
            return (
              <CardGroup.Item key={item.content_id} className="song-detail">
                <>
                  <div className="song-img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="song-detail-list">
                    <span className="song-name">{item.title}</span>
                    <span className="song-singer">{item.rcmdtemplate}</span>
                  </div>
                </>

              </CardGroup.Item>
            )
          })
        }
      </CardGroup>
    </div>

  )
}

export default HotSongList