import { InfoOutlined, MergeType, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export const Featured = ({type}) => {
    console.log(type)

    return (
        
        <div className="featured">
            {type && (<div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="animation">Animation</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="family">Family</option>
                    <option value="action">Action</option>
                    <option value="horror">Horror</option>
                </select>
            </div> )}
            <img src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg" 
             alt="" />
            <div className="info">
            <img src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg" 
             alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet accusantium 
                voluptates, animi, at rem nobis facere dolor sit illo ab unde molestias accusamus quam incidunt alias pariatur quaerat distinctio.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
            </div>
        </div>
    )
}
