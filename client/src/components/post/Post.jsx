import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useContext, useState } from 'react';
import Comments from '../comments/Comments.jsx';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios.js';
import { AuthContext } from '../../context/authContext.js';

const Post = ({post}) => {
    const postId = post.id;
    const [commentOpen, setCommentOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

        const { data, error, isLoading } = useQuery({
            queryKey: ["likes", postId],
            queryFn: () => {
                return makeRequest.get(`/likes?postId=${postId}`).then((res) => {
                    return res.data;
                });
            },
        });

    const queryClient = useQueryClient(); 

    const mutation = useMutation({
        mutationFn: (liked) => {
            if(liked) makeRequest.delete('/likes?postId='+postId);
            return makeRequest.post('/likes', {postId});
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["likes"]);
        }
    });

    const handleLikes = () => {
        mutation.mutate(data.includes(currentUser.id));
    }

  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className='userData'>
                        <img src={post.profilePic} alt={post.name} />
                        <div className="details">
                    <Link 
                        to={`/profile/${post.userid}`}
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
                    { isLoading ? "Loading" 
                        : data.includes(currentUser.id) 
                            ? <FavoriteOutlinedIcon 
                                style={{color : "red"}} 
                                onClick ={handleLikes}/> 
                            : <FavoriteBorderOutlinedIcon 
                                onClick ={handleLikes}/>}
                    {isLoading ? "Loading" 
                        :data.length}
                </div>
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