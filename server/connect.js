import mysql from 'mysql2';

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"W7301@jqir#",
    database:"social"
}) 
