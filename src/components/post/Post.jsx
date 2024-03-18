import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from 'react';

const Post = ({post}) => {

    const [liked, setLiked] = useState(false);

    const toggle = () =>{
        setLiked(!liked)
    }

  return (
    <div className='post'>
        <div className="container">

            <div className="user">
                <div className='userInfo'>
                    <img src={post.profilePicture} alt={post.name} />
                    <div className="details">
                        <span className='name'>{post.name}</span>
                        <span className='date'>1 min ago</span>
                    </div>
                </div>
                    <MoreHorizIcon />
            </div>
            <div className="content">
                <p>{post.desc}</p>
                {post.img && 
                    <img src={post.img} alt={post.name} />
                }
            </div>
            <div className="info">
                <div className="item">{ liked ? <FavoriteOutlinedIcon onClick = {toggle}/> :  <FavoriteBorderOutlinedIcon onClick = {toggle}/>} 17 Likes</div>
                <div className="item"><CommentOutlinedIcon /> 5 Commands</div>
                <div className="item"><ShareOutlinedIcon /> Share</div>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Post