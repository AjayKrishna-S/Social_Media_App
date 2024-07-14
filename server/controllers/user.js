import { db } from "../connect.js";

export const getUser = (req,res) => {
    const userId = req.params.userId;
    const q = `SELECT * FROM users WHERE id = ?`;

    db.query(q,[userId], (err, data)=>{
        if(err) return res.status(500).json(err);
        const {password, ...other} = data[0];
        console.log(other);
        return res.status(200).json(other)
    })
}