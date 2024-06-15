import './share.scss';
import { makeRequest } from "../../axios.js";
import Upload from "../../assets/upload.png";
import Location from "../../assets/add-location.png";
import Tag from "../../assets/tag-friend.png";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useQueryClient,useMutation } from '@tanstack/react-query';

const Share = () => {
    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient(); 

    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState(null);

    const mutation = useMutation({
        mutationFn: (newPost) => {
            return makeRequest.post('/posts', newPost);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        }
    });

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        mutation.mutate({desc})
    };

  return (
    <div className='share'>
        <div className="container">
            <div className="top">
                <img src={currentUser.profilePic} alt="profilePic" />
                <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={e => setDesc(e.target.value)} />
            </div>
            <hr />
            <div className="bottom">
                <div className="left">
                    <input type="file" id="file" style={{display:"none"}} onChange={e => setFile(e.target.value)}/>
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
                </div>
                <div className="right">
                    <button onClick={handleSubmit}>Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share