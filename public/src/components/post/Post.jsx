import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from 'react';
import Comments from '../comments/Comments';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    const [liked, setLiked] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className='post'>
        <div className="container">

            <div className="user">
                <div className='userData'>
                        <img src={post.profilePicture} alt={post.name} />
                        <div className="details">
                    <Link 
                        to={`/profile/${post.userId}`}
                        style={{textDecoration:'none', color:'inherit'}}
                    >
                            <span className='name'>{post.name}</span>
                    </Link>
                            <span className='date'>2 hours ago</span>
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
                <div className="item">{ liked ? <FavoriteOutlinedIcon onClick ={()=>{setLiked(!liked)}}/> :  <FavoriteBorderOutlinedIcon onClick ={()=>{setLiked(!liked)}}/>} 17 Likes</div>
                <div className="item" onClick={()=> setCommentOpen(!commentOpen)}><CommentOutlinedIcon /> 5 Commands</div>
                <div className="item"><ShareOutlinedIcon /> Share</div>
            </div>
            {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default Post