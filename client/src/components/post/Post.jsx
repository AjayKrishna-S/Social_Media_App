import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from 'react';
import Comments from '../comments/Comments.jsx';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios.js';

const Post = ({post}) => {
    const postId = post.id;
    // const [liked, setLiked] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);

        const { data, error, isLoading } = useQuery({
            queryKey: ["likes", postId],
            queryFn: () => {
                return makeRequest.get(`/likes?postId=${postId}`).then((res) => {
                    return res.data;
                });
            }
        });
    
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error loading likes</div>;
        if (data) console.log(data);;

  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className='userData'>
                        <img src={post.profilePic} alt={post.name} />
                        <div className="details">
                    <Link 
                        to={`/profile/${post.userId}`}
                        style={{textDecoration:'none', color:'inherit'}}
                    >
                            <span className='name'>{post.name}</span>
                    </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                </div>
                    <MoreHorizIcon />
            </div>
            <div className="content">
                <p>{post.desc}</p>
                {post.img && 
                    <img src={"./upload/" + post.img} alt={post.name} />
                }
            </div>
            <div className="info">
                <div className="item">
                    {/* { liked 
                        ? <FavoriteOutlinedIcon 
                            style={{color : "red"}} 
                            onClick ={()=>{setLiked(!liked)}}/> 
                        : <FavoriteBorderOutlinedIcon 
                            onClick ={()=>{setLiked(!liked)}}/>} */}
                17 Likes</div>
                <div className="item" 
                    onClick={()=> setCommentOpen(!commentOpen)}>
                    <CommentOutlinedIcon />
                5 Commands</div>
                <div className="item"><ShareOutlinedIcon /> 
                Share</div>
            </div>
            {commentOpen && <Comments postId = {post.id}  />}
        </div>
    </div>
  )
}

export default Post