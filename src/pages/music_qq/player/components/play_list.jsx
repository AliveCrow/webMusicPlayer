import {useState} from 'react'
import {Spin} from "shineout";


function PlayList(props) {
    const [currentIndex,setCurrentIndex] = useState(-1)

    const setPlayUrl=(item,index)=>{
        props.setPlayUrl(item,index);
        setCurrentIndex(index)
        window.currentIndex = index
    }

    return (
        <>
            <h2>播放列表:</h2>
            <Spin loading={props.loading} size={20} name="wave" color="#6190E8">
                <ul>
                    {
                        props.playList.map((item,index) => (
                            <li onClick={()=>setPlayUrl(item,index)} className={`poly-music-content-left-playlist ${window.currentIndex===index?'isPlaying':''}`}  key={item.mid}  >
                                <span title={item.name}>{item.name}</span>
                            </li>
                        ))
                    }   
                </ul>
            </Spin>
        </>
    )
}

export default PlayList