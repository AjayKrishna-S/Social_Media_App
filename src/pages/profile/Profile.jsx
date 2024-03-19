import './profile.scss';
import profile from '../../assets/images/peter-profile.JPG'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { NoEncryption } from '@mui/icons-material';
import Posts from '../../components/posts/Posts.jsx';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://img.freepik.com/free-vector/realistic-halloween-cobweb-background_23-2149068118.jpg?t=st=1710848710~exp=1710852310~hmac=035978e9d630028c1e2f3594d28493d52207a655d6e759de8169fb349050f060&w=740" alt="" className='cover'/>
        <img src={profile} alt="" className='profilePicture'/>
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href='http:/facebook.com'>
              <FacebookOutlinedIcon fontSize='large'/>
            </a>
          </div>
          <div className="middle">
            <span className="userName">Peter Parker</span>
            <span className="about">Who am I ???</span>
            <button>Follow</button>
          </div>
          <div className="right">
            <MailOutlineOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile