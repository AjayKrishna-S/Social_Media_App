export const getComments = (req,res) => {

        const q = `SELECT p.*,u.id AS userid, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userid)
        LEFT JOIN reletionships AS r ON (p.userid = r.followedUserid) WHERE r.followerUserid = ? OR p.userid = ? ORDER BY p.createdAt DESC`
    
        db.query(q,[req.query.postId], (err, data)=>{
            if (err) return res.status(500).json(err) ;
            return res.status(200).json(data); 
        })
}