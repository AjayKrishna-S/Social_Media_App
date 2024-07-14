import './profile.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/posts/Posts.jsx';
import { useLocation } from 'react-router-dom';
import { makeRequest } from '../../axios.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';

const Profile = () => {

  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { currentUser } = useContext(AuthContext);

  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
        return makeRequest.get("users/find/"+ userId).then((res) => {
            return res.data;
        });
    },
  });

  const { data : followedUserId, err, isLoad } = useQuery({
    queryKey: ["reletionships",userId],
    queryFn : () => {
      return makeRequest.get(`/reletionships?userId=${currentUser.id}`).then(res => {
        return res.data;
      })
    }
  })

//   console.log("folloed userId " + followedUserId);
  console.log("user" + userId + " " + followedUserId);
//  if(followedUserId){
//      console.log(userId + " " + followedUserId);
//  }
  const queryClient = useQueryClient(); 

  const mutation = useMutation({
      mutationFn: (followed) => {
          if(followed) makeRequest.delete("/reletionships?userId="+ userId)
          return makeRequest.post('/reletionships?',{userId});
      },
      onSuccess: () => {
          queryClient.invalidateQueries(["reletionship"]);
      }
  });

  const handleReletionships = () =>{
    mutation.mutate(followedUserId.includes(userId))
  }
  return (
    <div className='profile'>
      {isLoading ? "loading"
      : <>
        <div className="images">
          <img src={data.coverPic} alt="Cover Picture" className='cover'/>
          <img src={data.profilePic} alt="" className='profilePicture'/>
        </div>
        <div className="profileContainer">
          <div className="userInfo">
            <div className="left">
              <a href='http:/facebook.com'>
                <FacebookOutlinedIcon fontSize='large'/>
              </a>
            </div>
            <div className="middle">
              <span className="userName">{data.name}</span>
              <span className="about">Who am I ???</span>
              {isLoading
                ? "Loading.."
                : userId === currentUser.id
                  ? (<button>Update</button>)
                  : (<button onClick={handleReletionships}>
                      {(followedUserId.includes(userId))
                      ? "Following"
                      : "Follow"
                      }     
                    </button>)
              }
            </div>
            <div className="right">
              <MailOutlineOutlinedIcon />
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <Posts />
        </div>
      </>}
    </div>
  )
}

export default Profile