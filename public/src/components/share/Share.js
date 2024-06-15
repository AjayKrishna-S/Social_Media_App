import './share.scss';
import Upload from "../../assets/upload.png";
import Location from "../../assets/add-location.png";
import Tag from "../../assets/tag-friend.png";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Share = () => {
    const { currentUser } = useContext(AuthContext);

  return (
    <div className='share'>
        <div className="container">
            <div className="top">
                <img src={currentUser.profilePic} alt="profilePic" />
                <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
            </div>
            <hr />
        </div>
        <div className="bottom">
            <div className="left">
                <input type="file" id="file" style={{display:"none"}} />
                <label htmlFor="file">
                    <div className='item'>
                        <img src={Upload} alt="upload" />
                        <span>Add Image</span>
                    </div>
                </label>
                <div className="item">
                    <img src={Location} alt="map" />
                    <span>Add Place</span>
                </div>
                <div className='item'>
                    <img src={Tag} alt="Tag" />
                    <span>Tag Friends</span>
                </div>
                <div className="right">
                    <button>Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share